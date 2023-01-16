package com.shinsegae.teambti;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberMapper memberMapper;
	
	@Override
	public LoginResponseVO login(MemberVO vo) {
		LoginResponseVO entity = memberMapper.login(vo);
		return entity;
	}
	
	public List<MemberResponseVO> getAll(int id) {
		List<MemberResponseVO> entity = memberMapper.getAll(id);
		return entity;
	}
	
	public MemberResponseVO getEmp(int id) {
		MemberResponseVO entity = memberMapper.getEmp(id);
		return entity;
	}
	
	public int setMbti(MemberVO vo) {
		int r = memberMapper.setMbti(vo);
		return r;
	}
	
	public List<MemberResponseVO> getTag(int id) {
		List<MemberResponseVO> entity = memberMapper.getTag(id);
		return entity;		
	}
	
	public int setTag(MemberVO vo) {
		int r = memberMapper.setTag(vo);
		return r;
	}
	
	public int deleteTag(MemberVO vo) {
		int r = memberMapper.deleteTag(vo);
		return r;
	}
	
	public int setDefaultTag(MemberVO vo) {
		int r = memberMapper.setDefaultTag(vo);
		return r;
	}
	
	public int loginLog(int id) {
		int r = memberMapper.loginLog(id);
		return r;
	}
	
	public int loginCnt(int id) {
		int cnt = memberMapper.loginCnt(id);
		return cnt;
	}
}
