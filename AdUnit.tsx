import React from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

export function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const adRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (adRef.current && !window.adsbygoogle) {
      window.adsbygoogle = [];
    }

    try {
      if (adRef.current && window.adsbygoogle) {
        (window.adsbygoogle as any[]).push({});
      }
    } catch (err) {
      console.error('Error initializing AdSense:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="REPLACE_WITH_YOUR_ADSENSE_ID"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Add TypeScript declaration for adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}