const permutations = function (data) {
  if (data.length === 0) return [[]];
  if (data.length === 1) return [data];
  if (data.length === 2) {
    const [a, b] = data;
    return [
      [a, b],
      [b, a],
    ];
  }
  if (data.length > 2) {
    const perms = [];
    for (let i = 0; i < data.length; i++) {
      const first = data[i];
      const rest = [...data.slice(0, i), ...data.slice(i + 1)];
      const restPerms = permutations(rest);
      for (const perm of restPerms) {
        perms.push([first, ...perm]);
      }
    }
    return perms;
  }
};

// Do not edit below this line
module.exports = permutations;
