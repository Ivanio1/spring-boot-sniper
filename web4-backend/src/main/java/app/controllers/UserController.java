package app.controllers;

import app.data.ResponseMessage;
import app.entities.User;
import app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Objects;


@RestController
@EnableWebSecurity
@RequestMapping("/")
public class UserController {

    @Autowired
    public BCryptPasswordEncoder getEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    private UserService userService;

    @GetMapping
    public RedirectView redirectToIndex() {
        return new RedirectView("/index.html");
    }
    @Autowired
    private PasswordEncoder passwordEncoder;


    @PostMapping(value = "/register")
    public ResponseMessage register(@RequestBody String user) {
        User newUser=new User(user.split(",")[0],user.split(",")[1]);
        if (newUser.getUsername() == null || newUser.getPassword() == null ||
                newUser.getPassword().trim().equals("") || newUser.getUsername().trim().equals(""))
            return new ResponseMessage(400, "Логин или пароль пустые");

        if (userService.findByUsername(newUser.getUsername()) != null) {
            System.out.println("Уже существует");
            return new ResponseMessage(409, "Пользователь с таким логином уже существует!");
        }

        System.out.println("Добавляю " + newUser.getUsername() + " " + newUser.getPassword());
        userService.saveUser(newUser);
        return new ResponseMessage(200, "Пользователь успешно добавлен! Вход...");
    }

    @PostMapping(value = "/signIn")
    public ResponseMessage logIn(@RequestBody String user) {
        User newUser=new User(user.split(",")[0],user.split(",")[1]);
        if (newUser.getUsername() == null || newUser.getPassword() == null ||
                newUser.getPassword().trim().equals("") || newUser.getUsername().trim().equals(""))
            return new ResponseMessage(400, "Логин или пароль пустые");

        if (userService.findByUsername(newUser.getUsername()) == null) {
            System.out.println("Не зареган");
            return new ResponseMessage(409, "Пользователь с таким логином ещё не зарегистрирован!");
        }
        User jpaUser=userService.getUser(newUser.getUsername());
        if(!passwordEncoder.matches(newUser.getPassword(), jpaUser.getPassword())){
            return new ResponseMessage(401, "Неверный пароль!");
        }

        return new ResponseMessage(200, "Пользователь успешно авторизован! Вход...");
    }


    @PostMapping("/ok")
    public ResponseMessage ok() {
        return new ResponseMessage(200, "ok");
    }

    @PostMapping("/err")
    public ResponseMessage err() {
        return new ResponseMessage(400, "error");
    }

}