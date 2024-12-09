import { defineConfig } from 'vite';
import { resolve } from 'path';
import { getInitialStyles, getMetaTagsAndIconLinks, getComponentChunkLinks, getFontFaceStylesheet, getFontLinks, getIconLinks, getLoaderScript } from '@porsche-design-system/components-js/partials';

const transformIndexHtmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const cspContent = [
        `default-src 'self' https://cdn.ui.porsche.com`,
        `style-src 'self' https://cdn.ui.porsche.com 'unsafe-inline'`,
        `script-src 'self' https://cdn.ui.porsche.com ${getLoaderScript({ format: 'sha256' })}`,
        `img-src 'self' https://cdn.ui.porsche.com https://porsche-design-system.github.io data:` // data: is needed for inline background images, e.g. used in checkbox-wrapper and radio-button-wrapper
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
  base: '/templates/',
  build: {
    rollupOptions: {
      input: {
        'drive-homepage': resolve(__dirname, 'src/drive-homepage/index.html'),
        'drive-voucher': resolve(__dirname, 'src/drive-voucher/index.html'),
        'co-driver': resolve(__dirname, 'src/co-driver/index.html'),
        'header': resolve(__dirname, 'src/header/index.html'),
        'admin-panel': resolve(__dirname, 'src/admin-panel/index.html'),
        'shop-checkout': resolve(__dirname, 'src/shop-checkout/index.html'),
        'shop-homepage': resolve(__dirname, 'src/shop-homepage/index.html'),
        'shop-product-list': resolve(__dirname, 'src/shop-product-list/index.html'),
        'shop-product-detail': resolve(__dirname, 'src/shop-product-detail/index.html'),
        'shop-shopping-cart': resolve(__dirname, 'src/shop-shopping-cart/index.html'),
        'grid-productive': resolve(__dirname, 'src/grid-productive/index.html'),
      },
    },
  },
  plugins: [transformIndexHtmlPlugin()],
})
