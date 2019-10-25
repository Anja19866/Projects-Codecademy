const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    set appetizers(appetizerIn){
        this._courses.appetizers = appetizers;
    },
    get mains(){
        return this._courses.mains;
    },
    set mains(mainIn){
        this._courses.mains = mains; 
    },
    get desserts(){
        return this._courses.desserts;
    },
    set desserts(dessertIn){
        this._courses.desserts = desserts;
    },
     get courses(){
      return {
        appetizers : this.appetizers,
        mains : this.mains,
      desserts : this.desserts,      
    }; 
    },  

  addDishToCourse(courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice,
  };
  return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal : function() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts')
  const totalPrice = appetizer.price + main.prize + dessert.price;
  
  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
}
};

menu.addDishToCourse('appetizers', 'salad', 4.25);
menu.addDishToCourse('appetizers', 'wings', 4.50);
menu.addDishToCourse('appetizers', 'fries', 3.00);

menu.addDishToCourse('mains', 'steak', 10.25);
menu.addDishToCourse('mains', 'salmon', 7.75);
menu.addDishToCourse('mains', 'tofu', 11.20);

menu.addDishToCourse('desserts', 'ice cream', 3.00);
menu.addDishToCourse('desserts', 'coffee', 3.00);
menu.addDishToCourse('desserts', 'cake', 3.25);

const meal = menu.generateRandomMeal();
console.log(meal);