import { defineConfig } from 'vite';
import { resolve } from 'path';
import { getInitialStyles, getMetaTagsAndIconLinks, getComponentChunkLinks, getFontFaceStylesheet, getFontLinks, getIconLinks, getLoaderScript } from '@porsche-design-system/components-js/partials';

const transformIndexHtmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const headPartials = [
        getInitialStyles(),
        getComponentChunkLinks({ components: ['wordmark', 'crest', 'heading', 'text', 'carousel', 'link-tile', 'link-pure', 'button-pure', 'link', 'button'] }),
        getFontFaceStylesheet(),
        getFontLinks(),
        getIconLinks(),
        getMetaTagsAndIconLinks({ appTitle: 'Patterns (Porsche Design System)' }),
      ].join('');

      const bodyPartials = [
        getLoaderScript(),
      ].join('');

      return html
        .replace(/<\/head>/, `${headPartials}$&`)
        .replace(/<\/body>/, `${bodyPartials}$&`);
    },
  }
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'shop-landing-page': resolve(__dirname, 'patterns/shop-landing-page/index.html'),
      },
    },
  },
  plugins: [transformIndexHtmlPlugin()],
})
