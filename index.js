class Cart {

  constructor() {
    this.items = [];
    
    //если в storage ничего нет (первый запуск)
    if (!localStorage.getItem('cart')) {
      //инициализирую обьект cart в storage
      localStorage.setItem('cart', JSON.stringify(this.items));
    } else {
      //если же в storage уже есть элементы, записываю их в контейнер items
      this.items = JSON.parse(localStorage.getItem('cart'));
    }
  }

  getItems() {
    return this.items;
  }

  getItem(id) {
    const index = this.items.findIndex(item => id == item.id);
    return this.items[index];
  }

  addItem(itemObj) {
    //получаю все что было в localstorage
    this.items = JSON.parse(localStorage.getItem('cart'));
    //добавляю новый элемент
    this.items.push(itemObj);
    //записываю новый массив в storage
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  //сделан
  removeItem(id) {
    //удаляю элемент из контейнера
    this.items = this.items.filter(el => el.id !== id);
    //обновляю storage
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  //получение кол-ва элементов
  getLength() {
    return this.items.length;
  }

  //количество вместе с повторяющимися 
  getFullLength() {
    let result = 0;
    this.items.forEach(el => {
      result += el.count;
    });
    return result;
  }

  clear() {
    this.items = [];
    //обновляю storage
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}

const cart = new Cart();

console.log(cart.items);