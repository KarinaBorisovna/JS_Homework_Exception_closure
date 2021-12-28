function parseCount(value) {
    value = Number.parseInt(value);
    if (isNaN(value)){
        throw new Error ("Невалидное значение");
    }
    
    return value;
}

function validateCount(value) {
    try {
        let result = parseCount(value);
        return result;
    } catch (error) {
        return error;
    }    
}


class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }
}


Triangle.prototype.getPerimeter = function() {
    let perimeter = this.a + this.b + this.c;

    return perimeter;
}

Triangle.prototype.getArea= function() {
    let p = 0.5 * (this.a + this.b + this.c);
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(area.toFixed(3));
}

function getTriangle(a, b, c) {
    
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        return {getPerimeter: () => "Ошибка! Треугольник не существует", getArea: () => "Ошибка! Треугольник не существует", };
    }
}
