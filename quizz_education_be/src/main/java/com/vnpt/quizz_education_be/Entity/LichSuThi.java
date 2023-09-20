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
@Table(name = "Lichsuthi")
public class LichSuThi implements Serializable {
    
    @Id
    @Column(name = "ma_lich_su_thi")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maLichSuThi;

      // Relationship N - 1

    @ManyToOne
    @JoinColumn(name = "ma_bo_cau_hoi_da_lam")
    BoCauHoiDaLam boCauHoiDaLam;

    @ManyToOne
    @JoinColumn(name = "ma_dap_an_da_chon")
    DapAn dapAn;
   
}
