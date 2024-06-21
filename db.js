const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://spoukdevelop:bCHUqW6v9khOw2Z5@cluster0.pyxgy2v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function createNewUser() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("testdb"); // Назва вашої бази даних
    const collection = database.collection("users"); // Назва вашої колекції

    // Отримання кількості користувачів у колекції
    const count = await collection.countDocuments();
    
    // Створення нового користувача з пустими полями
    const newUser = {
      _id: new ObjectId(),
      Id: `User${count + 1}`,
      Balance: "",
      Mining: "",
      TapFarm: "",
    };

    // Вставка нового користувача у колекцію
    const result = await collection.insertOne(newUser);
    console.log(`New user ${newUser.Id} created with _id: ${result.insertedId}`);

  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await client.close();
  }
}

// Інтервал для створення нового користувача кожні 3 секунди
setInterval(createNewUser, 3000);
