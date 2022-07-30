const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: '/images/smoothies.jpg'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {type: Number},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]

})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`}

module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
//     name: 'FRIEND OR PHO',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian, Vegan',
//     pic: '/images/veganpho.jpeg'
// }, {
//     name: 'Taco Tuesday',
//     city: 'Los Angeles',
//     state: 'CA',
//     cuisines: 'Vegan, Tacos, Mexican Cuisine, Desserts',
//     pic: '/images/cenavegan.jpeg'
// }]
