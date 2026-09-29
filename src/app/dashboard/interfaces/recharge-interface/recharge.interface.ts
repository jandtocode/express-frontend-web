export interface RechargeCalculatedResponseBackend {
    success:              boolean;
    message:              string;
    userId:               number;
    typePayment:          string;
    bank:                 string;
    name:                 string;
    lastName:             string;
    currentBalance:       number;
    accumulatedRecharges: number;
    lastRechargeDate:     Date;
    valueRecharge:        number;
    totalRecharge:        number;
    totalToPay:           number;
    applyBonus:           boolean;
    bonusValue:           number;
}

export interface CalculateRecharge {
    typePayment: string;
    bank: string;
    name: string;
    lastName: string;
    valueRecharge: number;
}

export interface ListOptionsBanks {
  nameBank: string;
}

