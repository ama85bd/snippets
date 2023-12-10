import SnippetEditForm from '@/components/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface EditProps {
  params: { id: string };
}

export default async function SnippetEditPage(props: EditProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
