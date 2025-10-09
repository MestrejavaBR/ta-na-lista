import { TipoUsuario } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeCategoria() {
  return {
    nome: faker.lorem.words(5),
  };
}
export function fakeCategoriaComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    nome: faker.lorem.words(5),
  };
}
export function fakeItemListaComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    listaId: faker.number.int(),
    produtoId: faker.number.int(),
    quantidade: 1,
    comprado: false,
  };
}
export function fakeListaCompra() {
  return {
    nome: faker.lorem.words(5),
  };
}
export function fakeListaCompraComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    nome: faker.lorem.words(5),
    usuarioId: faker.number.int(),
    criadaEm: new Date(),
  };
}
export function fakeProduto() {
  return {
    nome: faker.lorem.words(5),
    descricao: undefined,
    preco: faker.number.float(),
  };
}
export function fakeProdutoComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    nome: faker.lorem.words(5),
    descricao: undefined,
    preco: faker.number.float(),
    categoriaId: faker.number.int(),
    destaque: false,
    promocao: false,
    novo: false,
    teste: false,
  };
}
export function fakeUsuario() {
  return {
    email: faker.internet.email(),
    nome: undefined,
  };
}
export function fakeUsuarioComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    email: faker.internet.email(),
    nome: undefined,
    tipo: TipoUsuario.USER,
  };
}
