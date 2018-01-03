const brain = require('brain.js')
const data = require('./dataset').data
const getAccuracy = require('./getAccuracy').getAccuracy

const SPLIT = 99
const trainingData = data.slice(0, SPLIT)
const testData = data.slice(SPLIT + 1)

const net = brain.NeuralNetwork({
  activation: 'sigmoid',
  hiddenLayers: [5],
  iterations: 500,
  learningRate: 0.5,
})

net.train(trainingData)

const accuracy = getAccuracy(net, testData)
console.log('accuracy: ' + accuracy)