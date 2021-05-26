import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Test requisito 5', () => {
  test('Contém o h2 em <pokedex />', () => {
    renderWithRouter(<App />);
    const h2Test = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(h2Test).toBeInTheDocument();
  });
});

describe('testar os botões Próximo pokémon', () => {
  test('Teste  button', () => {
    renderWithRouter(<App />);
    const buttonTest = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    expect(buttonTest).toBeInTheDocument();
  });
  test('1 Pokémon por vez', () => {
    renderWithRouter(<App />);
    const imagePokemon = screen.getAllByRole('img');
    expect(imagePokemon).toHaveLength(1);
  });
  test('vair testar a quantidade de botões de  filtro', () => {
    renderWithRouter(<App />);
    const filter = screen.getAllByTestId('pokemon-type-button');
    const sete = 7;
    expect(filter).toHaveLength(sete);
  });
  test('test button all', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', {
      name: /All/i,
    });
    expect(buttonAll).toBeInTheDocument();
    fireEvent.click(buttonAll);
  });
});

describe(`Teste se é criado, dinamicamente,
um botão de filtro para cada tipo de Pokémon.`, () => {
  test('Se o botão  de filtragem devem ser dinâmicos', () => {
    renderWithRouter(<App />);
    const buttonFire = screen.getByRole('button', {
      name: /fire/i,
    });
    fireEvent.click(buttonFire);
    const firePokemon = screen.getByText(/Charmander/i);
    expect(firePokemon).toBeInTheDocument();
  });
});
