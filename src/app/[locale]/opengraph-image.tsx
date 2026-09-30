import { ImageResponse } from "next/og";
import en from "../../../messages/en.json";
import ptBr from "../../../messages/pt-br.json";

const messagesFor = (locale: string) => (locale === "pt-br" ? ptBr : en);

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const { locale } = await params;
  return [
    { id: "og", alt: messagesFor(locale).Metadata.ogImageAlt, size, contentType },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { Metadata, Footer } = messagesFor(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#fb923c" }}>david.willians</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            David Willians
          </div>
          <div style={{ fontSize: 40, color: "#a3a3a3" }}>{Metadata.jobTitle}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#a3a3a3",
            borderTop: "2px solid #262626",
            paddingTop: 28,
          }}
        >
          <span>{Footer.location}</span>
          <span>React · Next.js · Node.js · PostgreSQL</span>
        </div>
      </div>
    ),
    size
  );
}
