export interface BalanceUserResponseBackend {
    success:        boolean;
    userName:       string;
    currentBalance: number;
    lastRecharge:   Date;
    totalTrips:     number;
}

export interface DashboardDefaultResponseBackend {
    success:        boolean;
    message:       string;
}
