package com.vnpt.quizz_education_be.RestController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    // Get 1 đối tượng thông qua id
    @GetMapping("chitietkythi/{id}")
    public ResponseEntity<ChiTietKyThi> findById(@PathVariable("id") Integer maChiTietKyThi) {
        Optional<ChiTietKyThi> optional = chiTietKyThiDAO.findById(maChiTietKyThi);
        if (!optional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(optional.get());
    }

    @PostMapping("chitietkythi")
    public ResponseEntity<ChiTietKyThi> post(@RequestBody ChiTietKyThi chitietkythi) {
        if (chiTietKyThiDAO.existsById(chitietkythi.getMaChiTietKyThi())) {
            return ResponseEntity.badRequest().build();
            // 400 Bad Request: Địa chỉ tồi
        }
        ChiTietKyThi chitietkythi2 = chiTietKyThiDAO.save(chitietkythi);
        return ResponseEntity.ok(chitietkythi2);
    }

    @PutMapping("chitietkythi/{id}")
    public ResponseEntity<ChiTietKyThi> put(@PathVariable("id") Integer maChiTietKyThi, @RequestBody ChiTietKyThi chitietkythi) {
        if (!chiTietKyThiDAO.existsById(maChiTietKyThi)) {
            return ResponseEntity.notFound().build();
        }
        chiTietKyThiDAO.save(chitietkythi);
        return ResponseEntity.ok(chitietkythi);
    }

    @DeleteMapping("chitietkythi/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer maChiTietKyThi) {
        if (!chiTietKyThiDAO.existsById(maChiTietKyThi)) {
            return ResponseEntity.notFound().build();
        }

        chiTietKyThiDAO.deleteById(maChiTietKyThi);

        return ResponseEntity.ok().build();
    }

}
