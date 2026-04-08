import AestheticServices from '../../islands/AestheticServices';
import PageShell from './PageShell';

export default function AestheticServicesRoute({
  currentPath,
}: {
  currentPath: string;
}) {
  return (
    <PageShell currentPath={currentPath}>
      <AestheticServices />
    </PageShell>
  );
}
