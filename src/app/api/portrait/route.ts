import { NextResponse } from 'next/server';

// Proxy the Trump mugshot image server-side to avoid CORS issues
// The mugshot is an official government document (Fulton County Sheriff, 2023) - public domain
export async function GET() {
    const imageUrl =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Donald_Trump_mug_shot.jpg/800px-Donald_Trump_mug_shot.jpg';

    const response = await fetch(imageUrl, { headers: { 'User-Agent': 'TrumpMosaicBot/1.0 (https://trumpmosaic.com; portrait-proxy)' } });

    if (!response.ok) {
          return NextResponse.json({ error: 'Failed to fetch image' }, { status: 502 });
        }

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(buffer, {
          headers: {
                  'Content-Type': contentType,
                  'Cache-Control': 'public, max-age=86400',
                },
        });
  }
