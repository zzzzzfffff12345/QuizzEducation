package com.vnpt.quizz_education_be.Util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import com.vnpt.quizz_education_be.Entity.TaiKhoan;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
    private static final String SECRET_KEY = "your-secret-key"; // Thay thế bằng một khóa bí mật thực sự

    public static String generateToken(TaiKhoan userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getTenDangNhap());
    }

    private static String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // Hết hạn sau 10 giờ
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public static boolean validateToken(String token, TaiKhoan userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getTenDangNhap()) && !isTokenExpired(token));
    }

    private static String extractUsername(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    private static Date extractExpiration(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    private static <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private static Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    private static boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
}
