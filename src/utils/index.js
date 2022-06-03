export default function toMoneyAbbreviation(value) {
  const formatterCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BRL"
  });

  const valueString = formatterCurrency.format(value)
    .replaceAll('0', '').replace(',', '.').replaceAll(',', '')
    
  return `${valueString.slice(0, valueString.length - 1)} M`; 
}

function toMoney(value) {
  const formatterCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BRL"
  });
    
  return formatterCurrency.format(value).split('.')[0].replaceAll(',', '.');
}

export {
  toMoney
}