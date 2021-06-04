export function checkNamesValidation(inputString: string): boolean {
  const rawNames: string[] = inputString.split(",");
  const names: string[] = rawNames.filter(x => x.length <= 5);
  if (rawNames.length != names.length || names.length > 5) {
    return false;
  }
  return true;
}

export function checkNumberValidation(inputNumber: string): boolean {
  console.log(Number(inputNumber));
  if (Number.isNaN(Number(inputNumber)) || Number(inputNumber) <= 0) {
    return false;
  }
  return true;
}
