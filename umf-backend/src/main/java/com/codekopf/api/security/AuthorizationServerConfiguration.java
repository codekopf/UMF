//package com.codekopf.api.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.oauth2.config.annotation.builders.InMemoryClientDetailsServiceBuilder;
//import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
//import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
//import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
//import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
//import org.springframework.security.oauth2.provider.token.TokenEnhancer;
//import org.springframework.security.oauth2.provider.token.TokenStore;
//
//@Configuration
//@EnableAuthorizationServer
//@SuppressWarnings("DesignForExtension")
//public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {
//    public static final String OAUTH_TOKEN_ENDPOINT = "/vrm/v1/oauth/token";
//
//    private static final String VRM_CLIENT = "vrm-client";
//    private static final String VRM_CLIENT_SECRET = "tJ0xEqQsd9ZDwCJPUZYzJKHcmy1reamdJOlyF4aWIR0niFAQcMsikZlZBnRidbcn";
//    private static final String READ_SCOPE = "read";
//    private static final String WRITE_SCOPE = "write";
//    private static final String REFRESH_TOKEN = "refresh_token";
//    private static final String PASSWORD = "password";
//
//    private final TokenStore tokenStore;
//    private final UserDetailsService userDetailsService;
//    private final AuthenticationManager authenticationManager;
//    private final TokenEnhancer tokenEnhancer;
//    private final PasswordEncoder passwordEncoder;
//
//    @Autowired
//    public AuthorizationServerConfiguration(
//            final TokenStore tokenStore,
//            final UserDetailsService userDetailsService,
//            final AuthenticationConfiguration authenticationConfiguration,
//            final TokenEnhancer tokenEnhancer,
//            final PasswordEncoder passwordEncoder) {
//
//        this.tokenStore = tokenStore;
//        this.userDetailsService = userDetailsService;
//        this.authenticationManager = createAuthManager(authenticationConfiguration);
//        this.tokenEnhancer = tokenEnhancer;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    // this method is extracted purely to isolate the call that throws Exception
//    // this is a library call and we have no control over its signature
//    @SuppressWarnings("IllegalCatch")
//    private static AuthenticationManager createAuthManager(
//            final AuthenticationConfiguration authenticationConfiguration) {
//        try {
//            return authenticationConfiguration.getAuthenticationManager();
//        } catch (final Exception e) {
//            throw new IllegalStateException(e);
//        }
//    }
//
//    @Override
//    public void configure(final ClientDetailsServiceConfigurer clients) {
//        createClientBuilder(clients).withClient(VRM_CLIENT)
//                                    .secret(this.passwordEncoder.encode(VRM_CLIENT_SECRET))
//                                    .scopes(READ_SCOPE, WRITE_SCOPE)
//                                    .authorizedGrantTypes(REFRESH_TOKEN, PASSWORD);
//    }
//
//    // this method is extracted purely to isolate the call that throws Exception
//    // this is a library call and we have no control over its signature
//    @SuppressWarnings("IllegalCatch")
//    private static InMemoryClientDetailsServiceBuilder createClientBuilder(
//            final ClientDetailsServiceConfigurer clientDetails) {
//        try {
//            return clientDetails.inMemory();
//        } catch (final Exception e) {
//            throw new IllegalStateException(e);
//        }
//    }
//
//    @Override
//    public void configure(final AuthorizationServerEndpointsConfigurer endpoints) {
//        endpoints.tokenStore(this.tokenStore).tokenEnhancer(this.tokenEnhancer)
//                 .userDetailsService(this.userDetailsService)
//                 .authenticationManager(this.authenticationManager);
//        endpoints.pathMapping("/oauth/token", OAUTH_TOKEN_ENDPOINT);
//    }
//}
