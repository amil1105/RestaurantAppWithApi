import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 5NvEA2euAfIyz-xuXa4KnZs7_wT5V7tMN6UZB52EfBzd3rKbfDyvPaBnCStWunNtOT9M_J69fYT8lgQFel0p8CyRUrGEukyhvpMftYhnZPS0oS1bpQ4xn-hG_RvTZXYx',
  },
});
