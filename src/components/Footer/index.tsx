import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <>
      <h1 className="text-center font-bold pb-4" >Kilde: <a href='http://www.odin.dk/112puls/'>www.odin.dk/112puls</a></h1>
      {children}
      <p className='text-center text-slate-400 pb-4'>GitHub: <a href="https://github.com/fishylunar">fishylunar</a> - Mail: <a href="mailto:tobias@staun.tech">tobias@staun.tech </a></p>
    </>
  );
}
