const request = require('request')

const jar = request.jar()

const _headers = { 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
}

const _request = request.defaults({
    headers: _headers, 
    jar: jar
})

/**
 * Process GET
 *      
 *      await request.process("https://www.website.com");
 * 
 * Process POST
 * 
 *      await request.process(
 *          "https://www.website.com/action",
 *          "user=1&save=1"
 *      );
 */
module.exports = function(url, data = null) {
    return new Promise((resolver, reject) => {
        _request(options(url, data), (error, response) => {
            
            if(error == null){
                resolver(response)
            } else {
                reject(error)
            }
        })
    });
}

function options(url, body = null){
    const options = {}

    options.uri = url
    
    if(body){
        options.body = body;
        options.method = 'POST'
    } else {
        options.method = 'GET'
    }

    return options
}