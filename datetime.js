const moment = require('moment-timezone');

const countries = [
  { name: 'Nepal', timezone: 'Asia/Kathmandu' },
  { name: 'United States', timezone: 'America/New_York' },
  { name: 'United Kingdom', timezone: 'Europe/London' },
  { name: 'Australia', timezone: 'Australia/Sydney' },
  { name: 'India', timezone: 'Asia/Kolkata' },
];

countries.forEach((country) => {
  const time = moment.tz(new Date(), country.timezone).format('YYYY-MM-DD HH:mm:ss');
  console.log(`Current time in ${country.name}: ${time}`);
});
