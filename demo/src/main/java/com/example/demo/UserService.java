package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.User;
import com.example.demo.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository dao;
    
    public boolean addUserData(User userdata) {
        User ud=dao.insert(userdata);
        if(ud!=null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public List<User> findUser() {
        return dao.findAll();
    }
    public User findUserById(String id)
    {
        return dao.findById(id).orElse(null);
    }
}
