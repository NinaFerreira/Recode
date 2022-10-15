package com.airlinestickets.service;

import com.airlinestickets.model.Contato;
import com.airlinestickets.repository.ContatoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ContatoService {
	@Autowired
	private ContatoRepository repoContato;

	public List<Contato> listAll(){
		return repoContato.findAll();
	}
	public void save(Contato contato) {
		repoContato.save(contato);
	}

	public Contato get(Integer id) {
		return repoContato.findById(id).get();
	}

	public void update(Integer id, Contato newContato) {
		Contato oldContato = repoContato.getById(id);
		oldContato.setNome(newContato.getNome());
		oldContato.setEmail(newContato.getEmail());
		oldContato.setMensagem(newContato.getMensagem());
		repoContato.save(oldContato);
	}
	public void delete(Integer id) {
		repoContato.deleteById(id);
	}
}
