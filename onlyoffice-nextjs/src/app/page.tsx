'use client';

import { useState } from 'react';
import DocSpaceClient from './components/DocSpaceClient';
import DocEditorClient from './components/DocEditorClient';

interface Document {
  url: string;
  title: string;
  key: string;
  fileType: string;
}

const sampleDocuments: Document[] = [
  {
    url: '/SAP.docx',
    title: 'SAP Document (local)',
    key: 'doc-1',
    fileType: 'docx'
  },
  {
    url: 'https://docs.google.com/document/d/1URNJO_onQsPUfMNTF-4uRqe-Dsv837f_x-kyyF2kgRU/edit?tab=t.0',
    title: 'from link',
    key: 'doc-2',
    fileType: 'xlsx'
  }
];

export default function Home() {
  const [activeView, setActiveView] = useState<'manager' | 'editor'>('manager');
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setActiveView('manager')}
            className={`px-4 py-2 rounded ${
              activeView === 'manager' ? 'bg-blue-600' : 'bg-gray-600'
            }`}
          >
            DocSpace Manager
          </button>
          <button
            onClick={() => setActiveView('editor')}
            className={`px-4 py-2 rounded ${
              activeView === 'editor' ? 'bg-blue-600' : 'bg-gray-600'
            }`}
          >
            Document Editor
          </button>
          {activeView === 'editor' && (
            <select
              className="ml-4 px-4 py-2 rounded bg-gray-700"
              onChange={(e) => {
                const doc = sampleDocuments.find(d => d.key === e.target.value);
                setSelectedDocument(doc || null);
              }}
              value={selectedDocument?.key || ''}
            >
              <option value="">Select a document</option>
              {sampleDocuments.map((doc) => (
                <option key={doc.key} value={doc.key}>
                  {doc.title}
                </option>
              ))}
            </select>
          )}
        </div>
      </nav>
      <div className="flex-1">
        {activeView === 'manager' ? (
          <DocSpaceClient />
        ) : (
          <DocEditorClient
            documentUrl={selectedDocument?.url}
            documentTitle={selectedDocument?.title}
            documentKey={selectedDocument?.key}
            fileType={selectedDocument?.fileType}
          />
        )}
      </div>
    </div>
  );
}
