// Define the schema for site version data
export type Version = {
    // Unique identifier for theming and link to the site
    slug: string,
    title: string,
    description: string,
    // Cover image source URI
    coverSrc: string,
    // Logo image source URI
    logoSrc: string,
    themeColorHex: string,
    // Whether or not the site version is currently launched
    available: boolean,
}
