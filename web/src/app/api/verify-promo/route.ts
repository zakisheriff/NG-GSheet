
import { NextResponse } from 'next/server';
import { checkPromoUsage } from '@/lib/googleSheets';

export async function POST(request: Request) {
    try {
        const { phone, address, code } = await request.json();

        if (!phone || !address || !code) {
            return NextResponse.json({ error: 'Missing details' }, { status: 400 });
        }

        const isUsed = await checkPromoUsage(phone, address, code);

        if (isUsed) {
            return NextResponse.json({
                allowed: false,
                message: 'This promo code has already been used by you.'
            });
        }

        return NextResponse.json({ allowed: true });
    } catch (error) {
        console.error('Promo verification error:', error);
        return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
    }
}
