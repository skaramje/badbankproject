import React from 'react';
import * as ReactDOM from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import { Link } from 'react-router-dom';

test('BadBank Landing Module', () => {
  render(<App />);
  const linkElement = screen.getByText(/badbank landing module/i);
  expect(linkElement).toBeInTheDocument();
});

test('user-events allows users to go to Withdraw page...', () => {
  const { getByText} = render(<App />);
  const button = screen.getByText('Withdraw');
  userEvent.click(button);
  
  getByText('Withdraw');
});

test('go to AllData page...', () => {
  const {getByText} = render(<App/>);

  getByText('AllData');
  const button = getByText('AllData');
  fireEvent.click(button);

  getByText('BadBank')
})