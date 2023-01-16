package com.shinsegae.teambti;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
	
	LoginResponseVO login(MemberVO param);
	List<MemberResponseVO> getAll(int id);
	MemberResponseVO getEmp(int id);
	int setMbti(MemberVO vo);
	List<MemberResponseVO> getTag(int id);
	int setTag(MemberVO vo);
	int deleteTag(MemberVO vo);
	int setDefaultTag(MemberVO vo);
	int loginLog(int id);
	int loginCnt(int id);
}
