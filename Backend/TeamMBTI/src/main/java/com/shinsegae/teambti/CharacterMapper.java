package com.shinsegae.teambti;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CharacterMapper {

	int setChar(CharacterVO vo);
	CharacterResponseVO getChar(int id);
	int getCharCnt(int id);
	int updateChar(CharacterVO vo);
}
