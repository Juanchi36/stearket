'use strict'

//var mongoose = require('mongoose');
//var Search = require('../models/Search');
const axios = require('axios')

module.exports.getG2a = function getG2a(req, res, next) {
  
// // try {
// //     let res = await axios.get(https:'//www.g2a.com/lucene/search/filter?&search=monster')
// //   } catch (error) {
// //     console.error(error)
// //   }

// //   res.send({msg:'res'})
// axios({
//     url: '//www.g2a.com/lucene/search/filter?&search=monster',
//     method: 'get',
    
//   }).then((res=>{
//       console.log(res.data)
//   }))
//   const axios = require('axios')

const getBreeds = () => {
  try {
    return axios.get('https://www.g2a.com/lucene/search/filter?&search=Stick+Fight:+The+Game+Global')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = getBreeds()
    .then(res => {
    //   if (response.data.message) {
    //     console.log(
    //       `Got ${Object.entries(response.data.message).length} breeds`
    //     )
    //   }
    console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
}

countBreeds()
};