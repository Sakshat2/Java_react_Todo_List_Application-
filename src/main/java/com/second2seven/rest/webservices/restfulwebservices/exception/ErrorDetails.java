package com.second2seven.rest.webservices.restfulwebservices.exception;


import java.time.LocalDateTime;

public class ErrorDetails {
	
	private String message;
	private String details;
	private LocalDateTime timestamp;
	public ErrorDetails(LocalDateTime timestamp, String details, String message) {
		super();
		this.message = message;
		this.details = details;
		this.timestamp = timestamp;
	}
	public String getMessage() {
		return message;
	}
	
	public String getDetails() {
		return details;
	}
	
	
	public LocalDateTime getTimestamp() {
		return timestamp;
	}
	
	
	
	

}
