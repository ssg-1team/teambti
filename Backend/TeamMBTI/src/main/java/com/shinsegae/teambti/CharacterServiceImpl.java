package com.shinsegae.teambti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CharacterServiceImpl implements CharacterService {

	@Autowired
	CharacterMapper characterMapper;
	
	@Override
	public int setChar(CharacterVO vo) {
		int r = characterMapper.setChar(vo);
		return r;
	}
	
	public CharacterResponseVO getChar(int id) {
		CharacterResponseVO entity = characterMapper.getChar(id);
		return entity;
	}
	
	public int getCharCnt(int id) {
		int cnt = characterMapper.getCharCnt(id);
		return cnt;
	}
	
	public int updateChar(CharacterVO vo) {
		int r = characterMapper.updateChar(vo);
		return r;
	}
}
