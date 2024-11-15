import eventModel from "../model/event.model.js";


export const getEvent = async (req, res) =>{
    const Events = await eventModel.find();
    res.json(Events);
}

// export const addEvent = async (req, res) => {
//     try {
//       const previousCountry = await eventModel.findOne({
//         name: req.body.title,
//       });
//       if (previousEvent) {
//         const err = new Error("Event ALREADY EXISTS");
//         err.statusCode = 400;
//         throw err;
//       }r
  
//       const postEvent = await countryModel.create(req.body);
//       res.json(postEvent);
//     } catch (err) {
//       res.status(err?.statusCode || 500).json({ msg: err?.message });
//     }
// }
export const addEvent= async (req, res) =>{
    try{
        const postEvent = await eventModel.create(req.body);
        res.json(postEvent);

    }catch(err){
        res.status(err?.statusCode || 500).json({ msg: err?.message });
    }
}

export const editEvent = async (eq,res) =>{
    try{
const edit= await eventModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { title, date, description } },
    { new: true }
);
if (!edit) {
    const err = new Error("ID NOT FOUND");
    err.statusCode = 400;
    throw err;
  }
    }catch(err){
        res.status(err?.statusCode || 500).json({ msg: err?.message });
    }
}

export const deleteEvent = async (req, res) =>{
    const remove = await eventModel.findOneAndDelete({
_id: req.params.id,
    });
    res.json(remove);
}