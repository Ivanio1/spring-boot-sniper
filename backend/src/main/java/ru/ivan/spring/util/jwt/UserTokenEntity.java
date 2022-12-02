package ru.ivan.spring.util.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserTokenEntity {
    private String username;
    private String jwtToken;
}
