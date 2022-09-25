package com.airlinestickets.Service;

import com.airlinestickets.Model.Viagem;
import com.airlinestickets.Repository.ViagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViagemService {

	@Autowired
	private ViagemRepository repoViagem;

	public List<Viagem> listAll() {
		return repoViagem.findAll();
	}

	public Viagem save(Viagem viagem) {
		return repoViagem.save(viagem);

	
	}

	public Viagem get(Integer id) {
		return repoViagem.findById(id).get();
	}

	public void update(Integer id, Viagem newViagem) {
		if ((id != null && id != 0) && (newViagem != null)) {
			Viagem oldViagem = repoViagem.getById(id);
			oldViagem.setOrigem(newViagem.getOrigem());
			oldViagem.setDestino(newViagem.getDestino());
			oldViagem.setValor(newViagem.getValor());
			oldViagem.setData_ida(newViagem.getData_ida());
			oldViagem.setData_volta(newViagem.getData_volta());
			repoViagem.save(oldViagem);
		}
	}

	public void delete(Integer id) {
		repoViagem.deleteById(id);
	}

}
