"use strict";
class Movies {
    constructor(readonlyid, name, _price) {
        this.readonlyid = readonlyid;
        this.name = name;
        this._price = _price;
    }
}
let movie1 = new Movies(1, 'Spider-Man', 20);
