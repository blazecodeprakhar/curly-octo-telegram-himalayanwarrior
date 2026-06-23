"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string;
};

export const ImageWithFallback = ({
  src,
  fallbackSrc = "/images/hero1.jpg",
  alt,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};
export default ImageWithFallback;
