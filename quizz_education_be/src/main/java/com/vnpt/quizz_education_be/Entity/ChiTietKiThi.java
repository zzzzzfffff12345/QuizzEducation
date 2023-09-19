package com.vnpt.quizz_education_be.Entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import org.springframework.format.datetime.standard.DateTimeContext;

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
@Table(name = "ChiTietKiThi")
public class ChiTietKiThi implements Serializable {
    
    @Id
    @Column(name = "ma_chi_tiet_ki_thi")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maChiTietKiThi;

    @Column(name = "thoi_gian_bat_dau")
    private Date thoiGianBatDau;

    @Column(name = "thoi_gian_ket_thuc")
    private Date thoiGianKetThuc;

    // Relationship N - 1

    @ManyToOne
    @JoinColumn(name = "ma_ki_thi")
    KiThi kiThi;


}
