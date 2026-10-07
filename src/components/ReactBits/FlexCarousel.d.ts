import type { ReactElement, ReactNode } from "react";

export interface FlexCarouselProps {
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
}

declare const FlexCarousel: (props: FlexCarouselProps) => ReactElement;
export default FlexCarousel;
