import BlogDetail from '../../islands/BlogDetail';
import PageShell from './PageShell';

export default function BlogDetailRoute({
  currentPath,
  slug,
}: {
  currentPath: string;
  slug: string;
}) {
  return (
    <PageShell currentPath={currentPath}>
      <BlogDetail slug={slug} />
    </PageShell>
  );
}
