import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'RR City', description: 'Reality Referee City — concept prototype' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
