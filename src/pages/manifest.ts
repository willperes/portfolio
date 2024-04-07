import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Willian Peres",
        short_name: "Willian Peres",
        description: "Willian Peres's developer portfolio",
        start_url: "/",
        display: "standalone",
        icons: [
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ]
    }
}