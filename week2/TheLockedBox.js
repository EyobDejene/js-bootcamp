// #########   EXERCISE The Sum of a Range ######### //

//create a object
const box = {
    locked: false,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

//
function withBoxUnlocked(body) {
    box.unlock();
    // try to unlock the box
    try {
        // return the body value
        return body();
    } finally {
        // lock the box always
        box.lock();
    }
}

withBoxUnlocked(function() {
    // push the string into the box array
    box.content.push("gold piece");
});

// try to run the function and if there is a error catch it and log the error
try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

// call the box
console.log(box.locked);