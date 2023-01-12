package com.shinsegae.teambti;

import java.util.List;

public interface MemberService {
	
	public LoginResponseVO login(MemberVO vo);
	public List<MemberResponseVO> getAll();
	public MemberResponseVO getEmp(int id);
	public int setMbti(MemberVO vo);
	public List<String> getTag(int id);
	public int setTag(MemberVO vo);
}
