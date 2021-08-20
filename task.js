/* task1 */

let parseCount = (value) => {
    if (isNaN(Number.parseInt(value))) {
        const parseError = new Error("Невалидное значение");
        throw parseError;
    }
        return Number.parseInt(value);
}

let validateCount = (value) => {
    try {
        if (parseCount(value)) {
            return parseCount(value);
        }
    }
    catch (err) {
        return err;
    }
}

/* task2 */

class Triangle {
    constructor() {

    }
    getPerimeter() {

    }
    getArea() {

    }
}

let getTriangle = () => {

}