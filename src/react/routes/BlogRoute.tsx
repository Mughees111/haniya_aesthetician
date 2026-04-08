import Blog from '../../islands/Blog';
import PageShell from './PageShell';

export default function BlogRoute({ currentPath }: { currentPath: string }) {
  return (
    <PageShell currentPath={currentPath}>
      <Blog />
    </PageShell>
  );
}
