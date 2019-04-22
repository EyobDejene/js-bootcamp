// #########   EXERCISE A vector Type ######### //

//create a class
class Vec {
    // create a constructor with x and y
    constructor(_x,_y){
        this.x = _x;
        this.y = _y;
    }

    // create a function function plus and return the result of the sum
    plus(vec){
        return new Vec(this.x + this.y, vec.x + vec.y);
    }

    // create a function function minus and return the result
    minus(vec){
        return new Vec(this.x - this.y, vec.x - vec.y);
    }

    // get te length that computes the length of the vector with the distance of (x,y)
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

// call the object with the functions
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);