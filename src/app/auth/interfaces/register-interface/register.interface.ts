export interface RegisterResponseBackend {
    success:        boolean;
    message:        string;
    identification: string;
}

export interface Register {
    name: string;
    lastName: string;
    identification: string;
    password: string;
    confirmPassword: string;
}