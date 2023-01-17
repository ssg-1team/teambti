package com.shinsegae.teambti;

import lombok.Data;

@Data
public class LoginResponseVO {

	// login
	private int e_id; // pk
	private String id;
	private String password;
	private String department; // 직급
}
