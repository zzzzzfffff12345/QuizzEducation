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
@Table(name = "Cauhoi")
public class CauHoi implements Serializable {

    @Id
    @Column(name = "ma_cau_hoi")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maCauHoi;

    @Column(name = "noi_dung_cau_hoi")
    private String noiDungCauHoi;

    @Column(name = "diem_cau_hoi")
    private Float diemCauHoi;

    @Column(name = "nhieu_dap_an")
    private Boolean nhieuDapAn;

    // Relationship N - 1

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ma_de_thi")
    DeThi deThi;
}
