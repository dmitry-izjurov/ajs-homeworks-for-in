export default function orderByProps(obj, arg) {
  const result = [];
  let unitsFiltered;
  if (typeof obj === 'object' && Array.isArray(arg) && arg.length > 0) {
    // eslint-disable-next-line guard-for-in
    for (const prop in obj) {
      result.push({ key: String(prop), value: obj[prop] });
    }
    unitsFiltered = result.filter((a) => typeof a.key === 'string');
    if (unitsFiltered.length > 0) {
      unitsFiltered.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        }
        if (a.key < b.key) {
          return -1;
        }
        return 0;
      });
    }
    for (let i = arg.length - 1; i >= 0; i -= 1) {
      const index = unitsFiltered.findIndex((a) => a.key === arg[i]);
      unitsFiltered.unshift(...unitsFiltered.splice(index, 1));
    }
  }
  return unitsFiltered;
}
