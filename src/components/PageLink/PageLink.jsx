import React from 'react';
import { Link } from './styles';

export const PageLink = ({ linkRef, content, selected }) => {
  return selected === true ? (
    <Link href={linkRef} isSelected>
      {content}
    </Link>
  ) : (
    <Link href={linkRef}>{content}</Link>
  );
};
