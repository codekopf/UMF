//package com.codekopf.api.security;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//
//import com.codekopf.api.application.users.UserController;
//
//@Configuration
//public class cors {
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//
//        http.csrf()
//            .disable()
//            .authorizeRequests()
//            .antMatchers(HttpMethod.GET, UserController.USER_API_PATH + "/**").hasAnyRole("ADMIN", "USER")
//            .antMatchers(HttpMethod.POST, UserController.USER_API_PATH + "/**").hasRole("ADMIN")
//            .antMatchers(HttpMethod.PUT, UserController.USER_API_PATH + "/**").hasRole("ADMIN")
//            .antMatchers(HttpMethod.DELETE, UserController.USER_API_PATH + "/**").hasRole("ADMIN")
//            .and().httpBasic().realmName(REALM).authenticationEntryPoint(getBasicAuthEntryPoint())
//            .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);//We don't need sessions to be created.
//    }
//}
