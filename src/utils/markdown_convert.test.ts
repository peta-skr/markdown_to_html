import { expect, jest, test } from "@jest/globals";
import { convert } from "./markdown_convert";

test("convert header1", () => {
  expect(convert("# header")).toBe("<h1>header</h1>");
});

test("convert header2", () => {
  expect(convert("## header")).toBe("<h2>header</h2>");
});

test("convert header3", () => {
  expect(convert("### header")).toBe("<h3>header</h3>");
});

test("convert header4", () => {
  expect(convert("#### header")).toBe("<h4>header</h4>");
});

test("convert header5", () => {
  expect(convert("##### header")).toBe("<h5>header</h5>");
});

test("convert header6", () => {
  expect(convert("###### header")).toBe("<h6>header</h6>");
});

test("convert multiple headeres", () => {
  expect(convert("# header\r\n## header2")).toBe(
    "<h1>header</h1>\r\n<h2>header2</h2>"
  );
});

test("convert blockquote", () => {
  expect(convert("> 引用")).toBe("<blockquote>引用</blockquote>");
});

test("convert multiple blockquotes", () => {
  expect(convert("> 引用\r\n>> 入れ子")).toBe(
    "<blockquote>引用<blockquote>入れ子</blockquote></blockquote>"
  );
});
