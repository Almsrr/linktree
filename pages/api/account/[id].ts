import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;

    // Search account by id

    const rawData = await fs.readFileSync("data/seed.json");
    res.status(200).json(rawData);
  } else {
    res.status(501).send(null);
  }
}
