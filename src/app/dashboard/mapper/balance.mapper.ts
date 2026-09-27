import { Balance, BalanceResponseBackend } from "../interfaces/balance-interface/balance.interface";

export class BalanceMapper {
    
    static mapBalanceResponseBackToBalanceUser(b_response: BalanceResponseBackend): Balance {
        return {
            userName: b_response.userName,
            currentBalance: b_response.currentBalance,
            lastRecharge: b_response.lastRecharge,
            totalTrips: b_response.totalTrips
        };
    }
}