const catchAsync = require('../utils/catchAsync');
const { covidService } = require('../services');


const top = catchAsync(async (req, res) => {
    const countries = await covidService.analyseTopTen(req);
    res.status(200).send({
      error: !!countries ? false : true,
      message: !!countries ? 'Success' : 'Error',
      data: { countries },
    });
});

const ratio = catchAsync(async (req, res) => {
  const percentage = await covidService.ratio(req);
  res.status(200).send({
    error: !!percentage ? false : true,
    message: !!percentage ? 'Success' : 'Error',
    data: { percentage },
  });
});

const trend = catchAsync(async (req, res) => {
  const trend = await covidService.trend(req);
  res.status(200).send({
    error: !!trend ? false : true,
    message: !!trend ? 'Success' : 'Error',
    data: { trend },
  });
});

module.exports = {
  top,
  ratio,
  trend,
};
