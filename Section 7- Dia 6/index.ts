class Movies {
    constructor(
        public readonlyid: number,
        public name: string,
        private _price: number) {
    }
}

let movie1 = new Movies(1, 'Spider-Man', 20);
