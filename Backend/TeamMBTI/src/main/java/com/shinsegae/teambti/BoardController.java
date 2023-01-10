package com.shinsegae.teambti;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BoardController extends BaseController {
	
	@Autowired
	BoardService service;

	@GetMapping("/index.ssg")
	public String index() {
		return "board/board_list";
	}
	
	@GetMapping("/write.ssg")
	public String write() {
		return "board/board_write";
	}
	
	@PostMapping("/write.ssg")
	public void insert(BoardVO param, Model model, HttpServletResponse res) throws Exception {
		int r = service.insert(param);
		String msg = "";
		String url = "";
		if (r > 0) {
			msg = "정상적으로 저장되었습니다.";
			url = "index.ssg";
		} else {
			msg = "정상 실패";
			url = "write.ssg";
		}
		alert(res, msg, url);
	}
}




