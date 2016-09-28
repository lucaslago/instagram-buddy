module.exports = {
  hasAttributes: img => img.attribs !== undefined,
  toImageJSON: img => {
    return {src: img.attribs.src, text: img.attribs.alt};
  }
}
