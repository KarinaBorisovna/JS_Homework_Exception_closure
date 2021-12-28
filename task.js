function parseCount(value) {
    value = Number.parseInt(value);
    if (isNaN(value)){
        throw new Error ("Невалидное значение");
    }
    
    return value;
}

function validateCount(value) {
    try {
        return parseCount(value)
    } catch (error) {
        return error;
    }    
}


class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b < c) || (a + c < b) || (c + b < a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
    
        return perimeter;
    }
    
    getArea() {
        let p = 0.5 * (this.a + this.b + this.c);
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(area.toFixed(3));
    }

}


function getTriangle(a, b, c) {
    
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        return {getPerimeter: () => "Ошибка! Треугольник не существует", getArea: () => "Ошибка! Треугольник не существует", };
    }
}
