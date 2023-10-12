package com.vnpt.quizz_education_be.Entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vnpt.quizz_education_be.DTO.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@SuppressWarnings("serial")
@Data
@Entity
@Table(name = "Chitietkythi")
public class ChiTietKyThi implements Serializable {

    @Id
    @Column(name = "ma_chi_tiet_ky_thi")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maChiTietKyThi;

    @Column(name = "thoi_gian_bat_dau")
    private Date thoiGianBatDau;

    @Column(name = "thoi_gian_ket_thuc")
    private Date thoiGianKetThuc;

    // Relationship N - 1

    @ManyToOne
    @JoinColumn(name = "ma_ky_thi")
    KyThi kyThi;

    @ManyToOne
    @JoinColumn(name = "ma_mon")
    MonThi monThi;

    @ManyToOne
    @JoinColumn(name = "ma_lop")
    LopThi lopThi;

    @JsonIgnore
    @OneToMany(mappedBy = "chiTietKyThi")
    List<DeThi> list_DeThi;

    // Tính thời gian làm bài
    public Time getTime() {
        if (this.getThoiGianBatDau() == null || this.getThoiGianBatDau() == null) {
            return null;
        }
        long differenceInMillis = Math.abs(this.getThoiGianKetThuc().getTime() - this.getThoiGianBatDau().getTime());
        return new Time(differenceInMillis);
    }

    public String getTrangThai() {
        Date now = new Date();
        if (this.getThoiGianBatDau() == null || this.getThoiGianBatDau() == null) {
            return "Chưa có thông tin cụ thể";
        }
        if (now.before(this.getThoiGianBatDau())) {
            return "Chưa diễn ra";
        } else if (now.after(this.getThoiGianBatDau()) && now.before(this.getThoiGianKetThuc())) {
            return "Đang diễn ra";
        } else {
            return "Đã kết thúc";
        }
    }

    public int getIdTrangThai() {
        Date now = new Date();
        if (this.getThoiGianBatDau() == null || this.getThoiGianBatDau() == null) {
            return 0;
        }
        if (now.before(this.getThoiGianBatDau())) {
            return 1;
        } else if (now.after(this.getThoiGianBatDau()) && now.before(this.getThoiGianKetThuc())) {
            return 2;
        } else {
            return 3;
        }
    }

    public DeThi getDeThi() {
        try {
            return this.getList_DeThi().get(0);
        } catch (Exception e) {
            return null;
        }
    }

    public Object getTrangThai(boolean layMa) {
        Date now = new Date();
        if (this.getThoiGianBatDau() == null || this.getThoiGianBatDau() == null) {
            if (layMa) {
                return 0;
            } else {
                return "Chưa có thông tin cụ thể";
            }
        }
        if (now.before(this.getThoiGianBatDau())) {
            if (layMa) {
                return 1;
            } else {
                return "Chưa diễn ra";
            }
        } else if (now.after(this.getThoiGianBatDau()) && now.before(this.getThoiGianKetThuc())) {
            if (layMa) {
                return 2;
            } else {
                return "Đang diễn ra";
            }
        } else {
            if (layMa) {
                return 2;
            } else {
                return "Đã kết thúc";
            }
        }
    }
}
