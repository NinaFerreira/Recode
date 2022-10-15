package com.airlinestickets.controller;

import java.util.HashSet;
import java.util.NoSuchElementException;
import javax.annotation.PostConstruct;

import com.airlinestickets.model.Cliente;
import com.airlinestickets.model.User;
import com.airlinestickets.service.ClienteService;
import com.airlinestickets.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ClienteService clienteService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
    @GetMapping("/buscarUser/{id}")
    public ResponseEntity<User> get(@PathVariable Integer id) {
        try {
            User user = userService.get(id);
            return new ResponseEntity<User>(user, HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
    @PutMapping("/alterarUser/{id}")
    public ResponseEntity<User> update(@RequestBody User newUser, @PathVariable Integer id) {
        try {
            userService.update(id, newUser);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @PreAuthorize("hasRole('CLIENTE') or hasRole('ADMIN')")
    @DeleteMapping("/deleteUser/{id}")
    public String delete(@PathVariable Integer id) {
        User delUser = userService.get(id);
        Cliente cliente = clienteService.getCliente(delUser);
        if (cliente != null) {
            cliente.setUser(null);
            clienteService.save(cliente);
            clienteService.delete(cliente.getId());
        }
        delUser.setRoles(new HashSet<>());
        userService.save(delUser);
        userService.delete(id);
        return "Cliente Excluido.";
    }
}