const fs = require('fs');

const client = fs.readFileSync(`${__dirname}/../client/joke-client.html`);
const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`);
const css = fs.readFileSync(`${__dirname}/../client/default-styles.css`);

const get404Response = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(errorPage);
  response.end();
};

const getClient = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(client);
  response.end();
};

const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

module.exports = {
  get404Response,
  getClient,
  getCSS,
};
