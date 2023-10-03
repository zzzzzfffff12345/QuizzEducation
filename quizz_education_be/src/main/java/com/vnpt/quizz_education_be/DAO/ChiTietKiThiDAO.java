package com.vnpt.quizz_education_be.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vnpt.quizz_education_be.Entity.ChiTietKyThi;
import com.vnpt.quizz_education_be.Entity.LopThi;
import com.vnpt.quizz_education_be.Entity.MonThi;

public interface ChiTietKiThiDAO extends JpaRepository<ChiTietKyThi, Integer> {
    @Query("SELECT p.monThi FROM ChiTietKyThi p WHERE p.kyThi.maKyThi = ?1")
    List<MonThi> getMonThiInKiThi(Integer maKyThi);

    @Query("SELECT p.lopThi FROM ChiTietKyThi p WHERE p.kyThi.maKyThi = ?1 AND p.monThi.maMon=?2")
    List<LopThi> getLopThiByKiThiAndMonThi(Integer maKyThi, Integer maMonThi);
}
