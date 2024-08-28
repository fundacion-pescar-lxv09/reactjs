export const check = (arr, player) => arr.every(item => item !== "" && item === player)

export const isDraw = (arr) => arr.map((row) => row.every(col => col !== "")).every(row => row !== false)

export const isWinner = (arr, player="O") => {
for (let i = 0; i <= 2; i++){
    const row = check(arr[i], player)
    const col = check(arr.map(item => item[i]), player)
    const d1 = check(arr.map((item,idx) => item[idx]), player)
    const d2 = check(arr.map((item,idx) => item[(arr.length-1)-idx]), player)
    if(row || col || d1 || d2) return true;
}}