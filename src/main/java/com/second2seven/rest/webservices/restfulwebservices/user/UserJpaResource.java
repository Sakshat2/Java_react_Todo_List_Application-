package com.second2seven.rest.webservices.restfulwebservices.user;


import java.net.URI;

import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.second2seven.rest.webservices.restfulwebservices.jpa.PostRepository;
import com.second2seven.rest.webservices.restfulwebservices.jpa.UserRepository;

import jakarta.validation.Valid;
@RestController
public class UserJpaResource {
	
		private UserRepository repository;
//		private UserDaoService service;
		private PostRepository postRepository;

		public UserJpaResource(UserRepository repository,PostRepository postRepository) {
			
			this.repository=repository;
			this.postRepository=postRepository;

		}

		// GET /users
		@GetMapping("/jpa/users")
		public List<User> retrieveAllUsers() {
			//here we were using service to retrive data
     	//	return service.findAll();
			//here we r using jpa repository to retrive data
			return repository.findAll();
			
			
		}

		// GET /users
		//EntityModel
		//WebMvcLinkBuilder
		@GetMapping("/jpa/users/{id}")
		public EntityModel< User> retrieveById(@PathVariable Integer id) {
			//was using service
			//User user = service.findOne(id);
			//jpa using 
			Optional<User> user = repository.findById(id);
			
			if (user.isEmpty())
				throw new UserNotFoundException("id:" + id);
			
			EntityModel<User> entityModel =EntityModel.of(user.get());
			WebMvcLinkBuilder link =linkTo(methodOn(this.getClass()).retrieveAllUsers());
			entityModel.add(link.withRel("all-userss"));
			return entityModel;
		}

		@DeleteMapping("/jpa/users/{id}")
		public void deleteUser(@PathVariable Integer id) {
			//service.DeleteById(id);
			repository.deleteById(id);
		}
		
		@GetMapping("/jpa/users/{id}/posts")
		public List<Post> retrievePostForUser(@PathVariable Integer id) {
		
          Optional<User> user = repository.findById(id);
			
			if (user.isEmpty())
				throw new UserNotFoundException("id:" + id);
			return user.get().getPosts();
			
		}
		

		// POST /users
		// @requestBody sent hall body with user
		@PostMapping("/jpa/users")
		public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
			User savedUser = repository.save(user);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}").
					buildAndExpand(savedUser.getId())
					.toUri();
			return ResponseEntity.created(location).build();
		}
		
		@PostMapping("/jpa/users/{id}/posts")
		public ResponseEntity<Object> createPostForUser(@PathVariable Integer id,@Valid @RequestBody Post post) {
		
          Optional<User> user = repository.findById(id);
			
			if (user.isEmpty())
				throw new UserNotFoundException("id:" + id);
			post.setUser(user.get());
			
			Post savedPost =   postRepository.save(post);
			URI location =ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(savedPost.getId()).toUri();
					
					return ResponseEntity.created(location).build();
		}

	}



