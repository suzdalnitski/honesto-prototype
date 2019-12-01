export const normalizeById = data =>
  data.reduce(
    (acc, val) => ({
      ...acc,
      [val.id]: val,
    }),
    {},
  );
