class Movies {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

let movie1 = new Movies(1, 'Spider-Man');
// movie1.id = 2;