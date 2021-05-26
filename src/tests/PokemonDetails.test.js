import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import data from '../data';

describe('Testa se as informações detalhadas', () => {
  test('Deve conter um texto Details', () => {
    const { history } = renderWithRouter(<App />);
    const detailsText = screen.getByText('More details');
    fireEvent.click(detailsText);
    expect(detailsText).not.toBeInTheDocument();

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const summary = screen.getByText('Summary');
    expect(summary).toBeInTheDocument();

    const sumaryText = screen.getByText(data[0].summary);
    expect(sumaryText).toBeInTheDocument();

    const name = screen.getByText('Pikachu Details');
    expect(name).toBeInTheDocument();
    const location = screen.getAllByRole('img', {
      name: /Pikachu location/i,
    });

    const two = 2;
    expect(location).toHaveLength(two);
    expect(location[0]).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(location[1]).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(location[0]).toHaveAttribute('alt',
      'Pikachu location');
    expect(location[1]).toHaveAttribute('alt',
      'Pikachu location');

    const titleGame = screen.getByText(/Game Locations of Pikachu/i);
    expect(titleGame).toBeInTheDocument();

    const favoritePokemon = screen.getByRole('checkbox', {
      checked: false,
      name: /Pokémon favoritado?/i,
    });
    expect(favoritePokemon).toBeInTheDocument();
    fireEvent.click(favoritePokemon);
    expect(favoritePokemon).toBeChecked();
    fireEvent.click(favoritePokemon);
    expect(favoritePokemon).not.toBeChecked();
  });
});
