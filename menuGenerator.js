const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {

    },
    get mains() {

    },
    get desserts() {

    },
    set appetizers(appetizerIn) {

    },
    set mains(mainIn) {

    },
    set desserts(dessertIn) {

    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {name: dishName, price: dishPrice};
        this._courses[courseName].push(dish);

    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let random = Math.floor(Math.random() * dishes.length);
        return dishes[random];
    },
    generateRandomMeal: function() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. Total price is ${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'Chicken Soup', 10);
menu.addDishToCourse('appetizers', 'Mashroom Soup', 7);
menu.addDishToCourse('appetizers', 'Salads', 10);

menu.addDishToCourse('mains', 'Plov', 20);
menu.addDishToCourse('mains', 'Pizza', 12);
menu.addDishToCourse('mains', 'Bami Goreng', 9);

menu.addDishToCourse('desserts', 'Tiramisu', 8);
menu.addDishToCourse('desserts', 'Cheesecake', 7);
menu.addDishToCourse('desserts', 'Medowik', 6);

let meal = menu.generateRandomMeal();
console.log(meal);