package com.shinsegae.teambti;

import java.util.List;

public interface MemberService {
	
	public int isMember(MemberVO vo);
	public LoginResponseVO login(MemberVO vo);
	public List<MemberResponseVO> getAll(int id);
	public MemberResponseVO getEmp(int id);
	public int setMbti(MemberVO vo);
	public List<MemberResponseVO> getTag(int id);
	public int setTag(MemberVO vo);
	public int deleteTag(MemberVO vo);
	public int setDefaultTag(MemberVO vo);
	public int loginLog(int id);
	public int loginCnt(int id);
}
