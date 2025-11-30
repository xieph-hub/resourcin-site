// app/insights/rss.xml/route.ts
import { NextResponse } from "next/server";
import { getInsightsList } from "../../../lib/insights";

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.resourcin.com";

  const insights = await getInsightsList();

  const itemsXml = insights
    .map((item) => {
      const url = `${siteUrl}/insights/${item.slug}`;
      const pubDate = item.publishedAt
        ? new Date(item.publishedAt).toUTCString()
        : new Date().toUTCString();

      return `
        <item>
          <title><![CDATA[${item.title}]]></title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${pubDate}</pubDate>
          ${
            item.excerpt
              ? `<description><![CDATA[${item.excerpt}]]></description>`
              : ""
          }
        </item>
      `;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Resourcin – Insights</title>
    <link>${siteUrl}/insights</link>
    <description>Thinking on hiring and people operations.</description>
    ${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
