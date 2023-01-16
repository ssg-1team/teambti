package com.shinsegae.teambti;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MbtiServiceImpl implements MbtiService{
	@Autowired
	MbtiMapper mbtiMapper;
	
	@Override
	public List<MbtiResponseVO> getAllMbti() {
		List<MbtiResponseVO> entity = mbtiMapper.getAllMbti();
		return entity;
	}
}
