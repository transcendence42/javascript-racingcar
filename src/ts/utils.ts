export async function ftSleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}
