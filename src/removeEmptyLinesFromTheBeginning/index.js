/**  @param lines @type {string[]} */
export const removeEmptyLinesFromTheBeginning = (lines) => {
  /** @type {string} */
  let actualLine = '';
  do {
    actualLine = lines.shift();
  } while (actualLine !== null && actualLine !== undefined && (actualLine.length === 0 || actualLine === '\n'));
  return [actualLine, ...lines];
}

export default removeEmptyLinesFromTheBeginning;
