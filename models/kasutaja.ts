export class Kasutaja {
    constructor(
        private _id: number,
        private _UserName: string,
        public _password: string,
        public _firstName: string,
        public _lastName: string,
    ) {}

    get id() {
        return this._id;
    }

    get UserName() {
        return this._UserName;
    }

    set name(newName: string) {
        this._UserName = newName;
    }
    constructor(
        public id: number,
        public UserName: string,
        public password: string,
        public firstName: string,
        public lastName: string,
    ) {}
}
