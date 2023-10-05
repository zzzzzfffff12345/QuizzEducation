package com.vnpt.quizz_education_be.DAO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.vnpt.quizz_education_be.Entity.ChiTietKyThi;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChiTietKiThiDAO extends JpaRepository<ChiTietKyThi, Integer> {
    @Query("SELECT ct FROM ChiTietKyThi ct WHERE ct.kyThi.maKyThi = :maKyThi")
    List<ChiTietKyThi> findByMaKyThi(@Param("maKyThi") int maKyThi);

     @Query("SELECT ct FROM ChiTietKyThi ct WHERE ct.monThi.maMon = :maMon")
    List<ChiTietKyThi> findByMaMon(@Param("maMon") int maMon);
    
     @Query("SELECT ct FROM ChiTietKyThi ct WHERE ct.lopThi.maLopThi = :maLopThi")
    List<ChiTietKyThi> findByMaLopThi(@Param("maLopThi") int maLopThi);

}
