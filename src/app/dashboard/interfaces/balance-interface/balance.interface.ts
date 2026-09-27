export interface BalanceResponseBackend {
    success:        boolean;
    userName:       string;
    currentBalance: number;
    lastRecharge:   Date;
    totalTrips:     number;
}

export interface Balance {
  userName:       string;
  currentBalance: number;
  lastRecharge:   Date;
  totalTrips:     number;
}