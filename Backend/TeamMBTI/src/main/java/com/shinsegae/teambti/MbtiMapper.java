package com.shinsegae.teambti;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MbtiMapper {
	
	List<MbtiResponseVO> getAllMbti();
}
