"use client";

import axios from "axios";
const access_token = "I1wYAhizqfCJzx1TZZVJZAbEIWylsbI0o6jYPiGS4IY";

export async function getBlogs() {
  const res = await axios.get(
    `https://cdn.contentful.com/spaces/7qo85eea3iom/environments/master/entries?access_token=${access_token}`
  );

  const assets = res.data.includes.Asset;
  (assets as Array<any>).map((_: any) => console.log(_.sys.id, "id assets"));
  (res.data.items as Array<any>).map((_: any) =>
    console.log(_.fields.image.sys.id, "id items")
  );

  const blogs = res.data.items.map((item: any, index: number) => {
    return {
      ...item,
      id: item.sys.id,
      title: item.title,
      image_url: (assets as Array<any>).find(
        (_: any) => _.sys.id == item.fields.image.sys.id
      ),
    };
  });

  return blogs;
}

export async function getBlogDetail(entriesId: string) {
  const res = await axios.get(
    `https://cdn.contentful.com/spaces/7qo85eea3iom/environments/master/entries/${entriesId}/?access_token=${access_token}&include=1`
  );
  const blogDetail = res.data.fields;
  return blogDetail;
}

export async function getAssetDetail(assetId: string) {
  const res = await axios.get(
    `https://cdn.contentful.com/spaces/7qo85eea3iom/environments/master/assets/${assetId}?access_token=${access_token}`
  );
  const assetDetail = res.data.fields;
  return assetDetail;
}
