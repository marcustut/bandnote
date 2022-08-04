import { onMount } from 'solid-js';
import { Route, Routes } from '@solidjs/router';

import { Header, Layout } from '@/components';
import Home from '@/pages/Home';
import Test from '@/pages/Test';

import '@/index.css';

export const App = () => {
  onMount(() => {
    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
      document.documentElement.classList.add('dark');
  });

  return (
    <>
      <Header />

      <Layout>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/test" component={Test} />
        </Routes>
      </Layout>
    </>
  );
};
