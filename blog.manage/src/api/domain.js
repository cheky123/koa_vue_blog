'use strict';
/*!
 * domain.js v1.0.0
 * 域名配置类,分成测试和上线两种情况
 * 可以在properties.js里面进行配置，这里进行读取
 * 这些url最后不要带/，不然跟api拼接时会多
 */
const BASE_URL = 'http://localhost:8081';
export const ARTICLEAPI = BASE_URL + '/article/';
export const UPLOAD = 'http://www.shikedian.com:5555/';
export const IMGURL = BASE_URL;