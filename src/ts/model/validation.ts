export function checkNamesValidation(inputString: string): boolean {
  const rawNames: string[] = inputString.split(",");
  const names: string[] = rawNames.map((x)=>x.trim()).filter((x) => x.length <= 5);
  if (rawNames.length != names.length || names.length > 5) {
    return false;
  }
  return true;
}

export function checkNumberValidation(inputNumber: string): boolean {
  if (Number.isNaN(Number(inputNumber)) || Number(inputNumber) <= 0) {
    return false;
  }
  return true;
}
