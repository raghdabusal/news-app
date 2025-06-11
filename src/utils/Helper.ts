export function capitalizeName(name: string | undefined): string {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : "Unknown";
}
