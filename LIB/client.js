import sanityClient  from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '1hwkywi2',
    dataset: 'production',
    apiVersion: '2022-04-04',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

//to use the sanity images
const builder = createImageUrlBuilder(client);


//sanity giving access to url where it is stored
export const urlFor = (source) => builder.image(source);

