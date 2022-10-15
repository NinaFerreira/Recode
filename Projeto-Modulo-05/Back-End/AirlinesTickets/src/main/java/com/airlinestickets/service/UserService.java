package com.airlinestickets.service;

import java.util.HashSet;
import java.util.Set;
import javax.validation.Valid;

import com.airlinestickets.model.Role;
import com.airlinestickets.model.User;
import com.airlinestickets.repository.RoleRepository;
import com.airlinestickets.repository.UserRepository;
import com.airlinestickets.security.Request.RegistrarRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("ROLE_ADMIN");
        roleRepository.save(adminRole);

        Role clienterRole = new Role();
        clienterRole.setRoleName("ROLE_CLIENTE");
        roleRepository.save(clienterRole);
    }

    public ResponseEntity<?> registerNewUser(@Valid RegistrarRequest registrarRequest) {
        if (userRepository.existsByEmail(registrarRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body("Email já utilizado!");
        }

        Set<Role> roles = new HashSet<>();
        if(registrarRequest.getRole().equals("ROLE_ADMIN")){
            roles.add(roleRepository.findById("ROLE_ADMIN").get());
        }else if(registrarRequest.getRole().equals("ROLE_CLIENTE")){
            roles.add(roleRepository.findById("ROLE_CLIENTE").get());
        } else {
            return ResponseEntity.badRequest().body("Role não encontrada!");
        }


        User user = new User(registrarRequest.getEmail(),
                passwordEncoder.encode(registrarRequest.getPassword()), roles);

        userRepository.save(user);
        return ResponseEntity.ok("Usuario registrado com sucesso!");
    }

    public User save(User user){
        return userRepository.save(user);
    }
    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public User get(Integer id) {
        return userRepository.findById(id).get();
    }

    public User getEmail(String email) {
        return userRepository.findUserByEmail(email).get();
    }

    public void update(Integer id, User newUser) {
        User oldUser = get(id);
        if(newUser.getEmail() != oldUser.getEmail() && !newUser.getEmail().isEmpty()){
            oldUser.setEmail(newUser.getEmail());
        }else if(newUser.getPassword() != oldUser.getPassword() && !newUser.getPassword().isEmpty()){
            oldUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        }
        userRepository.save(oldUser);
    }
    public void delete(Integer id) {
        userRepository.deleteById(id);
    }
}