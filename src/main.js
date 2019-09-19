
document.addEventListener("DOMContentLoaded", () => {
  

     document.getElementById('btnuser').addEventListener('click',getplaceholder);    
    
  });
  
  async function getplaceholder(){
       let p = document.getElementById('userid').value;
       console.log(p);

          let data = await fetch('https://jsonplaceholder.typicode.com/users')
          let data2 = await data.json()
          document.getElementById('vel').innerHTML=`
            <ul>
            <li>id:${data2[0].id}</li>
            <li>name:${data2[0].name}</li>
            <li>email:${data2[0].email}</li>
        </ul>
            `
        
    
        
     }