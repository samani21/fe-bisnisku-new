'use client';

import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // untuk App Router (Next.js 13+)

interface HomeLayoutProps {
  children?: ReactNode;
  mode?: 'user-profile';
  navbarOn?: boolean;
}

const Home: React.FC<HomeLayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
    }
  }, []);

  return <div>{children}</div>;
};

export default Home;
