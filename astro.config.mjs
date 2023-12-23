import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://emma-bemma.github.io',
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
