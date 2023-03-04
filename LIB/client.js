import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

const client = sanityClient({
    projectid: '1hwkywi2',
    dataset: 'production',
    apiVersion: '2022-04-04',
    useCdn: true,
    token: ''
})