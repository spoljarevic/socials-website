/**
 * Socials page – minimal init (style and functionality aligned with example site)
 */
document.addEventListener('DOMContentLoaded', () => {
  // Optional: open external links with noopener (already set in HTML)
  document.querySelectorAll('.link-card[target="_blank"]').forEach((link) => {
    if (!link.getAttribute('rel')?.includes('noopener')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
