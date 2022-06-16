import { resources } from "@/data/resources";

export default function handler(req, res) {
  const { slug } = req.query;
  const resource = resources.find(
    (resource) => resource.slug === String(slug)
  );
  console.log("req", req.query.slug);
  res.status(200).json(resource);
  // res.status(200).json(resources);
}
