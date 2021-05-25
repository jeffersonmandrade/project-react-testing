import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';
// import renderWithRouter from '../renderWithRouter';

describe('test component <Abut />', () => {
  test('test h2', () => {
    render(<About />);
    const aboutText = screen.getByRole('heading', {
      level: 2,
      name: /About Pokédex/i,
    });
    expect(aboutText).toBeInTheDocument();
  });
  test('image exist', () => {
    render(<About />);
    const aboutImage = screen.getByRole('img');
    expect(aboutImage).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
