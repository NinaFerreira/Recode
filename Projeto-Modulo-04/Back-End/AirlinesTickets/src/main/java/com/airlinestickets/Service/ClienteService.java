package com.airlinestickets.Service;

import com.airlinestickets.Model.Cliente;
import com.airlinestickets.Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repoCliente;
	
	public List<Cliente> listAll() {
		return repoCliente.findAll();
	}

	public void save(Cliente cliente) {
		repoCliente.save(cliente);
	}

	public void update(Integer id, Cliente newCliente) {
		Cliente oldCliente = repoCliente.getById(id);
		oldCliente.setNome(newCliente.getNome());
		oldCliente.setIdade(newCliente.getIdade());
		oldCliente.setCpf(newCliente.getCpf());
		repoCliente.save(oldCliente);
	}

	
	public Cliente get(Integer id) {
		return repoCliente.findById(id).get();
	}

	public void delete(Integer id) {
		repoCliente.deleteById(id);
	}

}
