import MyWork from '../../islands/MyWork';
import PageShell from './PageShell';

export default function MyWorkRoute({ currentPath }: { currentPath: string }) {
  return (
    <PageShell currentPath={currentPath}>
      <MyWork />
    </PageShell>
  );
}
