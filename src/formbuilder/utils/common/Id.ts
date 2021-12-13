export const id = {
    make: (length: number = 6) =>  {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for (var i = 0; i < length; i++ ) 
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        
        return result;
    }
}