import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat - foreseeAI",
  description: "Evidence-based AI chat with citations",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
