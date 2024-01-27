import removeEmptyLinesFromTheBeginning from "../removeEmptyLinesFromTheBeginning/index.js";

/** @param text @type {string} */
export const orderImports = (text) => {
  /** @type {string[]} */
  const lines = text.split(/\n/);
  /** @type {string[]} */
  const imports = lines.filter(line => /.*import.*/.exec(line));
  /** @type {string[]} */
  const localImports = imports.filter(line => /'.*\.\/.*';/.exec(line));
  /** @type {string[]} */
  const globalImports = imports.filter(line => !localImports.includes(line));
  /** @type {string[]} */
  const requires = lines.filter(line => /.*require.*/.exec(line));
  /** @type {string[]} */
  const localRequires = requires.filter(line => /'.*\.\/.*';/.exec(line));
  /** @type {string[]} */
  const globalRequires = requires.filter(line => !localRequires.includes(line));
  /** @type {string[]} */
  const rest = removeEmptyLinesFromTheBeginning(lines.filter(line => !imports.includes(line) && !requires.includes(line)));

  /** @type {string[]} */
  const orderedLines = [
    globalImports
      .sort((a, b) => a.length - b.length)
      .join('\n'),
    ...(globalImports.length ? ['\n\n'] : []),
    localImports
      .sort((a, b) => a.length - b.length)
      .join('\n'),
    ...(localImports.length ? ['\n\n'] : []),
    globalRequires
      .sort((a, b) => a.length - b.length)
      .join('\n'),
    ...(globalRequires.length ? ['\n\n'] : []),
    localRequires
      .sort((a, b) => a.length - b.length)
      .join('\n'),
    ...(localRequires.length ? ['\n\n'] : []),
    rest
      .join('\n')
  ];
  /** @type {string} */
  return orderedLines.join('');
}

export default orderImports;
