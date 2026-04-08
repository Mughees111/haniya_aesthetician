import ServiceDetail from '../../islands/ServiceDetail';
import PageShell from './PageShell';

export default function ServiceDetailRoute({
  currentPath,
  slug,
}: {
  currentPath: string;
  slug: string;
}) {
  return (
    <PageShell currentPath={currentPath}>
      <ServiceDetail slug={slug} />
    </PageShell>
  );
}
