class MarkdownText {
  attribute: string; // #とか-とかmarkdownの属性が入る
  text: string; // ↑以外のテキスト部分が入る

  constructor(attribute: string, text: string) {
    this.attribute = attribute;
    this.text = text;
  }
}

const markDownType = new Map<string, string>([
  ["#", "h1"],
  ["##", "h2"],
  ["###", "h3"],
  ["####", "h4"],
  ["#####", "h5"],
  ["######", "h6"],
  [">", "blockquote"],
]);

export function convert(text: string): string {
  // 下準備
  // 文字列を改行で分割
  let convert_text: string = "";
  let text_arr: string[][] = create_arr(text);

  for (let i = 0; i < arr.length; i++) {
    // スペースで分割
    let md_text: MarkdownText = new MarkdownText(
      text_arr[i][0],
      text_arr[i][1]
    );
    // 適切な関数に移動
    switch (md_text.attribute) {
      case "#":
      case "##":
      case "###":
      case "####":
      case "#####":
      case "######":
        convert_text += convert_html(md_text);
        break;

      default:
        convert_text += md_text.text;
    }
    convert_text += "\r\n";
  }

  // 最終行の改行を削除
  convert_text = convert_text.substring(0, convert_text.length - 2);

  return convert_text;
}

function create_arr(text: string): string[][] {
  let arr = text.split("\r\n");
  let text_arr = [];
  for (let text of arr) {
    text_arr.push(text.split(" "));
  }

  let tree_arr: string[][] = [];

  for (let i = 0; i < text_arr.length; i++) {
    if (text_arr[i][0] == ">") {
      let curr = ">";
      let child_arr = [];
      while (curr + ">" == text_arr[i + 1][0]) {
        child_arr.push(text_arr[i + 1]);
        curr = text_arr[i + 1][0];
        i++;
      }
    } else {
      text_arr.push(text_arr[i]);
    }
  }

  return tree_arr;
}

function convert_html(md_text: MarkdownText): string {
  let head_tag = markDownType.get(md_text.attribute);
  let html_text = `<${head_tag}>${md_text.text}</${head_tag}>`;
  return html_text;
}
