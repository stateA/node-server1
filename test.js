const assert = require('assert');
const http = require('http');
const server = require('./index');

function testServer() {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:8046/hello', (res) => {
      let data = '';

      // Read response data
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          assert.strictEqual(res.statusCode, 200, 'Status code should be 200');
          assert.strictEqual(data, '{"Message" : "Hello world"}', 'Response should be "Hello world"');
          console.log('Passed');
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

server.listen(8046, async () => {
  try {
    await testServer();
    server.close();
  } catch (error) {
    console.error('Failed :', error.message);
    server.close();
    process.exit(1);
  }
});
