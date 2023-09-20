package com.vnpt.quizz_education_be.RestController;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vnpt.quizz_education_be.DAO.CauHoiDAO;
import com.vnpt.quizz_education_be.Entity.CauHoi;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/quizzeducation/api")
public class CauHoiRestController {
    @Autowired
    CauHoiDAO cauHoiDAO;

    @GetMapping("cauhoi")
    public ResponseEntity<List<CauHoi>> findAll() {
        return ResponseEntity.ok(cauHoiDAO.findAll());
    }
}
