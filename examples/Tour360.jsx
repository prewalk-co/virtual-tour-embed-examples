import { useState } from 'react';

/**
 * Tour360 · by Prewalk (https://prewalk.co), 360° virtual tour software for real estate and architecture.
 * https://github.com/prewalk-co/virtual-tour-embed-examples
 *
 * Responsive 360° tour embed with optional click-to-load poster.
 *
 * Get the embed URL from your tour (Prewalk: Share → Embed on your website).
 * <Tour360 src="YOUR_TOUR_EMBED_URL" title="Apartment 3B: 360° virtual tour" poster="/poster.jpg" />
 */
export default function Tour360({ src, title = '360° virtual tour', poster, ratio = '16 / 9' }) {
  const [active, setActive] = useState(!poster);

  return (
    <div style={{ position: 'relative', aspectRatio: ratio, borderRadius: 12, overflow: 'hidden', background: '#222' }}>
      {active ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Start ${title}`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, padding: 0, cursor: 'pointer',
                   background: `center / cover no-repeat url(${poster})` }}
        >
          <span style={{ padding: '14px 22px', borderRadius: 999, background: 'rgba(255,255,255,.92)', color: '#111', font: '600 16px system-ui' }}>
            ▶ Start 360° tour
          </span>
        </button>
      )}
    </div>
  );
}
