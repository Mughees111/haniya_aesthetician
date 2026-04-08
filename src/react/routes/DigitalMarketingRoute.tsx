import DigitalMarketing from '../../islands/DigitalMarketing';
import PageShell from './PageShell';

export default function DigitalMarketingRoute({
  currentPath,
}: {
  currentPath: string;
}) {
  return (
    <PageShell currentPath={currentPath}>
      <DigitalMarketing />
    </PageShell>
  );
}
