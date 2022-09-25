package com.airlinestickets.Service;


import com.airlinestickets.Model.Contato;
import com.airlinestickets.Repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


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
