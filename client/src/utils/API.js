import axios from "axios";
const BASEURL = "http://openlibrary.org/search.json?q=the+lord+of+the+rings";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  }
};
