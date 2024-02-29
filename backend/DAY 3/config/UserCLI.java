package com.recharge.yogesh.config;

import org.springframework.boot.CommandLineRunner;

import org.springframework.stereotype.Component;

import com.recharge.yogesh.enumerated.Role;
import com.recharge.yogesh.model.User;
import com.recharge.yogesh.repository.UserRepository;

import lombok.RequiredArgsConstructor;
@Component
@RequiredArgsConstructor


public class UserCLI implements CommandLineRunner {
    private final UserRepository userRepository;
    @Override
    public void run(String...args) throws Exception{
        if(userRepository.count()>0)
            return;


        var user =User.builder()
                .name("Admin")
                .email("admin@gmail.com")
                .pwd("admin@123")
                .role(Role.ADMIN)
                .build();
        userRepository.save(user);
    }
    
}
