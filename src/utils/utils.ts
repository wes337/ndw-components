export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') + (middle.length > 0 ? ` ${middle}` : '') + (last.length > 0 ? ` ${last}` : '')
  );
}

export function isNumberString(str: string): boolean {
  // eslint-disable-next-line @stencil/strict-boolean-conditions
  if (!str || typeof str !== 'string') {
    return false;
  }

  return !isNaN(parseFloat(str));
}
