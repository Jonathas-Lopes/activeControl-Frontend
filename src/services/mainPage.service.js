
import axios from "axios";
export default {
    logout: async function(address, context) {
        
      await axios.get(address);

      document.cookie = `userCookie =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      context.$emit("logout", {});
    },

    setScreen: function(state, context) {
      context.$data.screen = state
      console.log('teste')
    }
  
};

