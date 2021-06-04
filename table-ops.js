const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-northeast-1'});

const dynamodb = new AWS.DynamoDB();

// dynamodb.listTables({}, (err, data) => {
//   if (err) console.log(err); // an error occurred
//   else     console.log(data);           // successful response
// });

// dynamodb.describeTable({
//   TableName: 'td_nodes_sdk'
// }, function(err, data) {
//   if (err) console.log(err); // an error occurred
//   else     console.log(JSON.stringify(data, null, 2));           // successful response
// });

// let params = {
//   AttributeDefinitions: [ /* required */
//     {
//       AttributeName: 'user_id', /* required */
//       AttributeType: "S" /* required */
//     },
//     {
//       AttributeName: 'timestamp', /* required */
//       AttributeType: "N" /* required */
//     },
//   ],
//   KeySchema: [ /* required */
//     {
//       AttributeName: 'user_id', /* required */
//       KeyType: "HASH" /* required */
//     },
//     {
//       AttributeName: 'timestamp', /* required */
//       KeyType: "RANGE" /* required */
//     },
//   ],
//   TableName: 'td_nodes_sdk', /* required */
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 1, /* required */
//     WriteCapacityUnits: 1 /* required */
//   },
// };


dynamodb.deleteTable({
  TableName: "td_nodes_sdk"
}, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(JSON.stringify(data, null, 2));           // successful response
});
