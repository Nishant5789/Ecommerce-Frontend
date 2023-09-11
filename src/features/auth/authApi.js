export function createUser(userData) {
    console.log(userData);
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        resolve({ data });
    });
}

export function checkUser(loginInfo) {
    return new Promise(async (resolve, reject) => {
        // const email = loginInfo.email;
        // const password = loginInfo.password;
    try{
        const response = await fetch('http://localhost:8080/auth/check', {
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
            const data = await response.json();
            resolve({ data });
          } else {
            const error = await response.text();
            // console.log("call",JSON.parse(error).message);
            reject(JSON.parse(error).message);
        }
    } catch (error) {
          reject( error );
        }
    

        // if (data.length) {
        //     if (password === data[0].password)
        //         resolve({ data: data[0] });
        //     else
        //         reject({ message: 'wrong credentials' });
        // } else {
        //     reject({ message: 'user not found' });
        // }
    })
}
