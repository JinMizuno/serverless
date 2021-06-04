const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-northeast-1'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.batchGet({
  RequestItems: {
    'td_nodes_sdk': {
      Keys: [
        {
          user_id: '11',
          timestamp: 11
        }
      ]
    },
    'td_nodes': {
      Keys: [
        {
          user_id: 'bb',
          timestamp: 1
        }
      ]
    }
  }
}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});