import { revops } from "@/data/revops";

export default function handler(req, res) {
  const { type, slug } = req.query;
  const contentType = revops.find((revop) => revop.type === String(type));

  const article = contentType.items.find(
    (item) => item.slug === String(slug)
  );
  res.status(200).json(article);
}
