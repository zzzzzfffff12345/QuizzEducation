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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@SuppressWarnings("serial")
@Data
@Entity
@Table(name = "LopThi")
public class LopThi implements Serializable {

    @Id
    @Column(name = "ma_lop_thi")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maLopThi;

    @Column(name = "ten_lop")
    private String tenLop;

    @Column(name = "so_luong_toi_da")
    private int soLuongToiDa;

}
