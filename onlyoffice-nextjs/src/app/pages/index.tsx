// import { useEffect, useState } from 'react';
// import { DocumentEditor } from '@onlyoffice/document-editor-react';

// type Config = {
//   document: { fileType: string; key: string; title: string; url: string };
//   editorConfig: { callbackUrl?: string; mode: string; user: { id: string; name: string } };
//   documentServerUrl: string;
// };

// export default function Home() {
//   const [config, setConfig] = useState<Config| null>(null);

//   useEffect(() => {
//     fetch('/api/docConfig')
//       .then((res) => res.json())
//       .then(setConfig)
//       .catch(console.error);
//   }, []);

//   if (!config) return <p>Loading editor…</p>;

//   return (
//     <div style={{ height: '100vh' }}>
//       <DocumentEditor
//         config={{
//           document: config.document,
//           editorConfig: config.editorConfig,
//           documentServerUrl: config.documentServerUrl,
//         }}
//       />
//     </div>
//   );
// }

// import React from 'react';
// import dynamic from 'next/dynamic';
// import { DocSpaceConfig } from '../pages/components/docSpaceManager';

// const DocSpaceManager = dynamic(
//   () => import('../pages/components/docSpaceManager'),
//   { ssr: false }
// );

// const HomePage: React.FC = () => {
//   const config: DocSpaceConfig = {
//     src: 'https://ibni.onlyoffice.com',
//     mode: 'manager',
//     width: '100%',
//     height: '800px',
//     showHeader: true,
//     showTitle: true,
//     showMenu: true,
//     showFilter: true,
//     disableActionButton: false,
//     infoPanelVisible: true,
//     init: true,
//     filter: {
//       count: 100,
//       page: 1,
//       sortorder: 'descending',
//       sortby: 'DateAndTime',
//       search: '',
//       withSubfolders: false,
//     },
//   };

//   return (
//     <div>
//       <h1>ONLYOFFICE DocSpace Manager (TSX)</h1>
//       <DocSpaceManager config={config} />
//     </div>
//   );
// };

// export default HomePage;

import dynamic from 'next/dynamic';

const DocSpaceFrame = dynamic(
  () => import('../pages/components/docSpaceManager'),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DocSpaceFrame />
    </div>
  );
}
