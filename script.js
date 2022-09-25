// coded by @lasjorg
// eslint-disable-next-line no-unused-vars
const projectName = 'portfolio';
const url = '//gist.githubusercontent.com/Rusty25/a18f99e0e0a2c42662cc0746b71a5f00/raw/86e4fce24116005f2748aeacdb5e94624937eb31/pi_digits.json';

fetch(url).then(response => {
  response.json().then(obj => {
    console.log(obj.pi.slice(0, 1000));
  });
});