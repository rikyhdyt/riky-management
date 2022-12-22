export interface IUsers {
    id:number,
    firstName:string,
    lastName:string,
    gender:string,
    email:string,
    phone:string,
    birthDate:string
}

export interface IUsersWrapper{
    users:Array<IUsers>;
    total:number;
    skip:number;
    limit:number;
}



