package com.airlinestickets.Controller;

import com.airlinestickets.Model.Viagem;
import com.airlinestickets.Service.ViagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/viagem")
@CrossOrigin
public class ViagemController {

	@Autowired
	private ViagemService viagemService;

	@SuppressWarnings("unchecked")
	@GetMapping("/buscarViagens")
	public List<Viagem> list() {
		try {
			return viagemService.listAll();
		} catch (NoSuchElementException e) {
			return (List<Viagem>) new ResponseEntity<Viagem>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/addViagem")
	public String add(@RequestBody Viagem viagem) {
		viagemService.save(viagem);
		return "Boa viagem!";

	}

	@GetMapping("/buscarViagem/{id}")
	public ResponseEntity<Viagem> get(@PathVariable Integer id) {
		try {
			Viagem viagem = viagemService.get(id);
			return new ResponseEntity<Viagem>(viagem, HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Viagem>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/alterarViagem/{id}")
	public ResponseEntity<Viagem> update(@RequestBody Viagem newViagem, @PathVariable Integer id) {
		try {
			Viagem existingViagem = viagemService.get(id);
			existingViagem.setOrigem(newViagem.getOrigem());
			existingViagem.setDestino(newViagem.getDestino());
			existingViagem.setValor(newViagem.getValor());
			existingViagem.setData_ida(newViagem.getData_ida());
			existingViagem.setData_volta(newViagem.getData_volta());
			viagemService.save(existingViagem);
			return new ResponseEntity<>(HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<Viagem>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/excluirViagem/{id}")
	public String delete(@PathVariable Integer id) {
		viagemService.delete(id);
		return "Viagem Cancelada.";
	}

}
