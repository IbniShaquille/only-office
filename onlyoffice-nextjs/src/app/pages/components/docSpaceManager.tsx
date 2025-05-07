'use client';
import { useEffect, useRef } from 'react';
import SDK from '@onlyoffice/docspace-sdk-js';

interface DocSpaceConfig {
  src: string;
  mode: string;
  width: string;
  height: string;
  frameId: string;
  showHeader: boolean;
  showTitle: boolean;
  showMenu: boolean;
  showFilter: boolean;
  disableActionButton: boolean;
  infoPanelVisible: boolean;
  init: boolean;
  filter: {
    count: string;
    page: string;
    sortorder: string;
    sortby: string;
    search: string;
    withSubfolders: boolean;
  };
}

const config: DocSpaceConfig = {
  src: 'https://ibni.onlyoffice.com',
  mode: 'manager',
  width: '100%',
  height: '100%',
  frameId: 'ds-frame',
  showHeader: true,
  showTitle: true,
  showMenu: true,
  showFilter: true,
  disableActionButton: false,
  infoPanelVisible: true,
  init: true,
  filter: {
    count: '100',
    page: '1',
    sortorder: 'descending',
    sortby: 'DateAndTime',
    search: '',
    withSubfolders: false,
  },
};

export default function DocSpaceFrame() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sdk = new SDK();
    sdk.init({ ...config, frameId: containerRef.current.id });
  }, []);

  return (
    <div
      id="ds-frame"
      ref={containerRef}
      style={{ width: config.width, height: config.height }}
    />
  );
}
