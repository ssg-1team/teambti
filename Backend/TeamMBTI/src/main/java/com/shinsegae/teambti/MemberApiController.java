package com.shinsegae.teambti;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins= "*")
@RestController // API를 위한 컨트롤러
@RequestMapping("/member")
public class MemberApiController {
	
	@Autowired
	MemberService memberService;

	@GetMapping(value="/get", produces="text/plain;charset=utf-8")
	public String get() {
		return "안녕";
	}
	
	// login
    @PostMapping("/login")
    public LoginResponseVO login(@RequestBody MemberVO params) {
    	LoginResponseVO entity = memberService.login(params);
        return entity;
    }
    
    // home > 직원 불러오기
    @GetMapping("/getAll")
    public List<MemberResponseVO> getAll() {
    	List<MemberResponseVO> entity = memberService.getAll();
        return entity;
    }
    
    // home > 직원 불러오기
    @GetMapping("/getEmp/{id}")
    public MemberResponseVO getEmp(@PathVariable int id) {
    	MemberResponseVO entity = memberService.getEmp(id);
    	return entity;
    }
    
    // mbti 등록하기
    @PostMapping("/setMbti")	
    public String setMbti(@RequestBody MemberVO params) {
    	String result = "Success";
    	try {
    		int r = memberService.setMbti(params);
    		if (r < 1) {
    			result = "0건 처리 : fail";
    		}
    	} catch(Exception e) {
    		result="Exception : fail";
    	}
    	return result;
    }
    
    @GetMapping("/getTag/{id}")
    public List<MemberResponseVO> getTag(@PathVariable int id) {
    	List<MemberResponseVO> entity = memberService.getTag(id);
        return entity;
    }
    
    @PostMapping("/setTag")
    public String setTag(@RequestBody MemberVO params) {
    	String result = "Success Insert";
    	try {
    		int r = memberService.setTag(params);
    		if (r < 1) {
    			result = "0건 처리 : fail";
    		}
    	} catch(Exception e) {
    		result="Exception : fail";
    	}
    	return result;    	
    }
    
    @PostMapping("/deleteTag")
    public String deleteTag(@RequestBody MemberVO params) {
    	String result = "Success Delete";
    	try {
    		int r = memberService.deleteTag(params);
    		if (r < 1) {
    			result = "0건 처리 : fail";
    		}
    	} catch(Exception e) {
    		
    		result="Exception : fail";
    	}
    	return result;    	
    }
    
    @PostMapping("/setDefaultTag")
    public String setDefaultTag(@RequestBody MemberVO params) {
    	String result = "Success set Default Tags";
    	try {
    		int r = memberService.setDefaultTag(params);
    		if (r < 1) {
    			result = "0건 처리 : fail";
    		}
    	} catch(Exception e) {
    		
    		result="Exception : fail";
    	}
    	return result;
    }
}
