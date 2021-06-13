function toCamelCase(str) {
  let op = "";
  if (str.length == 0) return op;
  for (let i = 0; i < str.length - 1; i++) {
    if (!(str[i] === "_" || str[i] === " " || str[i] === "-")) {
      op = op.concat(str[i]);
    } else {
      op = op.concat(str.charAt(i + 1).toUpperCase());
      i++;
    }
  }

  if (
    !(
      str[str.length - 2] === "_" ||
      str[str.length - 2] === " " ||
      str[str.length - 2] === "-"
    )
  ) {
    op = op.concat(str[str.length - 1]);
  }

  if (str[0] == str[0].toUpperCase()) {
    op[0] = op.charAt(0).toUpperCase();
  }

  return op;
}
