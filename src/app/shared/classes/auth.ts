export interface LoginForm{
    email: string,
    password: string;
}
export interface RegisterForm{
    fullName: string;
    age: number | null;
    phone?: string;
    position: string;
    email: string,
    password: string;
    confirm_password: string;
}

/*export interface ProfileUser {
    uid: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
  }*/



