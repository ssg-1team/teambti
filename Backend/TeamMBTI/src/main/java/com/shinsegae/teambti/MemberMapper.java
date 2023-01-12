package com.shinsegae.teambti;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
	
	LoginResponseVO login(MemberVO param);
	List<MemberResponseVO> getAll();
	MemberResponseVO getEmp(int id);
	int setMbti(MemberVO vo);
	List<String> getTag(int id);
	int setTag(MemberVO vo);
}
