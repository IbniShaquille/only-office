import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('ONLYOFFICE callback:', body);
    
    // Handle different callback types
    switch (body.status) {
      case 0: // Document is being edited
        console.log('Document is being edited');
        break;
      case 1: // Document is ready for saving
        console.log('Document is ready for saving');
        break;
      case 2: // Document saving error has occurred
        console.error('Document saving error:', body.error);
        break;
      case 3: // Document is closed with no changes
        console.log('Document is closed with no changes');
        break;
      case 4: // Document is being edited, but the current document state is saved by timeout
        console.log('Document state saved by timeout');
        break;
      case 6: // Document is being edited, but the current document state is saved by forced request
        console.log('Document state saved by forced request');
        break;
      case 7: // Document is being edited, but the current document state is saved by forced request
        console.log('Document state saved by forced request');
        break;
    }

    return NextResponse.json({ error: 0 });
  } catch (error) {
    console.error('Error handling callback:', error);
    return NextResponse.json({ error: 1 });
  }
} 