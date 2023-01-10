package com.shinsegae.teambti;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {

	int boardInsert(BoardVO param);
	
	BoardVO selectOne(int no);
	List<BoardVO> selectList();
}
