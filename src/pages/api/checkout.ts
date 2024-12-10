import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { item } = req.body;

  if (req.method !== "POST") {
    return res.status(405);
  }

  if (!item) {
    return res.status(400).json({ error: "Missing Information" });
  }

  // const URL_SUCCESS = process.env.NEXT_URL + "/tickets?checkout=success";
  // const URL_FAILED = process.env.NEXT_URL + "/checkout";

  try {
    return res.status(201).json({});
  } catch {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
