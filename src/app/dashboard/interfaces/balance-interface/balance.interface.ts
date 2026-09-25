export interface BalanceUser {
  userName:       string;
  currentBalance: number;
  lastRecharge:   Date;
  totalTrips:     number;
}

export interface BalanceRecharge{}