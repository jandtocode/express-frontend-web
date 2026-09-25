import { BalanceUserResponseBackend } from "../interfaces/balance-interface/balance-response.interface";
import { BalanceUser } from "../interfaces/balance-interface/balance.interface";

export class BalanceMapper {
    
    static mapBalanceResponseBackToBalanceUser(b_response: BalanceUserResponseBackend): BalanceUser {
        return {
            userName: b_response.userName,
            currentBalance: b_response.currentBalance,
            lastRecharge: b_response.lastRecharge,
            totalTrips: b_response.totalTrips
        };
    }
}