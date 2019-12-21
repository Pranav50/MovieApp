// Convert time to hours and minutes
export const calcTime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`
}

// Convert a number to format
export const convertMoney = (money) => {
    var fortmatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return fortmatter.format(money)
}