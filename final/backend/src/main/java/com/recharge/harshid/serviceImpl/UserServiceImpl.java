package com.recharge.harshid.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recharge.harshid.dto.BasicResponse;
import com.recharge.harshid.dto.UserResponse;
import com.recharge.harshid.model.User;
import com.recharge.harshid.repository.AddonRepository;
import com.recharge.harshid.repository.PlanRepository;
import com.recharge.harshid.repository.UserRepository;
import com.recharge.harshid.service.UserService;

import lombok.RequiredArgsConstructor;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
   
    @Autowired
    private PlanRepository planRepository;

    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users=userRepository.findAll();
        List<UserResponse> userResponses =
        users.stream().map(user -> UserResponse.builder()
        .id(user.getId())
        .username(user.getUsername())
        .email(user.getEmail())
        .build())
        .collect(Collectors.toList());



        return BasicResponse.<UserResponse>builder()
        .message("User data fetcher successfully")
        .data(userResponses)
        .build();
    }
    @Override
    public BasicResponse<String> deletePlan(Long planId) {
        BasicResponse<String> response = new BasicResponse<>();
        try {
            planRepository.deleteById(planId);
            response.setMessage("Plan deleted successfully");
            return response;
        } catch (Exception e) {
            response.setMessage("Failed to delete plan");
            return response;
        }
    }
    

}
