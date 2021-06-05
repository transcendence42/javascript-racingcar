export async function ftSleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}
