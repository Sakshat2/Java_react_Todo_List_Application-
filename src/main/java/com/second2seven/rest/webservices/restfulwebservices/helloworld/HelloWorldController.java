package com.second2seven.rest.webservices.restfulwebservices.helloworld;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContext;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//rest api
//restcontroller is added for rest api ,to do opperation related to web requests 

@RestController
public class HelloWorldController {
	
	private MessageSource messageSource;
	
	public  HelloWorldController(MessageSource messageSource) { 
		this.messageSource=messageSource;
		
	}
	
	//(method = RequestMethod.GET,path="/hello-world")
	//getmapping is better way to map get requests
	
	@GetMapping(path = "/hello-world") @CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
	public String helloWorld() {
		return"hello world from getmapping";
		
	}
	
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldbean() {
		return new HelloWorldBean("hello from bean ");
		
	}
	    //path parameters
		//  /users{id}/todos/{id} =>/users/2/todos/200
		// /hello-world/path-variable/{name}
		// /hello-world/path-variable/ranga
	//String.format("helloworld ,%S", name)-google this
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorlPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("helloworld ,%S", name));
		
	}
	@GetMapping(path = "/hello-world-internationalized")
	public String helloWorldInternalionalized() {
		Locale locale =LocaleContextHolder.getLocale();
	
		return	messageSource.getMessage("good.morning.message", null, "Default Message", locale);
		
		
	}

}
