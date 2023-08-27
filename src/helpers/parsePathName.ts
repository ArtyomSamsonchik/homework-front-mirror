import capitalize from './capitalize'

/**
 *  @param {string} path path must be a string that only consist of letters
 *  in range a-z in both cases divided by hyphen.
 *  @param {function} mapFn mapFn is applied to every word in parsed string
 *  @return string a string joined of mapped substrings received from mapFn
 *  @example parsePathName('/pre-junior')
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
