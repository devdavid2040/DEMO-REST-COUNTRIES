'use strict';

const axios = require("axios");
var express = require('express');
var router = express.Router();
const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize');
    

const dataAPICountry=async()=>{
  try{  
    const url ="https://restcountries.com/v2/all";
        
        const countriesUrl = await axios(url)
        const response=countriesUrl.data.map(attr => {
        return{
            code: attr.alpha3Code,
            name: attr.name,
            flag: attr.flag,
            population: attr.population,
            region: attr.region, 
            };
    }
        )
       return response
  }
    catch(error){console.log(error)}
  }

    
    router.get("/countries", async function (req, res) {
        
        const apiCountry=await dataAPICountry();
        try{
            let existListCountry=await Country.findAll();
            if(!existListCountry.length) await Country.bulkCreate(apiCountry);
        }
        catch(error){
            console.log(error)
        }
    
        if(req.query.name){
            try{
                let char=await Country.findAll({
                    where:{
                        name:{
                            [Op.iLike]:'%'+req.query.name+'%'
                        }
                    }
                })
                return res.json(char);
            }
            catch(error){
                console.log(error)
            }
        } 
        else{
            try {
                let country=await Country.findAll()   
                return res.json(country);
            } catch (error) {
                console.log(error)
            }
        }
    
    })


    router.get('/countries/:idCountry', async (req, res) => {
      try {
        const response = await axios.get(`https://restcountries.com/v2/alpha/${req.params.idCountry}`)

        const dataDetail={ area: response.data.area,
                          capital: response.data.capital,
                          subregion: response.data.subregion}


        const country= await Country.findOne({ where: { code: req.params.idCountry.toUpperCase() }, include: [{
          model: Activity,
          through: { attributes: [] }
        }] });

        if(country) 
        return res.json({...country.dataValues, ...dataDetail})
        }
        catch(error){
          console.log(error)
        } 
    
    }
  )

  router.post("/activity", async (req, res)=>{
    const activity=req.body
 try { 
         let [act]=await Activity.findOrCreate({
             where:{
                 difficulty:activity.difficulty,
                 duration:activity.duration,
                 name:activity.name,
                 season:activity.season
             }
         })

 await act.setCountries(activity.countryid)
         return res.json(act);
 
     } catch (error) {
         console.log(error);
     }
 })





module.exports = router;