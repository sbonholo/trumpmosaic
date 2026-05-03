import { NextResponse } from 'next/server';

// Redirect browser to Trump mugshot on Wikimedia Commons
// Wikimedia serves images with CORS headers allowing browser canvas usage
// This is an official government document (Fulton County Sheriff, 2023) - public domain
export async function GET() {
          const mugShotUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Donald_Trump_mug_shot.jpg/800px-Donald_Trump_mug_shot.jpg';
          return NextResponse.redirect(new URL(mugShotUrl));
}
