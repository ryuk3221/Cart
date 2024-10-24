class Cart {

  constructor() {
    this.items = [];

    //если в storage ничего нет (первый запуск)
    if (!localStorage.getItem('cart')) {
      //инициализирую обьект cart в storage
      localStorage.setItem('cart', JSON.stringify(this.items));

      return;
    }

    //если же в storage уже есть элементы, записываю их в контейнер items
    this.items = JSON.parse(localStorage.getItem('cart'));
  }

  getItems() {
    return this.items;
  }

  getItem(searchIndex) {
    return this.items.filter(({ id }) => id == searchIndex);
  }

  addItem(itemObj) {
    //добавляю новый элемент
    this.items.push(itemObj);
    //записываю новый массив в storage
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  //сделан
  removeItem(searchIndex) {
    //удаляю элемент из контейнера
    this.items = this.items.filter(({ id }) => searchIndex !== id);
    //обновляю storage
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  //получение кол-ва элементов
  getLength() {
    return this.items.length;
  }

  //количество вместе с повторяющимися 
  getFullLength() {
    return this.items.reduce((acc, { count }) => acc + count, 0);
  }

  clear() {
    this.items = [];
    //обновляю storage
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}

const cart = new Cart();

console.log(cart.items);
