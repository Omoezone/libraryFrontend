import { Username } from "./username";

export interface User{
    user_id: number;
    name_id: number;
    users_data_id: number;
    email: string;
    pass: string;
    snap_timestamp: Date;
    UserName: Username;
}