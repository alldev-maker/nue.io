import { revops } from "@/data/revops";
export default function handler(req, res) {
  // const { type } = req.query;
  // const contentType = revops.find((revop) => revop.type === String(type));
  res.status(200).json(revops);
}
