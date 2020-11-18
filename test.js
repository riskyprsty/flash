const request = require("request");
// value valuenya tinggal nyesuain bro


const options = {
	    url: 'https://shopee.co.id/api/v2/cart/add_to_cart',
	    headers: {
	    'Accept': 'application/json',
	    'Accept-Encoding': 'gzip, deflate, br',
	    'Accept-Language': 'en-US,en;q=0.5',
	    'Connection': 'keep-alive',
	    'Content-Length': '194',
      'Content-Type': 'application/json',
	     'Cookie': '_gcl_au=1.1.1590337841.1605682731; _fbp=fb.2.1605682738854.1247844686; _ga_SW6D8G0HXK=GS1.1.1605682739.1.1.1605683747.0; _ga=GA1.1.1108626981.1605682741; SPC_R_T_ID="B2UWZ+W/kaVWoh+uFGJaV81t3Ro6xyvG5hMOur4VZh8vsZl1cIoN2paDT7Nnbjr/Yr/w4E3LtuCXDJhPSwqQPh6v3yYkhrDe8+JQ/ds9tr4="; SPC_IA=-1; SPC_EC=6A/c+Se73iot+DbJU5jSP5fIhz1NWr+wH7HMx/80/18R841HknGwv0/ED1QR2j9A8QIsVmpY8oRJWMdtnWlylo1THRvBEaKX/ww21I/4uK7d9yxqpi0QxlUoGVDa2vGed+GjPuTRv6mamJ3ybPEXRQ/N8/dgDlwJS2hHaAlQxrY=; SPC_F=l0haZAFQIGQdtEkGNzG6DuIa4OQMMcJg; REC_T_ID=89fac78c-296b-11eb-aac3-f063f9df72ad; SPC_T_ID="B2UWZ+W/kaVWoh+uFGJaV81t3Ro6xyvG5hMOur4VZh8vsZl1cIoN2paDT7Nnbjr/Yr/w4E3LtuCXDJhPSwqQPh6v3yYkhrDe8+JQ/ds9tr4="; SPC_SI=mall.jZehDQOi464n6KfTzvaeD39RyaePbZyX; SPC_R_T_IV="WXtr4lk7wImjmuQfTzsEqA=="; SPC_U=338302475; SPC_T_IV="WXtr4lk7wImjmuQfTzsEqA=="; csrftoken=9R8bHvmPkAdm7cth55oPaPnrjaDONenZ; welcomePkgShown=true; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.3.1382886178.1605682776; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; SPC_CLIENTID=bDBoYVpBRlFJR1Fklqsaghswuphoocmx; _med=refer; SPC_CT_9c862342="1605683007.uElSM2pdN19+lzSMS8EdVFQWdeMoSgGCJugvzIN9Yxc="; cto_bundle=8yoGyV9TV2Rid1RKRjE4TVJZb1hnSEpqd1p6M0wyU0hLb0tzTyUyRnpwd0tPSDdhNUd2ZlFHU29Pd0pqa21IWFRBcE9meiUyQklCUktYNXpCJTJCJTJGS1hRSkxTdVkwR2tnYncyQyUyRmhZR0pMbmpGclczQTdXUiUyRmQ0MUVBUTJZeURBYUtvQkxzcTI4ag',
	    'Host': 'shopee.co.id',
	    'Origin': 'https://shopee.co.id',
	    'Referer': 'https://shopee.co.id/LENOVO-Thinkpad-CORE-i5-Ram-8GB-2TB-1TB-500GB-SSD-256GB-512GB-14-DVD-Laptop-Bekas-Second-i5-8GB-i.20507921.527739464',
	    'TE': 'Trailers',
	    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux aarch64; rv:82.0) Gecko/20100101 Firefox/82.0',
	    'If-None-Match-': '55b03-bb87ae1f9db48294cc94c930c27c7db0',
	    'X-API-SOURCE': 'pc',
	    'X-CSRFToken': '9R8bHvmPkAdm7cth55oPaPnrjaDONenZ',
	    'X-Requested-With': 'XMLHttpRequest',
	    'X-Shopee-Language': 'id'
	  },
	  json: true,
	    body:
		{
	"checkout": true,
	"client_source": 1,
	"donot_add_quantity": false,
	"itemid": 527739464,
	"modelid": 60312589829,
	"quantity": 1,
	"shopid": 20507921,
	"source": "{\"refer_urls\":[]}",
	"update_checkout_only": false
}
	};

	request.post(options, (err, res, body) => {
	    if (err) {
		return console.log(err);
	    }
	    console.log(body);
		});
		
