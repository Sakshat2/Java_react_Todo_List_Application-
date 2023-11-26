package com.second2seven.rest.webservices.restfulwebservices.Configuration;
import  static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;



@Configuration
public class SpringSecurityConfiguration {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// all request should be authentiated
		http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated());
		
		//2 if a request is not authenticated , a web page is show 
		// to use withdefaults class we have to static import of customizer.withdefault pacakage
		http.httpBasic(withDefaults());
		
		//2CSRF -> POST ,PUT
		http.csrf().disable();
		return http.build();
	}
}
