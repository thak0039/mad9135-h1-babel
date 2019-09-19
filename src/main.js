
document.addEventListener("DOMContentLoaded", () => {
  

     document.getElementById('btnuser').addEventListener('click',getplaceholder);    
    
  });
  // async function with await and fetch
  async function getplaceholder(){
       let p = document.getElementById('userid').value;
          let data = await fetch('https://jsonplaceholder.typicode.com/users')
          let data2 = await data.json()
          document.getElementById('vel').innerHTML=`
             <ul>
            <li>id:${data2[0].id}</li>
            <li>name:${data2[0].name}</li>
            <li>email:${data2[0].email}</li>
        </ul>
            `
   // object assignment destructuring
            let arr = [data2[0].id, data2[0].name]

          let [personId, name] = arr;
          let ans = " ID = " + personId + " Name = "+ name
          document.getElementById("desstruc").innerHTML = ans
//es6 method shorthand in objects
          var myObject = {
            userFirstName: 'Pinki',
            userLastName: 'Thakor',
            output() {
              let printy = document.getElementById('printShortObj')

              printy.innerHTML = this.userFirstName + ' ' + this.userLastName;
            }
          };
         
          myObject.output();



     }
  