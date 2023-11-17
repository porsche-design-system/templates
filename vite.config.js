import { defineConfig } from 'vite';
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
        getMetaTagsAndIconLinks({ appTitle: 'Patterns' }),
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
  plugins: [transformIndexHtmlPlugin()],
})
