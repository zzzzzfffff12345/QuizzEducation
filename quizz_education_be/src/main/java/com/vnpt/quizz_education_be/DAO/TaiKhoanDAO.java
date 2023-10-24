package com.vnpt.quizz_education_be.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vnpt.quizz_education_be.Entity.TaiKhoan;

@Repository
public interface TaiKhoanDAO extends JpaRepository<TaiKhoan, String> {
    @Query("SELECT tk FROM TaiKhoan tk WHERE tk.vaiTro.maVaiTro = 1")
    List<TaiKhoan> findByHocSinh();

    public TaiKhoan findByTenDangNhap(String tenDangNhap);
    public TaiKhoan findByEmail(String email);
    public boolean existsByTenDangNhap(String tenDangNhap);
}
