import { NextResponse } from 'next/server';

const IMAGE_SOURCES = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Donald_Trump_mug_shot.jpg/800px-Donald_Trump_mug_shot.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Donald_Trump_mug_shot.jpg?width=800',
    ];

export async function GET() {
      for (const imageUrl of IMAGE_SOURCES) {
              try {
                        const response = await fetch(imageUrl, {
                                    headers: {
                                                  'User-Agent': 'TrumpMosaicApp/1.0 (https://trumpmosaic.com; sbonholo@gmail.com)',
                                                  'Accept': 'image/jpeg,image/*',
                                    },
                        });
                        if (response.ok) {
                                    const buffer = await response.arrayBuffer();
                                    const contentType = response.headers.get('content-type') || 'image/jpeg';
                                    return new NextResponse(buffer, {
                                                  headers: {
                                                                  'Content-Type': contentType,
                                                                  'Cache-Control': 'public, max-age=86400',
                                                                  'Access-Control-Allow-Origin': '*',
                                                  },
                                    });
                        }
              } catch {
                        continue;
              }
      }
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 502 });
}
