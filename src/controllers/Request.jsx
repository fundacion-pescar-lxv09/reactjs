export const Request = async (url,options={}) => {
    try{
        const res = await fetch(url,options)
        const data = await res.json()
        return ({
            status: "OK",
            data,
            error: null
        });
    }
    catch(error){ 
        return ({
            status: "FAIL",
            data: null,
            error
        })
    }
}