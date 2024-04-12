
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://thai:20521890@cluster0.5inygvs.mongodb.net/userInfo?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getUserById(id) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const collection = client.db("userInfo").collection("userInfos");
    const filter = { userID: id}; // Thay đổi "id" với ID lấy từ API
    const document = await collection.findOne(filter);
    
    // Trả về kết quả
    return document;
  } catch (error) {
    console.error(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports = getUserById;