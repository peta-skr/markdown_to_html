"use client";

import { useMarkdown } from "@/hooks/MarkdownHooks";

export default function Home() {
  const { mdText, htmlText, change, copy } = useMarkdown();

  return (
    <main>
      <h1>Markdown Preview</h1>
      <div className="markdown-area">
        <textarea
          name="markdown"
          id=""
          defaultValue={mdText}
          onChange={(e) => change(e.target.value)}
        ></textarea>
      </div>
      <button onClick={() => copy()}>copy</button>
      <div className="html-area">
        <textarea
          name="html"
          id=""
          value={htmlText}
          // defaultValue={htmlText}
          readOnly
        ></textarea>
      </div>
    </main>
  );
}
