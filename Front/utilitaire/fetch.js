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