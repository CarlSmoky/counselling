export const toTitleCase = (str: string) => {
  const convertedArr = str.replace(/[-_`\s]/g, "_").split("_");
  let result = []
  for (let i = 0; i < convertedArr.length; i++) {
    result.push(convertedArr[i].charAt(0).toUpperCase() + convertedArr[i].substring(1).toLowerCase());
  }
  return result.join(" ");
}