package com.lds;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lds.ContactVo;


@Controller
public class HelloController {
	
    @Autowired
    ContactService contactService;
    
    @Autowired
    private ContactMapperImpl contactMapper;
	
    @GetMapping("/hello")
    @ResponseBody
    public String hello() {
    	System.out.println("안녕");
        return "Hello World!";
    }
    
    
    // 문의사항 양식
    @PostMapping("/submitForm")
    public String handleSubmitForm(ContactVo contactVo) {
    	
        // VO 객체의 필드에 값이 제대로 들어가는지 확인하기 위해 각 필드를 출력합니다.
    	System.out.println("-------------------------------------");
        System.out.println("Name: " + contactVo.getCustName());
        System.out.println("Email: " + contactVo.getCustEmail());
        System.out.println("Tel: " + contactVo.getCustHp());
        System.out.println("Text: " + contactVo.getCustQuestion());
        System.out.println("-------------------------------------");

        contactService.joinUser(contactVo, contactMapper);
        
        // 처리 후 알림창을 띄운 후 index.html로 리다이렉트
        return "redirect:/redirectWithAlert"; 
    }
    
    
    // 얼럿창 띄우기
    @GetMapping("/redirectWithAlert")
    @ResponseBody
    public String redirectWithAlert() {
        // 리다이렉트 전에 클라이언트에게 전송할 스크립트를 생성하여 반환
        return "<script>alert('고객님 문의접수가 처리되었습니다.'); window.location='/index.html';</script>";
    }
    
    
    
}