import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Inter:wght@400;500;600&family=Lora:ital,wght@0,400;0,700;1,400&display=swap',
      },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Norsk Luftvern RSS',
        href: '/api/rss.xml',
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1c1c1c] font-body">
      <Header currentPath={location.pathname} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
