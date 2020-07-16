export class User {


    public constructor(
        public username: string,
        public email: string,
        public phone: number,
        public gender: string,
        public topic: string,
        public subscribe: boolean
    ) { }
}
