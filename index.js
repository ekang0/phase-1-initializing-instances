// Write your code here

class Breakfast {
  constructor(food, drink){
    this.food = food,
    this.drink = drink
  }
};

class Lunch {
  constructor(salad, soup, drink){
    this.salad = salad,
    this.soup = soup,
    this.drink = drink
  }
};

class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert){
    this.salad = salad,
    this.soup = soup,
    this.entree = entree,
    this.#dessert = dessert
  }
};

//salad, soup, entree, and dessert
//Initialize dessert as a private property by prefixing its name with the hash symbol (#).