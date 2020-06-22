class Formatter {
  static  capitalize(str){
     returns str.replace(/^\w/, (c) => c.toUpperCase());

  }
  static sanitize (str){
      newStr=str.split();
      newStr.filter((str)=>{
        if(str.match(/^[A-Za-z-'--]+$/))
      })
  }
}
