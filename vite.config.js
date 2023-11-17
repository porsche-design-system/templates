import { defineConfig } from 'vite';
import { getInitialStyles, getMetaTagsAndIconLinks, getComponentChunkLinks, getFontFaceStylesheet, getFontLinks, getIconLinks } from '@porsche-design-system/components-js/partials';

const transformIndexHtmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const partials = [
        getInitialStyles(),
        getComponentChunkLinks({ components: ['wordmark', 'crest', 'heading', 'text', 'carousel', 'link-tile', 'link-pure', 'button-pure', 'link', 'button'] }),
        getFontFaceStylesheet(),
        getFontLinks(),
        getIconLinks(),
        getMetaTagsAndIconLinks({ appTitle: 'Patterns' }),
      ].join('');
      return html.replace(/<\/head>/, `${partials}$&`);
    },
  }
}

export default defineConfig({
  plugins: [transformIndexHtmlPlugin()],
})
