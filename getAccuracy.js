const getAccuracy = function(net, testData) {
  let correct = 0;
  testData.forEach((datapoint) => {
    const output = net.run(datapoint.input);
    const outputArray = [Math.round(output[0]), Math.round(output[1]), Math.round(output[2])];
    if (outputArray[0] === datapoint.output[0] && outputArray[1] === datapoint.output[1] && outputArray[2] === datapoint.output[2]) {
      correct += 1;
    }
  });

  // total average accuracy from test data
  return correct / testData.length;  
}