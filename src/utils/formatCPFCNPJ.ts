export function formatDocument(str: string) {
  const onlyNumbers = str.replace(/\D/g, "");

  if (onlyNumbers.length === 11) {
    return onlyNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  } else if (onlyNumbers.length === 14) {
    return onlyNumbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  } else {
    return str;
  }
}
