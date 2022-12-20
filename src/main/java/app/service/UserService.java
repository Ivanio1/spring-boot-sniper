package app.service;

import app.entities.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import app.repositories.UserRepo;

import java.util.List;

@Service
public class UserService {

    private final UserRepo userRepo;

    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public void saveUser(User newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        userRepo.save(newUser);
    }

    public User findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }


    public User getUser(String name) {
        return userRepo.findByUsername(name);

    }

}