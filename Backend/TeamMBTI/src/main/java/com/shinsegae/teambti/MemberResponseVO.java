package com.shinsegae.teambti;

import lombok.Data;

@Data
public class MemberResponseVO {
	
	// 직원정보
	private int e_id;
	private String position; // 직급
	private int m_id;
	private String mbti;
	private String name;
	
	private int t_id;
	private String content; // tag
}
