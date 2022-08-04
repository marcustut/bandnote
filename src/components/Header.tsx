import { Component } from 'solid-js';

import { SignInButton, ThemeToggler } from '@/components';

type HeaderProps = {
  banner?: boolean;
};

export const Header: Component<HeaderProps> = (props) => {
  return (
    <header class="sticky top-0 z-40 flex-none mx-auto w-full bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
      {props.banner && (
        <div
          id="banner"
          tabindex="-1"
          class="flex z-50 justify-center py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 dark:border-gray-600 lg:py-4 dark:bg-gray-700"
        >
          <div class="items-center md:flex">
            <p class="text-sm font-medium text-gray-900 md:my-0 dark:text-white">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline">
                New
              </span>
              We have launched Flowbite Blocks featuring over 140+ website sections!
              <a
                href="/blocks/"
                class="inline-flex items-center ml-2 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline"
              >
                Check it out
                <svg
                  class="ml-1 w-4 h-4 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      )}

      <div class="flex justify-between items-center py-3 px-3 mx-auto w-full max-w-7xl lg:px-4">
        <div class="flex items-center">
          <div class="flex justify-between items-center">
            <a href="/" class="flex">
              {/* <img src="/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-8 h-8 mr-3 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3v2m0-4V3.5L18.5 9H13Z"
                />
              </svg>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Bandnote
              </span>
            </a>
          </div>
        </div>

        <div class="flex items-center">
          <ul
            id="flowbiteMenu"
            class="hidden flex-col pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex"
          >
            <li class="mb-3 lg:px-2 xl:px-3 lg:mb-0">
              <a
                href="/docs/getting-started/quickstart/"
                class="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              >
                Quickstart
              </a>
            </li>
            <li class="mb-3 lg:px-2 xl:px-3 lg:mb-0">
              <a
                href="/download/"
                class="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              >
                Download
              </a>
            </li>
          </ul>
          <a
            href="https://github.com/marcustut/bandnote"
            data-tooltip-target="tooltip-github"
            class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              data-prefix="fab"
              data-icon="github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
            <span class="sr-only">View on Github</span>
          </a>
          <div
            id="tooltip-github"
            role="tooltip"
            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
            style={{
              position: 'absolute',
              inset: 'auto auto 0px 0px',
              margin: '0px',
              transform: 'translate3d(845px, -62px, 0px)',
            }}
            data-popper-placement="top"
          >
            View on Github
            <div
              class="tooltip-arrow"
              data-popper-arrow=""
              style={{
                position: 'absolute',
                left: '0px',
                transform: 'translate3d(59.5px, 0px, 0px)',
              }}
            />
          </div>

          <a
            href="https://t.me/marcustut"
            data-tooltip-target="tooltip-telegram"
            class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              data-prefix="fab"
              data-icon="telegram"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"
              />
            </svg>
            <span class="sr-only">Contact me</span>
          </a>
          <div
            id="tooltip-telegram"
            role="tooltip"
            class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip opacity-0 invisible"
            style={{
              position: 'absolute',
              inset: 'auto auto 0px 0px',
              margin: '0px',
              transform: 'translate3d(851.5px, -64px, 0px)',
            }}
            data-popper-placement="top"
          >
            Contact me
            <div
              class="tooltip-arrow"
              data-popper-arrow=""
              style={{
                position: 'absolute',
                left: '0px',
                transform: 'translate3d(99px, 0px, 0px)',
              }}
            />
          </div>
          <ThemeToggler />

          {/* TODO: Auth Sign In */}
          <SignInButton class="ml-3" />
        </div>
      </div>
    </header>
  );
};
