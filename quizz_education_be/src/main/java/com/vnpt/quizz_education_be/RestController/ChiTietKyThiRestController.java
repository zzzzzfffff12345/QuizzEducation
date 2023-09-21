package com.vnpt.quizz_education_be.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vnpt.quizz_education_be.DAO.ChiTietKiThiDAO;
import com.vnpt.quizz_education_be.Entity.ChiTietKyThi;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/quizzeducation/api")
public class ChiTietKyThiRestController {
    @Autowired
    ChiTietKiThiDAO chiTietKyThiDAO;

    @GetMapping("chitietkythi")
    public ResponseEntity<List<ChiTietKyThi>> findAll() {
        return ResponseEntity.ok(chiTietKyThiDAO.findAll());
    }
}
