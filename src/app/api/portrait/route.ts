import { NextResponse } from 'next/server';

// Redirect browser to Trump official portrait (BBC News)
export async function GET() {
              const portraitUrl = 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/a088/live/ba4bed20-d4b2-11ef-9fd6-0be88a764111.jpg.webp';
              return NextResponse.redirect(new URL(portraitUrl));
}
