require('dotenv').config()
const { initializeApp } = require("firebase/app")
const { getFirestore, query, collection, setDoc, getDoc, getDocs, updateDoc, deleteDoc, doc } = require("firebase/firestore/lite")

const initialize = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  appId: process.env.FB_APPID,
  measurementId: process.FB_MEANSUREMENTID
}
const initals = initializeApp(initialize)
const db = getFirestore(initals)

async function GetMemberBeta(ticket) {
  try {
    const data = await getDoc(doc(db, "joinbeta", ticket))
    if(!data.exists()) {
      return {noneData:true}
    }
    const contentSensor = (input = "", timline) => {
      let toText = input.slice(0, timline)
      for(let i in [...Array(input.length - timline - 2)]) {
        toText += '*'
      }
      toText += input.slice(input.length - 1, input.length)
      return toText
    }
    const accepteddata = data.data()
    console.log(accepteddata)
    return {
      data: {
        ...accepteddata,
        contact: {
          email: `${contentSensor(accepteddata.contact.email.split("@")[0], 3)}@${accepteddata.contact.email.split("@")[1]}`,
          phone: contentSensor(accepteddata.contact.phone, 3)
        },
        date_reg: accepteddata.date_reg.toDate(),
        date_acc: accepteddata.date_acc.toDate(),
      }
    }
  } catch(err) {
    console.log("GET MEMBER BETA:", err)
    return {internal:true}
  }
}

module.exports = {
  GetMemberBeta
}
