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
]);

export function convert(text: string): string {
  // 下準備
  let text_arr: string[] = text.split(" ");
  let md_text: MarkdownText = new MarkdownText(text_arr[0], text_arr[1]);
  // 適切な関数に移動
  let convert_text: string;
  switch (md_text.attribute) {
    case "#": {
      convert_text = convert_hedding_one(md_text);
      break;
    }
    case "##": {
      convert_text = convert_hedding_two(md_text);
      break;
    }
    case "###": {
      convert_text = convert_hedding_three(md_text);
      break;
    }
    case "####": {
      convert_text = convert_hedding_four(md_text);
      break;
    }
    case "#####": {
      convert_text = convert_hedding_five(md_text);
      break;
    }
    case "######": {
      convert_text = convert_hedding_six(md_text);
      break;
    }
    default: {
      convert_text = md_text.text;
    }
  }

  return convert_text;
}

function convert_hedding_one(md_text: MarkdownText): string {
  let html_text = `<h1>${md_text.text}</h1>`;
  return html_text;
}

function convert_hedding_two(md_text: MarkdownText): string {
  let html_text = `<h2>${md_text.text}</h2>`;
  return html_text;
}

function convert_hedding_three(md_text: MarkdownText): string {
  let html_text = `<h3>${md_text.text}</h3>`;
  return html_text;
}

function convert_hedding_four(md_text: MarkdownText): string {
  let html_text = `<h4>${md_text.text}</h4>`;
  return html_text;
}

function convert_hedding_five(md_text: MarkdownText): string {
  let html_text = `<h5>${md_text.text}</h5>`;
  return html_text;
}

function convert_hedding_six(md_text: MarkdownText): string {
  let html_text = `<h6>${md_text.text}</h6>`;
  return html_text;
}
