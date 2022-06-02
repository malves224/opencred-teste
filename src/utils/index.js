export default function toMoneyAbbreviation(value) {
  const formatterCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BRL"
  });

  const valueString = formatterCurrency.format(value)
    .replaceAll('0', '').replace(',', '.').replaceAll(',', '')
    
  return `${valueString.slice(0, valueString.length - 1)} M`; 
}