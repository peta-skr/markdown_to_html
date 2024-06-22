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
