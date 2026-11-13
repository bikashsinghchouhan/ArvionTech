import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from '../utils/scrollToId';

const ScrollToTop = () => {
  // Extracts pathname and hash from the current location
  const { pathname, hash } = useLocation();

  // Scrolls to the hash target if present, otherwise to the top whenever the route changes
  useEffect(() => {
    if (hash) {
      scrollToId(decodeURIComponent(hash.slice(1)));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null; // This component does not render anything
}

export default ScrollToTop;
