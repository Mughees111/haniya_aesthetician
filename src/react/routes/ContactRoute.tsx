import Contact from '../../islands/Contact';
import PageShell from './PageShell';

export default function ContactRoute({ currentPath }: { currentPath: string }) {
  return (
    <PageShell currentPath={currentPath}>
      <Contact />
    </PageShell>
  );
}
