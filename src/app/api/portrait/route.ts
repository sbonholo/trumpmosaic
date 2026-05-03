import { NextResponse } from 'next/server';

// Redirect browser to Trump mugshot on Wikipedia
// Source: Fulton County Sheriff's Office booking photo, August 2023
export async function GET() {
            const mugShotUrl = 'https://upload.wikimedia.org/wikipedia/en/c/c5/Donald_Trump_mug_shot.jpg';
            return NextResponse.redirect(new URL(mugShotUrl));
}
