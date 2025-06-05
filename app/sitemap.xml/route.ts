
    export async function GET() {
    const baseUrl = "https://www.viverovalledelmantaro.pe/"; // reemplaza con tu dominio real
    const pages = ['', '/servicios', '/contacto']; // añade más rutas si tienes

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
            .map(
            (page) => `
            <url>
            <loc>${baseUrl}${page}</loc>
            <changefreq>monthly</changefreq>
            </url>
        `
            )
            .join('')}
        </urlset>`;

    return new Response(sitemap, {
        headers: {
        'Content-Type': 'application/xml',
        },
    });
    }