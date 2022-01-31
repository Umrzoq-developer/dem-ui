export interface IUser {
    id: number;
    fullname: string;
    login: string;
    password: string | number;
    roleId: number;
    regionId: number;
    parkId: number;
    remark: string;
    isActivated: string | boolean;
}
