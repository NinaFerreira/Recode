package com.airlinestickets.Controller;

import com.airlinestickets.Model.Contato;
import com.airlinestickets.Service.ContatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/contato")
@CrossOrigin
public class ContatoController {

	@Autowired
	private ContatoService contatoService;

	@SuppressWarnings("unchecked")
	@GetMapping("/buscarContatos")
	public List<Contato> list() {
		try {
			return contatoService.listAll();

		} catch (NoSuchElementException e) {
			return (List<Contato>) new ResponseEntity<Contato>(HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/addContato")
	public String add(@RequestBody Contato contato) {
		try {
			contatoService.save(contato);
			return "Contato enviado!";
		}
		catch (Exception e) {
			return e.toString();
		}
	}

	@GetMapping("/buscarContato/{id}")
	public ResponseEntity<Contato> get(@PathVariable Integer id) {
		try {
			Contato contato = contatoService.get(id);
			return new ResponseEntity<Contato>(contato, HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Contato>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/alterarContato/{id}")
	public ResponseEntity<Contato> update(@RequestBody Contato newContato, @PathVariable Integer id) {
		try {
			contatoService.update(id, newContato);
			return new ResponseEntity<>(HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Contato>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deletarContato/{id}")
	public String deleteContato(@PathVariable Integer id) {
		contatoService.delete(id);
		return "Contato Excluido.";
	}

}