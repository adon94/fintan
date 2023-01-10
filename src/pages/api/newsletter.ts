import { NextApiResponse, NextApiRequest } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.body.email) {
    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: "992a684411b94dc2b84da4f1a8415454",
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: _req.body.email,
              },
            },
          ],
        },
      },
    });
    return res.status(200).json(response);
  }
  return res.status(500);
}
