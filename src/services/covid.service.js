const axios = require('axios');

const analyseTopTen = async (req)=>{

    const reqUrl = `https://covid19-api.com/report/country/all?date=${req.params.daterange}&date-format=YYYY-MM-DD&format=json`;

    try {
        const response = await axios.get(reqUrl);
        const flatData = response.data.map(country=>{
            return {
                country: country.country,
                stats: reduceArrayDataToSingleObject(country.provinces),
                date: country.date
            }
        });
        const stat = req.params.stat;
        return flatData.sort((a, b) => (b.stats[stat] > a.stats[stat]) ? 1 : -1).slice(0, 10);
    } catch (error) {
        console.error(error);
        return false;
    }

}


ratio = async(req)=>{
    const reqUrl = `https://covid19-api.com/report/country/name?name=${req.params.country}&date=${req.params.daterange}&date-format=YYYY-MM-DD&format=json`;

    try {
        const response = await axios.get(reqUrl);
        const {confirmed, recovered, deaths}  = reduceArrayDataToSingleObject(response.data[0].provinces);
        const recoveryPercent = (recovered/confirmed) * 100;
        const deathPercent = (deaths/confirmed) * 100;
        return {recoveryPercent, deathPercent};
    } catch (error) {
        console.error(error);
        return false;
    }

}



reduceArrayDataToSingleObject = (arr)=>{
    return arr.reduce((total,individual)=>{
        return {
            confirmed: total.confirmed + individual.confirmed,
            recovered: total.recovered + individual.recovered,
            deaths: total.deaths + individual.deaths,
            active: total.active + individual.active
        }
    })
}



module.exports = {
    analyseTopTen,
    ratio,
    trend,
};
