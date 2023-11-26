package com.second2seven.rest.webservices.restfulwebservices.versioning;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersioningPersonController {
	
	@GetMapping("/v1/person")
	public PersonV1 getFirstVersionOfPerson() {
		return new PersonV1("bob charlie");
	}
	
	@GetMapping("/v2/person")
	public PersonV2 getsecondVersionOfPerson() {
		return new PersonV2(new Name("sakshat","rapkar"));
	}

}
