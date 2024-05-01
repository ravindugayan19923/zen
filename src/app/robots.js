import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


export default function robots( ){
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin",]
            }
        ],
        sitemap: "https://zenexsltns.com/sitemap.xml",
    }
}