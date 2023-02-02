import { User } from "./user";

export class Message {
    id?:string;
    content?:string;
    // file?:string;
    sender?:User;
    receiver?:User;
    dateEnv?:Date;
}
