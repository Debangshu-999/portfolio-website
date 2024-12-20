import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ot3ua35a",
  dataset: "production",
  apiVersion: "2024-12-16",
  useCdn: true,
  token:
    "sk6m2IwqzQBDrjo5UsRhnNi5z1imOQ23sn40lED9XavL3LA0gPCrKN5skrXrp9u5OZ5j2rgrb3PU5yvPZmdISBYQpfUDDLWrUWDpcGDuGWOfj8cY5RA0pQMMAtmQrv10NlOELMpbKlY0SrZXy6Kanb3UT8vJuTEzXwDpXWF0nSu1hyl2r0FP",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
