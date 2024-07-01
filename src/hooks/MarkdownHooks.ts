import { MouseEventHandler, SetStateAction, useEffect, useState } from "react";
import { marked } from "marked";

const useMarkdown = () => {
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

  return { mdText, htmlText, change, copy };
};

export { useMarkdown };
