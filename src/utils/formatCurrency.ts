export default function formatCurrency(
  currencyString: string | number,
  plusSign?: boolean,
  withoutSifrao?: boolean
) {
  if (!currencyString) return `${withoutSifrao ? "" : "R$"} 0.00`;

  let valueInString: string;

  if (typeof currencyString === "number" && !isNaN(currencyString)) {
    valueInString = currencyString.toString();
  } else {
    // @ts-ignore
    valueInString = currencyString;
  }

  const cleanedString = valueInString.replace(/[^\d,.-]/g, "");

  const numberString = cleanedString.replace(",", ".");

  const number = parseFloat(numberString);

  if (isNaN(number)) {
    return `${withoutSifrao ? "" : "R$"} 0.00`;
  }

  const formattedNumber = number.toFixed(2);

  const parts = formattedNumber.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  let plus = plusSign ? "+" : "";

  const currencyFormatted =
    `${parts[0] !== "0" ? plus : ""} ` + `${withoutSifrao ? "" : "R$ "}` + parts.join(",");

  return currencyFormatted;
}
