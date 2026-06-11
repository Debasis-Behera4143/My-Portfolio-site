const axios = require('axios');
const FormData = require('form-data');

async function test() {
  try {
    const form = new FormData();
    form.append('name', 'Test');
    form.append('email', 'test@test.com');
    form.append('message', 'Test message');

    const res = await axios.post('https://formsubmit.co/ajax/debasisbehera1508@gmail.com', form, {
      headers: {
        ...form.getHeaders(),
        'Accept': 'application/json',
        'Origin': 'http://localhost:5173',
        'Referer': 'http://localhost:5173/'
      }
    });
    console.log(res.data);
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
  }
}
test();
