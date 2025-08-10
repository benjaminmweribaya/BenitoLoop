import React from "react";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: object;
};

const Seo: React.FC<SeoProps> = ({ title, description, canonical, jsonLd }) => {
  React.useEffect(() => {
    document.title = title;

    if (description) {
      let el = document.querySelector('meta[name="description"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', 'description');
        document.head.appendChild(el);
      }
      el.setAttribute('content', description);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, canonical, jsonLd]);

  return null;
};

export default Seo;
