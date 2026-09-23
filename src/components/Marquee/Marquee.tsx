import "./Marquee.css";

interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: number;
}

export function Marquee({ items, separator = "✦", speed = 30 }: MarqueeProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;


  return (
    <div className="marquee">
      <div className="marqueeTrack" style={{ animationDuration: `${speed}s` }}>
        <span className="marqueeItem">{content}</span>
        <span className="marqueeItem" aria-hidden="true">
          {content}
        </span>
      </div>
    </div>
  );
}
