import React from 'react';

/**
 * Renders a heading string in the site's navy + orange style:
 * the last word (or last two words for titles of 3+ words) is orange.
 * Non-string titles (JSX that already has its own highlight) render unchanged.
 */
const HighlightTitle = ({ title, className = 'text-[#f2700f]' }) => {
  if (typeof title !== 'string') return title;
  const words = title.trim().split(/\s+/);
  if (words.length < 2) return <span className={className}>{title}</span>;
  const count = words.length >= 3 ? 2 : 1;
  return (
    <>
      {words.slice(0, -count).join(' ')}{' '}
      <span className={className}>{words.slice(-count).join(' ')}</span>
    </>
  );
};

export default HighlightTitle;
