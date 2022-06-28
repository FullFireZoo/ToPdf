/**
 * It fetches a url, and then returns the response as a blob
 * @param url - The url to fetch
 * @param callback - The function to call when the data is returned.
 * @param [options] - 
 */
export function gf(url,callback,options = {}) {
    
    fetch(url, options)
        .then(response => response.blob())
        .then(data => {
            callback(data);
        }
        ).catch(error => {
         
            throw error;
        }
        );

}

/**
 * It fetches a JSON file from a URL and returns the data to a callback function.
 * @param url - The url to fetch
 * @param callback - The function that will be called when the data is returned.
 * @param [options] - 
 */
export function gfj(url,callback,options = {}) {
    
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            callback(data);
        }
        ).catch(error => {
         
            throw error;
        }
        );

}
