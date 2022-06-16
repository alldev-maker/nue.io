import { resources } from "@/data/resources";

export default function handler(req, res) {
  res.status(200).json(resources);
}
