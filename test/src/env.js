
let baseUrl = '';
const testurl ="http://test.user.famwifi.com"
const testurls ="https://test.user.famwifi.com"
const produrl = "http://user.wifikid.cn"
const produrls = "https://user.wifikid.cn"
if(window.location.protocol=='http:'){
  switch(process.env.NODE_ENV){
    case "development":
        console.log('http-----development')
        baseUrl = "";
      break;
      case 'testing':
        console.log('http-----testing')
        baseUrl = testurl;
      break;
      case 'production':
        console.log('http-----production')
        baseUrl = produrl;
      break;
  }
}else{
  switch(process.env.NODE_ENV){
      case "development":
          console.log('https-----development')
          baseUrl = "";
      break;
      case 'testing':
          console.log('https-----testing')
          baseUrl = testurls;
      break;
      case 'production':
          console.log('https-----production')
          baseUrl = produrls;
      break;
  }
}

export{
    baseUrl,
}