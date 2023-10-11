import { TaiKhoan } from './TaiKhoan.entity';

export interface KyThi {
  maKyThi: number;
  tenKyThi: string;
  daDienRa: boolean;
  moTa: string;
  thoiGianBatDau: Date;
  thoiGianKetThuc: Date;
  taiKhoan: TaiKhoan;
}
