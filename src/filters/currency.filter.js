export default function currencyFilter(valule, currency = 'RUB') {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency
    }).format(valule)
}