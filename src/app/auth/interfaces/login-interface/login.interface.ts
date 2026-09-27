export interface LoginResponseBackend {
    success:  boolean;
    message:  string;
    userId:   number;
}

export interface Login {
    identification: string;
    password: string;
}