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
@Table(name = "Dapan")
public class DapAn implements Serializable {

    @Id
    @Column(name = "ma_dap_an")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maDapAn;

    @Column(name = "noi_dung_dap_an")
    private String noiDungDapAn;

    @Column(name = "dap_an_dung")
    private Boolean dapAnDung;

    @Column(name = "diem_dap_an")
    private Float diemDapAn;

    // Relationship N - 1

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ma_cau_hoi")
    CauHoi cauHoi;

}
