'use client';

import { useEffect, useRef } from 'react';
import SDK from '@onlyoffice/docspace-sdk-js';

interface DocEditorConfig {
  src: string;
  mode: string;
  width: string;
  height: string;
  frameId: string;
  init: boolean;
  document: {
    fileType: string;
    key: string;
    title: string;
    url: string;
  };
  editorConfig: {
    mode: string;
    callbackUrl?: string;
    user: {
      id: string;
      name: string;
    };
    lang: string;
    customization: {
      chat: boolean;
      comments: boolean;
      feedback: boolean;
      forcesave: boolean;
    };
  };
}

const defaultConfig: DocEditorConfig = {
  src: 'https://ibni.onlyoffice.com',
  mode: 'editor',
  width: '100%',
  height: '100%',
  frameId: 'ds-frame',
  init: false,
  document: {
    fileType: 'docx',
    key: 'sample-doc',
    title: 'Sample Document',
    url: 'https://example.com/sample.docx'
  },
  editorConfig: {
    mode: 'edit',
    user: {
      id: 'user-1',
      name: 'John Doe'
    },
    lang: 'en-US',
    customization: {
      chat: false,
      comments: true,
      feedback: false,
      forcesave: true
    }
  }
};

interface DocEditorProps {
  documentUrl?: string;
  documentTitle?: string;
  documentKey?: string;
  fileType?: string;
}

export default function DocEditor({ 
  documentUrl,
  documentTitle,
  documentKey,
  fileType = 'docx'
}: DocEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const config = {
      ...defaultConfig,
      document: {
        ...defaultConfig.document,
        url: documentUrl || defaultConfig.document.url,
        title: documentTitle || defaultConfig.document.title,
        key: documentKey || defaultConfig.document.key,
        fileType: fileType
      },
      editorConfig: {
        ...defaultConfig.editorConfig,
        mode: 'edit',
        callbackUrl: `${window.location.origin}/api/callback`,
        lang: 'en-US',
        customization: {
          chat: false,
          comments: true,
          feedback: false,
          forcesave: true
        }
      }
    };

    const sdk = new SDK();
    sdk.init({ ...config, frameId: containerRef.current.id });
  }, [documentUrl, documentTitle, documentKey, fileType]);

  return (
    <div
      id="ds-frame"
      ref={containerRef}
      style={{ width: defaultConfig.width, height: defaultConfig.height }}
    />
  );
} 