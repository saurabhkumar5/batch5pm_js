

// https://jsonplaceholder.typicode.com/users

       fetch('https://jsonplaceholder.typicode.com/users')
       .then((data)=>{
             return data.json()
       })
       .then((value)=>{
        value.map((a)=>{
            console.log(a.name,a.email)
        })
       })