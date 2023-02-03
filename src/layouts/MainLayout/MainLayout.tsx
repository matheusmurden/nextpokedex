import { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children?: ReactNode[];
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main>
      <aside></aside>
      <section>{children}</section>
    </main>
  );
};
