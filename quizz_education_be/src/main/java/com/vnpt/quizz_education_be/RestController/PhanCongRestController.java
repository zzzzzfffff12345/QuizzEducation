package com.vnpt.quizz_education_be.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vnpt.quizz_education_be.DAO.PhanCongDAO;
import com.vnpt.quizz_education_be.Entity.PhanCong;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/quizzeducation/api")
public class PhanCongRestController {
    
    @Autowired
    PhanCongDAO phanCongDAO;

    @GetMapping("phancong")
    public ResponseEntity<List<PhanCong>> findAll() {
        return ResponseEntity.ok(phanCongDAO.findAll());
    }
}
