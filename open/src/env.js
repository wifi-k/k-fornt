let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
  console.log('development')
    // baseUrl = "http://test.open.famwifi.com/";
}else if(process.env.NODE_ENV == 'testing'){
    console.log('testing')
    baseUrl = "http://test.open.famwifi.com";
}else if(process.env.NODE_ENV == 'production'){
    console.log('production')
    baseUrl = "http://open.wifikid.cn";
}
export{
    baseUrl,
}