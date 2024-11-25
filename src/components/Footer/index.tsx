import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <>
      <h1 className="text-center font-bold pb-4" >Kilde: <a href='http://www.odin.dk/112puls/'>www.odin.dk/112puls</a></h1>
      {children}
    </>
  );
}
