const expect = require('chai').expect;
const parse = require('../../../src/parser');

describe('Parser', () => {
  const expectedOutput = {testing: true};
  const html = `<body><div></div>
                <script> window._sharedData=${JSON.stringify(expectedOutput)}; </script>
                </body>`;

  it('should extract sharedData string as javascript object', () => {
    const actualOutput = parse(html);
    expect(actualOutput).to.eql(expectedOutput);
  });
});
