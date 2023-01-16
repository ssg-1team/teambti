package com.shinsegae.teambti;

import lombok.Data;

@Data
public class CharacterResponseVO {
	private int e_id;
	
	private int head;
	private int ear;
	private int mouth;
	private int eye;
	private int body;
	private int accessory;
	private int background;
	private String completed; // 완성된 캐릭터 이미지 url
}
