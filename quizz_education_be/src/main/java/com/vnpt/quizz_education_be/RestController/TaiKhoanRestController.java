package com.vnpt.quizz_education_be.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vnpt.quizz_education_be.DAO.TaiKhoanDAO;
import com.vnpt.quizz_education_be.DAO.VaiTroDAO;
import com.vnpt.quizz_education_be.Entity.TaiKhoan;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/quizzeducation/api")
public class TaiKhoanRestController {
    @Autowired
    TaiKhoanDAO taiKhoanDAO;

    @Autowired
    VaiTroDAO vaiTroDAO;

    @GetMapping("taikhoan")
    public ResponseEntity<List<TaiKhoan>> findAll() {
        return ResponseEntity.ok(taiKhoanDAO.findAll());
    }

}
