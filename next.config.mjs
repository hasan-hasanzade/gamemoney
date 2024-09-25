// next.config.mjs
const nextConfig = {


    output: 'standalone',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        svgProps: { fill: 'currentColor' },
                    },
                },
            ],
        });
        return config;
    },
};

export default nextConfig;

