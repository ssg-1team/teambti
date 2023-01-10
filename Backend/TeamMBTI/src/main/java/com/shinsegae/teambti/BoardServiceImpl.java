package com.shinsegae.teambti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper mapper;
	
	@Override
	public int insert(BoardVO vo) {
		// 비즈니스로직 처리
		System.out.println("실행전:"+vo.getNo());
		int r = mapper.boardInsert(vo);
		// 위 실행 후 vo안에 no에는 방금등록한 값이 저장
		System.out.println("실행후:"+vo.getNo());
		return r;
	}

}
