import { IUser } from "./user.model";

export interface IUserGroup {
    groupId: number;
    groupName: string;
    groupDescription: string;
    users?: Array<IUser>;
}

