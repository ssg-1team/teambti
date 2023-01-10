package com.shinsegae.teambti;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class BoardVO {

	private int no;
	private String title;
	private String content;
	private Timestamp regdate;
	private int member_no;
}
