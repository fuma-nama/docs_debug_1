import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Frappe',
  },
  links: [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Framework',
      url: '/framework',
    },
    {
      text: 'ERPNext',
      url: '/erpnext',
    },
  ],
};
