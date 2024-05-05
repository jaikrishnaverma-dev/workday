export async function postReq(apiurl, body, header={}) {
    try {
    let res = await fetch(apiurl, {
    method: "post",
    headers: {
    "Content-Type": "application/json",
    ...header
    },
    body: JSON.stringify(body),
    });
    
    if (res.ok) {
    res = await res.text();
    return {
        message: "",
        success: true,
        data:JSON.parse(res)
    } 
    }
    } catch (er) {
        console.log({er});
    return {
    message: "Something went wrong on client side.",
    success: false,
    };
    }
    }