import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import ClientComponent from '@/components/map/ClientComponent';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <ClientComponent/>
    </main>
  );
}