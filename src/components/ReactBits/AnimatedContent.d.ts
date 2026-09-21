import type { ReactElement, ReactNode } from "react";

export interface AnimatedContentProps {
  children?: ReactNode;
  className?: string;
  [key: string]: unknown; // distance, direction, duration, delay etc.
}

declare const AnimatedContent: (props: AnimatedContentProps) => ReactElement;
export default AnimatedContent;
