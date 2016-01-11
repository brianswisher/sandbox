module.exports = function(id, content) {
  return `<div id="${id}">
    ${content || "loading..."}
  </div>`;
};
