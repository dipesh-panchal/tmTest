function alertMsg(msg) {
  alert(msg);
}

function scInit(token) {
  return new window.scDK({
    gateway: "tejimandi",
    smallcaseAuthToken: token,
    config: {
      amo: true,
    },
  });
}

/*
  Starts Smallcase Gateway for Transaction such as :
  - BUY
  - INVESTMORE
*/
async function startInvestment(txID, token, scAuthId) {
  return new Promise(async (resolve, reject) => {
    const gatewayInstance = scInit(token);
    console.log('========> Started Invest');
    try {
      var data = await gatewayInstance
        .triggerTransaction({
          transactionId: txID,
          smallcaseAuthID: scAuthId,
        });
      console.log("Resolved => ", data);
      resolve(data);
    } catch (e) {
      console.log("Rejected => ", e.message);
      reject(e.message);
    }
  });
}


/*
  Starts Smallcase Gateway for Broker Login / Link.
*/
function linkBroker(txID, token) {
  return new Promise(async (resolve, reject) => {
    const gatewayInstance = scInit(token);
    console.log('========> Started Link Broker');
    try {
      var data = await gatewayInstance
        .triggerTransaction({
          transactionId: txID,
          brokers: ["motilal-leprechaun"],
        });
      console.log("Resolved => ", data);
      resolve(data);
    } catch (e) {
      console.log("Rejected => ", e.message);
      reject(e.message);
    }
  });
}
