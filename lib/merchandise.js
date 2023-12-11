const fs = require("fs")

const dataDefault = `${process.cwd()}/data/merchandise`
const getData = (typeContentArray) => {
  let couples = []
  fs.readdirSync(dataDefault).forEach(a => {
    const _dl_json = JSON.parse(fs.readFileSync(dataDefault+"/"+a))
    couples.push({
      ..._dl_json,
      price: {
        ..._dl_json.price,
        value_string: new Intl.NumberFormat('en-US', { style: 'currency', currency: _dl_json.price.currency, }).format(_dl_json.price.value)
      }
    })
  })
  couples = couples.sort((a, b) => b.timecreate - a.timecreate)

  if(typeContentArray) {
    return couples
  }

  let toObject = {}
  for(let a of couples) {
    toObject[a.id] = a
  }
  return toObject
}

async function GetAllMercandiseCard(shorts) {
  const data = getData(true)

  if(shorts) {
    return data.slice(0, 9)
  }
  return data
}
async function DetailOfMercandiseCard(id) {
  if(!id) {
    return { error: "A couple times query error !" }
  }
  const data = getData()
  if(!data[id]) {
    return { notFound: true }
  }
  return data[id]
}

module.exports = {
  GetAllMercandiseCard,
  DetailOfMercandiseCard
}