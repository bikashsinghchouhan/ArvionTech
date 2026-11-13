// Scrolls to an element by id, leaving room for the fixed site header.
// Retries for a short while because lazy-loaded pages may not have rendered yet.
export const scrollToId = (id, behavior = 'smooth') => {
  let tries = 0;
  const go = () => {
    const el = document.getElementById(id);
    if (el) {
      // On desktop the top bar hides once scrolled, so only the blue nav covers content
      const subnav = document.getElementById('site-subnav');
      const header = document.getElementById('site-header');
      const covered = subnav && subnav.offsetParent !== null ? subnav.offsetHeight : (header ? header.offsetHeight : 0);
      const offset = covered + 8;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(top, 0), behavior });
    } else if (tries++ < 25) {
      setTimeout(go, 100);
    }
  };
  go();
};
