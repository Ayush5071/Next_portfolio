import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#FAFAFA',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    border: '1px solid #E5E5E5',
                }}
            >
                <span
                    style={{
                        color: '#111111',
                        fontSize: '18px',
                        fontFamily: 'serif',
                        fontWeight: 'bold',
                        letterSpacing: '-1px',
                        marginTop: '2px', // Slight optical centering adjustment
                    }}
                >
                    AT
                </span>
            </div>
        ),
        { ...size }
    );
}
