package com.shinsegae.teambti;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

public class BaseController {
	
	public void alert(HttpServletResponse res, String msg, String url) throws Exception {
		res.setContentType("text/html; charset=utf-8");
		PrintWriter out = res.getWriter();
		out.print("<script>");
		out.print("alert('"+msg+"');");
		out.print("location.href='"+url+"';");
		out.print("</script>");
	}
}
