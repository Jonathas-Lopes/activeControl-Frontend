export default {
  getToken: function(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  getUser: function (token) {
    if(token){return(JSON.parse(atob(token.split(".")[1])))}
    return(false)
    
    
    
  },
  newCookie: function(cookieName, hoursToExpire, data){
    let expire = new Date();
    expire.setTime(expire.getTime() + hoursToExpire * 60 * 60 * 1000);
    document.cookie = `userCookie = ${data}; expires = ${expire.toUTCString}`;
    console.log(document.cookie);

  }
};
