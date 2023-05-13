import Book from '../domain/Book';
import Gadget from '../domain/Gadget';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Adding 1 product to card', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items).toEqual([new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225)]);
});

test('Testing totalPrice function', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(2001, 'Avengers', 3000, 2012, 'USA', 'Avengers Assemblie!', 'adventures', 137));
  cart.add(new Gadget(3002, 'Phone', 2500, 1));
  cart.add(new Gadget(3002, 'Phone', 2500, 1));
  expect(cart.totalPrice()).toBe(10900);
});

test('Testing totalPriceWithDiscount function', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(2001, 'Avengers', 3000, 2012, 'USA', 'Avengers Assemblie!', 'adventures', 137));
  cart.add(new Gadget(3002, 'Phone', 2500, 1));
  cart.add(new Gadget(3002, 'Phone', 2500, 1));
  expect(cart.totalPriceWithDiscount(10)).toBeCloseTo(9810);
});

test('Testing delete function', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.delete(1008)
  expect(cart.items).toEqual([new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225)]);
});

test('Testing decreaseAmount function', () => {
  const cart = new Cart();
  cart.add(new Gadget(3002, 'Phone', 2500, 1));
  cart.add(new Gadget(3002, 'Phone', 2500, 1));
  cart.decreaseAmount(3002);
  expect(cart.items).toEqual([new Gadget(3002, 'Phone', 2500, 1)]);
});

test('Testing decreaseAmount function with 0 count', () => {
  const cart = new Cart();
  cart.add(new Gadget(3002, 'Phone', 2500, 1));
  cart.decreaseAmount(3002);
  expect(cart.items.length).toBe(0);
});

test('Testing decreaseAmount function without count', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.decreaseAmount(1001);
  expect(cart.items).toEqual([new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225)]);
});
