package com.vnpt.quizz_education_be.DAO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vnpt.quizz_education_be.Entity.TaiKhoan;

@Repository
public interface TaiKhoanDAO extends JpaRepository<TaiKhoan, String> {
}


