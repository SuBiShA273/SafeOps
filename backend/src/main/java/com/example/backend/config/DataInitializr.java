package com.example.backend.config;

import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializr implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        seedAdminUser();
    }

    private void seedAdminUser() {
        String adminEmail = "admin@aegismanufacturing.com";
        if (!userRepository.existsByEmail(adminEmail)) {
            User admin = new User();
            admin.setFullName("System Administrator");
            admin.setEmail(adminEmail);
            admin.setPassword(passwordEncoder.encode("Admin@SafeOps1"));
            admin.setRole(Role.ADMIN);
            admin.setEnabled(true);
            userRepository.save(admin);
            System.out.println("=== SafeOps: Default admin user initialized ===");
            System.out.println("Email: " + adminEmail);
            System.out.println("Password: Admin@SafeOps1");
            System.out.println("================================================");
        }
    }
}
