import db from './mongoConnect.js'

const funitureDb = db.collection('furnitures')
export const addFurniture = async(req, res) => {
    //add furniture to our mongo db

    // const newFurniture = {type: 'sofa', collection: 'Edgewater', special: false, price: 4899, in_stock: false }
    const newFurnitureAdded = await funitureDb.insertOne(req.body)
    console.log(newFurnitureAdded)

    res.status(201).send(newFurnitureAdded)
}

export const getAll = async (req, res) => {
    try { 
    const allFurniture = await db.collection('furnitures').find().toArray()


    res.status(200).send(allFurniture)
     } catch(error) {
        res.status(404).send(error)
    }
}
