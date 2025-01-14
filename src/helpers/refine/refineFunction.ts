export const refineObjectKeysToCamelCase = (obj: never) => {
  return Object.keys(obj).reduce((acc, key) => {
    const camelCaseKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
    return { ...acc, [camelCaseKey]: obj[key] };
  }, {});
};
