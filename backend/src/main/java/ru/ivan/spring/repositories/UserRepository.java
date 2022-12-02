package ru.ivan.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.ivan.spring.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
