import { render } from 'solid-testing-library';
import { describe, expect, test } from 'vitest';

import Home from '@/pages/Home';

describe('<Home />', () => {
  test('it will prompt unimplemented on sign in', () => {
    const { getByText, unmount } = render(() => <Home />);
    expect(getByText('Sign in with Google')).toBeInTheDocument();
    unmount();
  });

  // test('it will add a new todo', async () => {
  //   const { getByPlaceholderText, getByText, unmount } = render(() => <Home />);
  //   const input = getByPlaceholderText('new todo here') as HTMLInputElement;
  //   const button = getByText('Add Todo');
  //   input.value = 'test new todo';
  //   fireEvent.click(button as HTMLInputElement);
  //   expect(input.value).toBe('');
  //   expect(getByText(/test new todo/)).toBeInTheDocument();
  //   unmount();
  // });

  // test('it will mark a todo as completed', async () => {
  //   const { getByPlaceholderText, findByRole, getByText, unmount } = render(() => <Home />);
  //   const input = getByPlaceholderText('new todo here') as HTMLInputElement;
  //   const button = getByText('Add Todo') as HTMLButtonElement;
  //   input.value = 'mark new todo as completed';
  //   fireEvent.click(button);
  //   const completed = (await findByRole('checkbox')) as HTMLInputElement;
  //   expect(completed?.checked).toBe(false);
  //   fireEvent.click(completed);
  //   expect(completed?.checked).toBe(true);
  //   const text = getByText('mark new todo as completed') as HTMLSpanElement;
  //   expect(text).toHaveStyle({ 'text-decoration': 'line-through' });
  //   unmount();
  // });
});
