package com.example.backend.controller;

import com.example.backend.dto.DashboardStatsResponse;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private UserService userService;

    @GetMapping("/admin/stats")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DashboardStatsResponse> getAdminStats() {
        long totalUsers = userService.countUsers();
        return ResponseEntity.ok(new DashboardStatsResponse(totalUsers, 0, 0, 0));
    }

    @GetMapping("/maintenance-manager/stats")
    @PreAuthorize("hasRole('MAINTENANCE_MANAGER')")
    public ResponseEntity<Map<String, Object>> getMaintenanceManagerStats() {
        return ResponseEntity.ok(Map.of(
            "totalEquipment", 0,
            "pendingRequests", 0,
            "openWorkOrders", 0,
            "upcomingMaintenance", 0,
            "overdueMaintenance", 0
        ));
    }

    @GetMapping("/technician/stats")
    @PreAuthorize("hasRole('TECHNICIAN')")
    public ResponseEntity<Map<String, Object>> getTechnicianStats(Authentication authentication) {
        return ResponseEntity.ok(Map.of(
            "assignedWorkOrders", 0,
            "pendingActivities", 0,
            "completedActivities", 0
        ));
    }

    @GetMapping("/safety-officer/stats")
    @PreAuthorize("hasRole('SAFETY_OFFICER')")
    public ResponseEntity<Map<String, Object>> getSafetyOfficerStats() {
        return ResponseEntity.ok(Map.of(
            "pendingSafetyReviews", 0,
            "reportedHazards", 0,
            "documentationGaps", 0
        ));
    }
}
