import About from '../../islands/About';
import PageShell from './PageShell';

export default function AboutRoute({ currentPath }: { currentPath: string }) {
  return (
    <PageShell currentPath={currentPath}>
      <About />
    </PageShell>
  );
}
