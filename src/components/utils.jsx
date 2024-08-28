export const Numbers = (rows=3, cols=3, arr=[]) => {
  for(let ridx = 0; ridx < rows; ridx++){
    arr.push([]);
    for (let cidx = 0; cidx < cols; cidx++) arr[ridx].push("");
  }
  return arr;
}