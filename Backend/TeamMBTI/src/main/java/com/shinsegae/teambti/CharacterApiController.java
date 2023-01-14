package com.shinsegae.teambti;

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
@RequestMapping("/char")
public class CharacterApiController {
	
	@Autowired
	CharacterService characterService;
	
	@PostMapping("/setChar")
    public String setChar(@RequestBody CharacterVO params) {
    	String result = "Success";
    	int r = 0;
    	int cnt = characterService.getCharCnt(params.getE_id());
    	if (cnt > 0) {
    		// update
    		r = characterService.updateChar(params);
    	} else {
    		// insert
    		r = characterService.setChar(params);
    	}
		if (r < 1) {
			result = "0건 처리 : fail";
		} 
//    	try {
//    		if (r < 1) {
//    			result = "0건 처리 : fail";
//    		}
//    	} catch(Exception e) {
//    		result="Exception : fail";
//    	}
    	return result;
    }
	
	// 나의 캐릭터 파츠
    @GetMapping("/getChar/{id}")
    public CharacterResponseVO getChar(@PathVariable int id) {
    	CharacterResponseVO entity = characterService.getChar(id);
    	return entity;
    }
	
}
