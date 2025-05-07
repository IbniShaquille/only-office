'use client';

import dynamic from 'next/dynamic';

const DocSpaceFrame = dynamic(
  () => import('../pages/components/docSpaceManager'),
  { ssr: false }
);

export default function DocSpaceClient() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DocSpaceFrame />
    </div>
  );
} 