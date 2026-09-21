import type { CSSProperties, ReactElement, ReactNode } from "react";

export interface GlassSurfaceProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown; // aceita as demais props enquanto você não tipa todas
}

declare const GlassSurface: (props: GlassSurfaceProps) => ReactElement;
export default GlassSurface;