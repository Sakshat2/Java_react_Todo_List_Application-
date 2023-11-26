package com.second2seven.rest.webservices.restfulwebservices.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;
@Component
public class UserDaoService {

	private static List<User> users=new ArrayList<>();
	private static int userCount =0;
	static {
		users.add(new User(++userCount, "Adam", LocalDate.now().minusYears(30)));
		users.add(new User(++userCount, "ferdam", LocalDate.now().minusYears(20)));
		users.add(new User(++userCount, "JIM", LocalDate.now().minusYears(26)));
	}
	public List<User> findAll(){
		return users;
	}
	
	
	public User save(User user) {
		user.setId(++userCount);
		users.add(user);
		return user;
		
	}
	
	
	
	public User findOne(int id){
		
		Predicate<? super User> Predicate =user-> user.getId().equals(id);
		return users.stream().filter(Predicate).findFirst().orElse(null);
	}
	
public void deleteById(int id){
		
		Predicate<? super User> predicate =user-> user.getId().equals(id);
		users.removeIf(predicate);
		
	}
}
