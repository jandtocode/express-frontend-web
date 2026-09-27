import { Balance, BalanceResponseBackend } from "../interfaces/balance-interface/balance.interface";

export class BalanceMapper {
    
    static mapBalanceResponseBackToBalanceUser(balance: BalanceResponseBackend): Balance {
        return {
            userName: balance.userName,
            currentBalance: balance.currentBalance,
            lastRecharge: balance.lastRecharge,
            totalTrips: balance.totalTrips
        };
    }
}