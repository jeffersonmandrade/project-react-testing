import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Se é renderizado um card com informações  de determinado pókemon', () => {
  test('testa o nome,tipo,peso e imagem ', () => {
    renderWithRouter(<App />);
    const buttonNormal = screen.getByRole('button', {
      name: /Normal/i,
    });
    fireEvent.click(buttonNormal);
    // const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonName = screen.getByText('Snorlax');
    const pokemonType = screen.getByTestId('pokemon-type');
    // const pokemonType = screen.getByText(/Normal/i);
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const pokemonImage = screen.getByRole('img', {
      name: /Snorlax sprite/i });
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toHaveTextContent('Normal');
    expect(pokemonWeight).toHaveTextContent('Average weight: 460.0 kg');
    expect(pokemonImage).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png');
  });
});
