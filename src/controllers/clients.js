const Client = require('../models/clients');
const Car = require('../models/cars');
module.exports = {
   index: async (req, res, next) => {
       const clients = await Client.find({});
       res.status(200).json(clients);

   },
   newClient: async (req, res, next) => {
       const newclient = new Client(req.body);
       const client = await newclient.save();
       res.status(200).json(client);
   },
    getClient: async (req, res, next) => {
     const {clientId} = req.params;
     const client = await Client.findById(clientId);
     res.status(200).json(client);
    },
    replaceClient: async (req, res, next) => {
       const { clientId } = req.params;
       const newClient = req.body;
       const  oldClient = await Client.findByIdAndUpdate(clientId, newClient);
        res.status(200).json({success: true});
   },
    updateClient: async(req, res, next) => {
        // req.body may contain any number of fields
        const {clientId} = req.params;
        const newClient = req.body;
        // returns before user to update
        const  result = await Client.findByIdAndUpdate(clientId, newClient);
        res.status(200).json({success: true});
    },
    deleteClient: async (req, res, next) => {
        const {clientId} = req.params;
        const newClient = req.body;
        await Client.findByIdAndRemove(clientId);
        res.status(200).json({success: true});
    },
    getClientsCars: async (req, res, next) => {
       const {clientId} = req.params;
       const client = await Client.findById(clientId).populate('car');
       res.status(200).json(client);
    },
    newClientCar: async(req, res, next) => {
       const {clientId} = req.params;
       //create new client car
       const newCar = new Car(req.body);
       //get client
       const client = await Client.findById(clientId);
       //asig client as car
       newCar.seller = client;
       //save car
       await  newCar.save();
       //add car to client seller selling array car
       client.car.push(newCar);
       //save client
       await client.save();
       res.status(201).json(newCar);
    }
};