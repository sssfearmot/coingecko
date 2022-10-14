
export function reduceString(coin) {
    if (coin < 0) {
        return Number(coin).toFixed(2).substr(1);
    } else {
        return Number(coin).toFixed(2);
    }
}

export function currencyFormat(num) {
    const fixed = (num) => {
        if (num < 1) {
            return 3
        } else {
            return 2
        }
    }
    return num?.toFixed(fixed(num)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function separator(numb) {
    var str = numb.toFixed(0).toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}