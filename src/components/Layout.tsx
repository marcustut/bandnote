import { children, Component, JSX } from 'solid-js';
import { twMerge } from 'tailwind-merge';

type LayoutProps = {
  children: JSX.Element;
  class?: string;
};

export const Layout: Component<LayoutProps> = (props) => {
  const c = children(() => props.children);
  return <div class={twMerge('max-w-7xl mx-auto py-3 px-3 lg:px-4', props.class)}>{c()}</div>;
};
