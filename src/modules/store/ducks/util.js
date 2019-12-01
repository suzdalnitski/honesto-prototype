export const normalizeByField = fieldName => data =>
  data.reduce(
    (acc, val) => ({
      ...acc,
      [val[fieldName]]: val,
    }),
    {},
  );

export const normalizeById = normalizeByField('id');
