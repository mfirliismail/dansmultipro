const axios = require("axios");

module.exports = {
  getJobList: async (req, res) => {
    try {
      console.log(req.query);
      let url = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";
      if (req.query) {
        console.log(req.query);
        url = url + "?";
        if (req.query.page) {
          url = url + "page=" + req.query.page + "&";
          +"&";
        }
        if (req.query.location) {
          url = url + "location=" + req.query.location + "&";
        }
        if (req.query.description) {
          url = url + "description=" + req.query.description + "&";
        }
      }
      console.log(url);
      const fetchJob = await axios.get(url);
      //   console.log(fetchJob);
      let returnData = fetchJob;
      //   console.log(returnData);
      return res.status(200).json({
        status: "success",
        data: returnData.data,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
      });
    }
  },
  getDetailJob: async (req, res) => {
    try {
      const { id } = req.params;
      const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;
      const fetchJob = await axios.get(url);

      return res.status(200).json({
        status: "success",
        message: "success get detail job",
        data: fetchJob.data,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
      });
    }
  },
};
