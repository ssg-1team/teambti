package com.shinsegae.teambti;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://127.0.0.1:5500"})
// * 로 하면 전체
@RestController // API를 위한 컨트롤러
public class BoardApiController {

	@GetMapping(value="/get", 
			produces="text/plain;charset=utf-8")
	public String get() {
		return "안녕";
	}
	
	// post방식으로 JSON데이터를 RequestBody Map에 저장
	@PostMapping("/post")
	public void post(@RequestBody Map<String, String> map) {
		Set<String> keys = map.keySet();
		for (String key : keys) {
			System.out.println(key + ":" + map.get(key));
		}
	}
	
	// post방식으로 JSON데이터를 RequestBody BoardVO에 저장
	// db에 저장
	@Autowired
	BoardMapper mapper;
	
	@PostMapping("/post2")
	public void post2(@RequestBody BoardVO vo) {
		System.out.println("title:"+vo.getTitle());
		System.out.println("content:"+vo.getContent());
		mapper.boardInsert(vo);
	}
	
	// 한건 응답(JSON 객체)
	@GetMapping("/api/board/{no}")
	public BoardVO getBoard(@PathVariable int no) {
		return mapper.selectOne(no);
	}
	
	// 여러건 응답(JSON 배열)
	@GetMapping("/api/board/all")
	public List<BoardVO> getAll() {
		return mapper.selectList();
	}
	
	
}
