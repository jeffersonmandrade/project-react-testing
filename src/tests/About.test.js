import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from '../renderWithRouter';

describe('test component <Abut />', () => {
  test('test h2', () => {
    const { history } = renderWithRouter(<About />);
    const aboutText = screen.getByRole('heading', {
      level: 2,
      name: /About Pokédex/i,
    });
    expect(aboutText).toBeInTheDocument();
  });
});
