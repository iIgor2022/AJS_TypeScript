import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const index = this._items.findIndex((element) => {
      return element.id === item.id;
    })
    if (index !== -1 && Object.keys(item).includes('count')) {
      this._items[index].count!++; 
    } else {
      this._items.push(item);
    };
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  totalPrice(): number {
    return this._items.reduce((accumulator, currentItem) => {
      if (Object.keys(currentItem).includes('count')) {
        return accumulator + (currentItem.price * currentItem.count!);
      } else {
        return accumulator + currentItem.price;
      };
    }, 0);
  }

  totalPriceWithDiscount(discount: number): number {
    return this.totalPrice() * (1 - discount / 100);
  }

  delete(id: number): void {
    this._items.splice(this._items.findIndex((item) => {
      return item.id === id
    }), 1);
  }

  decreaseAmount(id: number): void {
    const index = this._items.findIndex((element) => {
      return element.id === id;
    });
    if (index !== -1 && Object.keys(this._items[index]).includes('count')) {
      this._items[index].count!--; 
    };
    if (this.items[index].count === 0) {
      this.delete(id);
    }
  }
}