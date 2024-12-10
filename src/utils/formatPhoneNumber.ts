export function formatBrazilianPhoneNumber(phoneNumber: string) {
  const cleaned = phoneNumber.replace(/\D/g, "");

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (cleaned.length === 12) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");
  } else {
    return phoneNumber;
  }
}
