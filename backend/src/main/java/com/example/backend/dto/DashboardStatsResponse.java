package com.example.backend.dto;

public class DashboardStatsResponse {
    private long totalUsers;
    private long totalEquipment;
    private long activeMaintenanceRequests;
    private long openWorkOrders;

    public DashboardStatsResponse(long totalUsers, long totalEquipment, long activeMaintenanceRequests, long openWorkOrders) {
        this.totalUsers = totalUsers;
        this.totalEquipment = totalEquipment;
        this.activeMaintenanceRequests = activeMaintenanceRequests;
        this.openWorkOrders = openWorkOrders;
    }

    public long getTotalUsers() { return totalUsers; }
    public void setTotalUsers(long totalUsers) { this.totalUsers = totalUsers; }
    public long getTotalEquipment() { return totalEquipment; }
    public void setTotalEquipment(long totalEquipment) { this.totalEquipment = totalEquipment; }
    public long getActiveMaintenanceRequests() { return activeMaintenanceRequests; }
    public void setActiveMaintenanceRequests(long activeMaintenanceRequests) { this.activeMaintenanceRequests = activeMaintenanceRequests; }
    public long getOpenWorkOrders() { return openWorkOrders; }
    public void setOpenWorkOrders(long openWorkOrders) { this.openWorkOrders = openWorkOrders; }
}
