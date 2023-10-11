package com.vnpt.quizz_education_be.Service;

import org.springframework.stereotype.Service;

import com.vnpt.quizz_education_be.Entity.TaiKhoan;
import com.vnpt.quizz_education_be.DAO.TaiKhoanDAO;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private TaiKhoanDAO taiKhoanRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        TaiKhoan taiKhoan = taiKhoanRepository.findByTenDangNhap(username);
        if (taiKhoan == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new User(taiKhoan.getTenDangNhap(), taiKhoan.getMatKhau(), getAuthorities(taiKhoan.getVaiTro().getTenVaiTro()));
    }

    private Set<SimpleGrantedAuthority> getAuthorities(String roleName) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + roleName));
        return authorities;
    }
}

