const axios = require ('axios');

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req,res) => {
    try {
        const {id} = req.params
    
        const {data} = await axios  (`${URL}/${id}`)
            if (!data.name) {
            throw Error ("Id not found") 
            } 
            const character = {
                    id: data.id,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender,
                    status: data.status,
                }
            return res.status(200).json(character) // .json se usa para obj de javascript
    } catch (error) {
        return error.message.includes ("Id")
        ?res.status(404).send(error.message) // no es necesario colocar un else ya que el return corta el resultado
        :res.status(500).send(error.message)
    }        
    }


module.exports = {
    getCharById
};