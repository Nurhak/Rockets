import { memo } from 'react';

function LazyImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

LazyImage.defaultProps = {
  className: '',
};

export default memo(LazyImage);
