import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer kJ_w7YnUHF6_R5QnKs9FjatPypZCPhoYmQZVwzp-xeCkkbvDbsk9PnL1T3sy579ikZR0NSL9rdFAxgiDiD_les6YzksH1R8Oj4bT5x3SCIcLoqXJr1yknZlVCVrFY3Yx",
  },
});
