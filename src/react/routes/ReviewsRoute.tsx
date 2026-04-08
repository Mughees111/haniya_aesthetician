import Reviews from '../../islands/Reviews';
import PageShell from './PageShell';

export default function ReviewsRoute({ currentPath }: { currentPath: string }) {
  return (
    <PageShell currentPath={currentPath}>
      <Reviews />
    </PageShell>
  );
}
