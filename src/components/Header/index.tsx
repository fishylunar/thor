import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <img alt='Logo' title='Logo' src='/thor/icon-192.png' height={64} width={64} className='mx-auto pb-4 pt-8'></img>
      <h1 className="font-bold text-center text-4xl pt-4 pb-1">Thor</h1>
      <h4 className="font-bold text-center text-muted pb-4">First Responder Messages</h4>
      {children}
    </>
  );
}
