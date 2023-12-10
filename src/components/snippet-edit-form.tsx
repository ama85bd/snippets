'use client';
import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { editSnippet } from '@/actions';

interface EditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: EditFormProps) {
  const [code, setCode] = useState(snippet.code);
  console.log(code);
  function handleEditorChange(value: string = '') {
    setCode(value);
  }

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type='submit' className='p-2 border rounded'>
          Save
        </button>
      </form>
    </div>
  );
}
