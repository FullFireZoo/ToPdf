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