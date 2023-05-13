import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Gadget from './domain/Gadget';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(2001, 'Avengers', 3000, 2012, 'USA', 'Avengers Assemblie!', 'adventures', 137));
cart.add(new Gadget(3002, 'Phone', 2500, 1));
cart.add(new Gadget(3002, 'Phone', 2500, 1));

console.log(cart.items);
console.log(cart.totalPrice());
console.log(cart.totalPriceWithDiscount(10));

// cart.delete(1001);

console.log(cart.items);

cart.decreaseAmount(3002);

console.log(cart.items);

cart.decreaseAmount(3002);

console.log(cart.items);
