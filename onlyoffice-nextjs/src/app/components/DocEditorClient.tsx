'use client';

import dynamic from 'next/dynamic';

const DocEditor = dynamic(
  () => import('./DocEditor'),
  { ssr: false }
);

interface DocEditorClientProps {
  documentUrl?: string;
  documentTitle?: string;
  documentKey?: string;
  fileType?: string;
}

export default function DocEditorClient({
  documentUrl,
  documentTitle,
  documentKey,
  fileType
}: Readonly<DocEditorClientProps>) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DocEditor
        documentUrl={documentUrl}
        documentTitle={documentTitle}
        documentKey={documentKey}
        fileType={fileType}
      />
    </div>
  );
} 