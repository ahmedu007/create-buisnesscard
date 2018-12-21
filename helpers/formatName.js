const formattedName = name => {
  return name
    .split(" ")
    .map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
    .join(" ");
};

module.exports = formattedName;
