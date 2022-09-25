package com.airlinestickets.Controller;

import com.airlinestickets.Model.Cliente;
import com.airlinestickets.Service.ClienteService;
import com.airlinestickets.Service.ViagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/cliente")
@CrossOrigin
public class ClienteController {

	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ViagemService viagemService;
	
	@SuppressWarnings("unchecked")
	@GetMapping("/buscarClientes")
	public List<Cliente> list(){
		try {
			return clienteService.listAll();
		} catch (NoSuchElementException e) {
			return (List<Cliente>) new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/cadastrarCliente")
	public String add(@RequestBody Cliente cliente ) {
		cliente.setViagem(viagemService.save(cliente.getViagem()));
		clienteService.save(cliente);
		 
		 return "Cliente cadastrado!";
	}
	
	 @GetMapping("/buscarCliente/{id}")
	    public ResponseEntity<Cliente> get(@PathVariable Integer id) {
	        try {
	        	Cliente cliente = clienteService.get(id);
	            return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);

	        } catch (NoSuchElementException e) {
	            return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
	        }
	    }

	@PutMapping("/alterarCliente/{id}")
	public ResponseEntity<Cliente> update(@RequestBody Cliente newCliente,@PathVariable Integer id){
		try{
			clienteService.update(id, newCliente);
			if(newCliente.getViagem() != null) {
				viagemService.update(newCliente.getViagem().getId(), newCliente.getViagem());
			}
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (NoSuchElementException e){
			return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteCliente/{id}")
	public String delete(@PathVariable Integer id){
		Cliente delCliente = clienteService.get(id);
		clienteService.delete(id);
		if(delCliente.getViagem() != null) {
			viagemService.delete(delCliente.getViagem().getId());
		}
		return "Cliente Excluido.";
	}
}