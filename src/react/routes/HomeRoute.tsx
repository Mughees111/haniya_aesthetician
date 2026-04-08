import Home from '../../islands/Home';
import PageShell from './PageShell';

export default function HomeRoute({ currentPath }: { currentPath: string }) {
  return (
    <PageShell currentPath={currentPath}>
      <Home />
    </PageShell>
  );
}
