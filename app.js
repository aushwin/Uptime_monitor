{
  // Manual Pinging
//   var Ping = require('./lib/ping'),
//     websites = [
//         {
//             url: 'https://retro-weather-app.herokuapp.com/',
//             timeout: 0.01 //! change elapsed time to 1 to send request after 1 minute
//         },
//     ],
//     monitors = [];

// websites.forEach(function (website) {
//     var monitor = new Ping ({
//         website: website.url,
//         timeout: website.timeout
//     });
    

//     monitors.push(monitor);
// });
}




{
//retrieves an uptime check config

// const monitoring = require('@google-cloud/monitoring')

// const client = new monitoring.UptimeCheckServiceClient()


// const projectId = 'webmonitorapp'
// const uptimeCheckConfigId = 'collate'
// const request = {
//     name : client.projectUptimeCheckConfigPath(projectId , uptimeCheckConfigId)
// }

// console.log(`Retrieving ${request.name}`)


// const test = async()=>{const [uptimeCheckConfig] = await client.getUptimeCheckConfig(request);
// console.log(`ID: ${uptimeCheckConfig.name}`);
// console.log(`Display Name: ${uptimeCheckConfig.displayName}`);
// console.log('Resource: %j', uptimeCheckConfig.monitoredResource);
// console.log('Period: %j', uptimeCheckConfig.period);
// console.log('Timeout: %j', uptimeCheckConfig.timeout);
// console.log(`Check type: ${uptimeCheckConfig.check_request_type}`);
// console.log(
//   'Check: %j',
//   uptimeCheckConfig.httpCheck || uptimeCheckConfig.tcpCheck
// );
// console.log(
//     `Content matchers: ${uptimeCheckConfig.contentMatchers
//       .map(matcher => matcher.content)
//       .join(', ')}`
//   );
//   console.log(`Regions: ${uptimeCheckConfig.selectedRegions.join(', ')}`);
//   }

// test()
}


// const monitoring = require('@google-cloud/monitoring');

// async function quickstart() {
//   // Your Google Cloud Platform project ID
//   const projectId =
//     process.env.GCLOUD_PROJECT ||
//     process.env.GOOGLE_CLOUD_PROJECT ||
//     'webmonitorapp';

//   // Creates a client
//   const client = new monitoring.MetricServiceClient();

//   // Prepares an individual data point
//   const dataPoint = {
//     interval: {
//       endTime: {
//         seconds: Date.now() / 1000,
//       },
//     },
//     value: {
//       // The amount of sales
//       doubleValue: 123.45,
//     },
//   };

//   // Prepares the time series request
//   const request = {
//     name: client.projectPath(projectId),
//     timeSeries: [
//       {
//         // Ties the data point to a custom metric
//         metric: {
//           type: 'uptime_check/http_status GA',
//           labels: {
//             store_id: 'Pittsburgh',
//           },
//         },
//         resource: {
//           type: 'global',
//           labels: {
//             project_id: projectId,
//           },
//         },
//         points: [dataPoint],
//       },
//     ],
//   };

// //   // Writes time series data
//   const [result] = await client.createMetricDescriptor(request);
//   console.log('Done writing time series data.', result);
// }
// quickstart()

// const request = require('request');


// request({
//   url: 'https://content-monitoring.googleapis.com/v3/projects/webmonitorapp/timeSeries:query?alt=json&key=AIzaSyBqZTdCA4bqYfuAr5PkfSJVoAkCR9UV9-A',
//   method: 'POST',
//   json: {"query":"fetch uptime_url| metric 'monitoring.googleapis.com/uptime_check/check_passed'| every 10m"}
// }, function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// Imports the Google Cloud client library
const monitoring = require('@google-cloud/monitoring');

// Creates a client
const client = new monitoring.UptimeCheckServiceClient();

/**
 * TODO(developer): Uncomment and edit the following lines of code.
 */
const projectId = 'webmonitorapp'
const uptimeCheckConfigId = 'collate'

const request = {
  // i.e. name: 'projects/my-project-id/uptimeCheckConfigs/My-Uptime-Check
  name: client.projectUptimeCheckConfigPath(projectId, uptimeCheckConfigId),
};

console.log(`Retrieving ${request.name}`);

const test =async()=>{// Retrieves an uptime check config
const [uptimeCheckConfig] = await client.getUptimeCheckConfig(request);
console.log(`ID: ${uptimeCheckConfig.name}`);
console.log(`Display Name: ${uptimeCheckConfig.displayName}`);
console.log('Resource: %j', uptimeCheckConfig.monitoredResource);
console.log('Period: %j', uptimeCheckConfig.period);
console.log('Timeout: %j', uptimeCheckConfig.timeout);
console.log(`Check type: ${uptimeCheckConfig.check_request_type}`);
console.log(
  'Check: %j',
  uptimeCheckConfig.httpCheck || uptimeCheckConfig.tcpCheck
);
console.log(
  `Content matchers: ${uptimeCheckConfig.contentMatchers
    .map(matcher => matcher.content)
    .join(', ')}`
);
console.log(`Regions: ${uptimeCheckConfig.selectedRegions.join(', ')}`);}
test()