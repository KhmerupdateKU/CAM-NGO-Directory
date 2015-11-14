var AppCache = {
  set: function(templateURL, content){
    localStorage.setItem(templateURL, content);
  },
  get:function(templateURL){
    return localStorage.getItem(templateURL);
  },
  clearAll: function () {
    localStorage.clear();    
  }
};