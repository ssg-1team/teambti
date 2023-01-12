package com.shinsegae.teambti;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins= "*")
@RestController // API를 위한 컨트롤러
@RequestMapping("/mbti")
public class MbtiApiController {
	
	@Autowired
	MbtiService mbtiService;
	
    @GetMapping("/getAllMbti")
    public List<MbtiResponseVO> getAllMbti() {
    	List<MbtiResponseVO> entity = mbtiService.getAllMbti();
        return entity;
    }
}
