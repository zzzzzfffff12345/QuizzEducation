package com.vnpt.quizz_education_be.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.vnpt.quizz_education_be.DAO.VaiTroDAO;
import com.vnpt.quizz_education_be.Entity.VaiTro;

@Controller
public class DemoController {
    @Autowired
    VaiTroDAO vaitrodao;

    @GetMapping("/")
    public String getVaitro(){
        List<VaiTro> a = vaitrodao.findAll();
        System.out.println(a);
        return "d";
    }
}
