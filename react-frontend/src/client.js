import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "",
  dataset: "",
  apiVersion: "2024-12-16",
  useCdn: true,
  token:
    "",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
