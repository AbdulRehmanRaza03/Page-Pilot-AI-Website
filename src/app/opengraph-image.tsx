import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PagePilot — AI-powered Facebook Page automation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
          color: "#fff",
          padding: "80px",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "linear-gradient(135deg, #3b82f6, #6366f1, #a855f7)",
            marginBottom: 40,
          }}
        >
          <svg width="60" height="60" viewBox="0 0 32 32" fill="white">
            <path d="M16 6 L24 15 L16 26 L8 15 Z" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          PagePilot
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 16,
            color: "#c7d2fe",
          }}
        >
          AI-powered Facebook Page automation
        </div>
      </div>
    ),
    { ...size }
  );
}
