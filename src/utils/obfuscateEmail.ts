export function obfuscateEmail(email: string) {
  // Dividir o email em partes: nome do usuário e domínio
  const parts = email.split("@");
  if (parts.length !== 2) {
    return "Email inválido";
  }

  let [user, domain] = parts;

  // Ofuscar parte do nome do usuário
  let visiblePart = user.length > 4 ? 3 : 1; // Mostrar até 3 caracteres se o nome for longo
  let obscuredUser = user.substring(0, visiblePart) + "***";

  // Concatenar o nome do usuário ofuscado com o domínio
  return `${obscuredUser}@${domain}`;
}
