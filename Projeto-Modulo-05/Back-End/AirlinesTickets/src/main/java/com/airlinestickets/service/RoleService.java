package com.airlinestickets.service;

import com.airlinestickets.model.Role;
import com.airlinestickets.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public Role cadastrarRole(Role role) {
        return roleRepository.save(role);
    }
}