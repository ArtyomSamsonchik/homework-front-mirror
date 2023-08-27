import capitalize from './capitalize'

/**
 *  @param {string} path must be a string that only consist of letters
 *  in range a-z in both cases divided by hyphens. White spaces are not allowed;
 *  @param {function} mapFn is applied to every word in parsed string
 *  @return string a string joined from matched substrings obtained from mapFn
 *  @example parsePathName('/pre-junior', (str) => str.toUpperCase())
 */
const parsePathName = (path: string, mapFn: (substr: string) => string = capitalize) => {
  const parsedString = path
    .match(/((?<=^\/|-)[a-z]+)/gi)
    ?.map(mapFn)
    .join(' ')

  if (!parsedString)
    console.error(
      `Couldn't parse ${path}.
      Path can only consist of letters in range a-z in both cases divided by hyphen.
      White spaces are not allowed.`,
    )

  return parsedString ?? ''
}

export default parsePathName
