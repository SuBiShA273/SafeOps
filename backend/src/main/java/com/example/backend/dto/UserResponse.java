package com.example.backend.dto;

import com.example.backend.entity.User;
import java.time.LocalDateTime;

public class UserResponse {
    private Long id;
    private String fullName;
    private String email;
    private String role;
    private boolean enabled;
    private LocalDateTime createdAt;

    public static UserResponse from(User user) {
        UserResponse r = new UserResponse();
        r.id = user.getId();
        r.fullName = user.getFullName();
        r.email = user.getEmail();
        r.role = user.getRole().name();
        r.enabled = user.isEnabled();
        r.createdAt = user.getCreatedAt();
        return r;
    }

    public Long getId() { return id; }
    public String getFullName() { return fullName; }
    public String getEmail() { return email; }
    public String getRole() { return role; }
    public boolean isEnabled() { return enabled; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setId(Long id) { this.id = id; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public void setEmail(String email) { this.email = email; }
    public void setRole(String role) { this.role = role; }
    public void setEnabled(boolean enabled) { this.enabled = enabled; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
