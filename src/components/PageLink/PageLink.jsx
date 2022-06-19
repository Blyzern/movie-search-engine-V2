import React from 'react';
import { Link } from './styles';

export const PageLink = ({ linkRef, content }) => {
  return <Link href={linkRef}>{content}</Link>;
};
