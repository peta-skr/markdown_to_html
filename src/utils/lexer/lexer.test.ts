import { expect, jest, test } from "@jest/globals";

test("convert header1", () => {
  expect(lexer("# header")).toBe([
    // {type: token.head_one, literal: "#"}
  ]);
});
