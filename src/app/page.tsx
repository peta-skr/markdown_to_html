"use client";

import { MouseEventHandler, SetStateAction, useEffect, useState } from "react";
import { marked } from "marked";
import { convert } from "@/utils/markdown_convert";

export default function Home() {
  const [mdText, setMdText] = useState(localStorage.getItem("markdown") || ""); //markdown
  const [htmlText, setHtmlText] = useState(localStorage.getItem("html") || ""); //markdown

  useEffect(() => {
    localStorage.setItem("markdown", mdText);
    localStorage.setItem("html", htmlText);
  }, [mdText, htmlText]);

  useEffect(() => {
    Convert();
  }, [mdText]);

  function Convert(): void {
    let text: SetStateAction<string> = marked.parse(
      mdText
    ) as SetStateAction<string>;
    setHtmlText(text);
  }

  function copy(): void {
    navigator.clipboard.writeText(htmlText).then(
      () => {
        console.log("success");
      },
      () => {
        console.log("fail");
      }
    );
  }

  function change(text: string) {
    setMdText(text);
  }

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
          defaultValue={htmlText}
        ></textarea>
      </div>
    </main>
  );
}
