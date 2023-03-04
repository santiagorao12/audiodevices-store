import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

export const client = sanityClient({
    projectid: '1hwkywi2',
    dataset: 'production',
    apiVersion: '2022-04-04',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

//to use the sanity images
const builder = ImageUrlBuilder(client);


//sanity giving access to url where it is stored
export const urlFor = (source) => builder.image(source);

