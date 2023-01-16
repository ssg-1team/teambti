package com.shinsegae.teambti;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface MbtiService{
	public List<MbtiResponseVO> getAllMbti();
}
