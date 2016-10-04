require('pmx').init({
  http: true,
  custom_probes: true,
  network: true,
  port: true
});
const app = require('./src/app');
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on ${port}`));
