export const money = (number, currency) => {
    const formatNumber =  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `$& `);
    return `${formatNumber} ${currency}`
}
