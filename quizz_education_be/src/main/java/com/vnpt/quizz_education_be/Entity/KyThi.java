package com.vnpt.quizz_education_be.Entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Table(name = "Kythi")
public class KyThi implements Serializable {

    @Id
    @Column(name = "ma_ky_thi")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maKyThi;

    @Column(name = "ten_ky_thi")
    private String tenKyThi;

    @Column(name = "da_dien_ra")
    private Boolean daDienRa;

    @Column(name = "mo_ta")
    private String moTa;

    @Column(name = "thoi_gian_bat_dau")
    private Date thoiGianBatDau;

    @Column(name = "thoi_gian_ket_thuc")
    private Date thoiGianKetThuc;

    // Relationship N - 1

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ten_dang_nhap")
    TaiKhoan taiKhoan;

}
