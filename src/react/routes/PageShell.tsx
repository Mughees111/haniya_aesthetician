import type { ReactNode } from 'react';
import Layout from '../../components/Layout';

export default function PageShell({
  currentPath,
  children,
}: {
  currentPath: string;
  children: ReactNode;
}) {
  return <Layout currentPath={currentPath}>{children}</Layout>;
}
