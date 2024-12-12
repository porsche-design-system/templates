import { resolve } from 'node:path';
import {
  getComponentChunkLinks,
  getFontFaceStylesheet,
  getFontLinks,
  getIconLinks,
  getInitialStyles,
  getLoaderScript,
  getMetaTagsAndIconLinks,
} from '@porsche-design-system/components-js/partials';
import { defineConfig } from 'vite';

const REGEX_HEAD = /<\/head>/;
const REGEX_BODY = /<\/body>/;

const transformIndexHtmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      // biome-ignore lint/correctness/noUnusedVariables: can be re-enabled when config is extended to support home & nav
      const cspContent = [
        `default-src 'self' https://cdn.ui.porsche.com`,
        `style-src 'self' https://cdn.ui.porsche.com 'unsafe-inline'`,
        `script-src 'self' https://cdn.ui.porsche.com ${getLoaderScript({ format: 'sha256' })}`,
        `img-src 'self' https://cdn.ui.porsche.com https://porsche-design-system.github.io data:`, // data: is needed for inline background images, e.g. used in checkbox-wrapper and radio-button-wrapper
      ].join('; ');

      const headPartials = [
        //`<meta http-equiv="Content-Security-Policy" content="${cspContent}"/>`, // disabled due to loading of H&N
        getInitialStyles(),
        getComponentChunkLinks({ components: ['display', 'text', 'carousel', 'link-tile', 'link-pure', 'link'] }),
        getFontFaceStylesheet(),
        getFontLinks(),
        getIconLinks(),
        getMetaTagsAndIconLinks({ appTitle: 'Templates by Porsche Design System' }),
      ].join('');

      const bodyPartials = [getLoaderScript()].join('');

      return html.replace(REGEX_HEAD, `${headPartials}$&`).replace(REGEX_BODY, `${bodyPartials}$&`);
    },
  };
};

export default defineConfig({
  base: '/templates/',
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        'drive-homepage': resolve(__dirname, 'src/drive-homepage/index.html'),
        'drive-voucher': resolve(__dirname, 'src/drive-voucher/index.html'),
        'co-driver': resolve(__dirname, 'src/co-driver/index.html'),
        'admin-panel': resolve(__dirname, 'src/admin-panel/index.html'),
        'shop-checkout': resolve(__dirname, 'src/shop-checkout/index.html'),
        'shop-homepage': resolve(__dirname, 'src/shop-homepage/index.html'),
        'shop-product-list': resolve(__dirname, 'src/shop-product-list/index.html'),
        'shop-product-detail': resolve(__dirname, 'src/shop-product-detail/index.html'),
        'shop-shopping-cart': resolve(__dirname, 'src/shop-shopping-cart/index.html'),
      },
    },
  },
  plugins: [transformIndexHtmlPlugin()],
});
