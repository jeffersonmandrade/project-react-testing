import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
// import renderWithRouter from '../renderWithRouter';

describe('Test Requisito 4', () => {
  test('test h2 request', () => {
    render(<NotFound />);
    const h2Test = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i,
    });
    const h2Emoticon = screen.getByRole('img', {
      name: /Crying emoji/,
    });
    expect(h2Test).toBeInTheDocument();
    expect(h2Emoticon).toBeInTheDocument();
  });
  test('testa image', () => {
    render(<NotFound />);
    const imageTest = screen.getByRole('img', {
      name: 'Pikachu crying because the page requested was not found',
    });
    expect(imageTest).toHaveAttribute('src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
