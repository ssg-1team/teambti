package com.shinsegae.teambti;

public interface CharacterService {
	
	public int setChar(CharacterVO vo);
	public CharacterResponseVO getChar(int id);
	public int getCharCnt(int id);
	public int updateChar(CharacterVO vo);
}
