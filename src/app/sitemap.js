export default function sitemap() {
    const baseUrl = "https://axomitlab.com";
    const routes = ['', '/about', '/services', '/contact', '/portfolio', '/estimate'];

    const staticRoutes = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return [
        ...staticRoutes,
        {
            url: `${baseUrl}/leads`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ];
}
