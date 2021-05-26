import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('test <FavoritePokemons.js />', () => {
  test('test mensage Not Found', () => {
    render(<FavoritePokemons />);
    const notFound = screen.getByText('No favorite pokemon found');
    expect(notFound).toBeInTheDocument();
  });
});

describe('testando se existe pokemons em favoritos', () => {
  test('Existe pokemons em favoritos', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', {
      name: /More details/i,
    });
    expect(linkMoreDetails).toBeInTheDocument();
    fireEvent.click(linkMoreDetails);
    const favoritePokemon = screen.getByRole('checkbox', {

      name: /Pokémon favoritado?/i,
    });
    fireEvent.click(favoritePokemon);
    const linkFavorite = screen.getByRole('link', {
      name: /Favorite Pokémon/i,
    });
    fireEvent.click(linkFavorite);
    const starImage = screen.getByRole('img', {
      name: /marked as favorite/i });
    expect(starImage).toBeInTheDocument();

    test('cliclar no Not found', () => {
      renderWithRouter(<App />);

      const linkFavorit = screen.getByRole('link', {
        name: /Favorite Pokémon/i,
      });
      fireEvent.click(linkFavorit);
      const textNotFound = screen.getByText('No favorite pokemon found');
      expect(textNotFound).toBeInTheDocument();
    });
  });
});
