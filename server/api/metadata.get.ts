export default defineEventHandler(async (event) => {
    const { url } = getQuery(event);
    if (!url || typeof url !== "string") {
        throw createError({
            statusCode: 400,
            statusMessage: "URL is required",
        });
    }

    try {
        // Fetch the HTML content
        const html = await $fetch<string>(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; LinkCardBot/1.0)",
            },
        });

        // Simple regex to extract og tags
        const getMetaContent = (prop: string) => {
            const regex = new RegExp(
                `<meta\\s+(?:property|name)=["']${prop}["']\\s+content=["'](.*?)["']`,
                "i",
            );
            const match = html.match(regex);
            return match ? match[1] : null;
        };

        const title =
            getMetaContent("og:title") ||
            getMetaContent("twitter:title") ||
            html.match(/<title>(.*?)<\/title>/i)?.[1];
        const description =
            getMetaContent("og:description") ||
            getMetaContent("twitter:description") ||
            getMetaContent("description");
        const image = getMetaContent("og:image") || getMetaContent("twitter:image");

        return {
            title,
            description,
            image,
            url,
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            title: url,
            description: null,
            image: null,
            url,
        };
    }
});