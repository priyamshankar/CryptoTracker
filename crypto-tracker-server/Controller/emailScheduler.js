
const email = require("../Controller/emailController");

const axios = require("axios");
const cron = require('node-cron');

const userDetail = require("../Model/userSchema");
const alertSh = require("../Model/alertSchema");

var allData;

async function fetchAllData(){
    try{
        allData = await alertSh.find({});
        alertLogic();
        // console.log(allData[0]);
    }catch(e){
        console.log(e);
    }
}

async function alertLogic(){
    allData.forEach(async(alertData)=>{
        
        const coinPriceData = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${alertData.coinId}&vs_currencies=INR`);
        const coinPrice = coinPriceData.data;
        const coinPriceInr = coinPrice[alertData.coinId].inr;
        if(coinPriceInr<alertData.min || coinPriceInr>alertData.max){
            const user = await userDetail.findOne({_id:alertData.userId});
            user.notif = user.notif.concat({coin:alertData.coinId,price:coinPriceInr})
            await user.save();
            if(alertData.notify){
                email(user.email,"hello","hwllo");
            }
                await alertSh.deleteOne(alertData._id);
            }
        console.log(alertData._id);
    }) 
}


cron.schedule('* */5 * * * *',()=>{
    fetchAllData();
    console.log("inside cron");
})