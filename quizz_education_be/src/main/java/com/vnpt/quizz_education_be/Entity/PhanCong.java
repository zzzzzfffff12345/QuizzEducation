package com.vnpt.quizz_education_be.Entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@SuppressWarnings("serial")
@Data
@Entity
@Table(name = "Phancong")
public class PhanCong implements Serializable {

    @Id
    @Column(name = "ma_phan_cong")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maPhanCong;

    @Column(name = "da_tao_de")
    private Boolean daTaoDe;

    // Relationship N - 1
    @ManyToOne
    @JoinColumn(name = "ma_chi_tiet_ki_thi")
    ChiTietKiThi chiTietKiThi;

    @ManyToOne
    @JoinColumn(name = "ma_mon")
    MonThi monThi;

    @ManyToOne
    @JoinColumn(name = "ten_dang_nhap")
    TaiKhoan taiKhoan;

}
