export const trackPageView = (url) => {
  window.gtag("config", "G-XXXXXXX", {
    page_path: url,
  });
};