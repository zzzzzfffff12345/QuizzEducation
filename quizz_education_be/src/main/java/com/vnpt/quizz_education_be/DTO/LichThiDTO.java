package com.vnpt.quizz_education_be.DTO;

import com.vnpt.quizz_education_be.Entity.ChiTietKyThi;

import lombok.Data;

@Data
public class LichThiDTO {

    // private KyThi kyThi;

    private ChiTietKyThi chiTietKyThi;

    // private LopThi lopThi;

    // Time time;

    // String trangThai;

    public LichThiDTO(ChiTietKyThi chiTietKyThi) {
        this.chiTietKyThi = chiTietKyThi;
        // try {
        // this.kyThi = chiTietKyThi.getKyThi();
        // } catch (Exception e) {
        // }
        // try {
        // this.lopThi = chiTietKyThi.getLopThi();
        // } catch (Exception e) {
        // }
        // this.time = chiTietKyThi.getTime();
        // this.trangThai = (String) chiTietKyThi.getTrangThai(false);
    }

}
