import { useState, useEffect } from "react";

const Userdata = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("https://reqres.in/api/users?page=1")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);

// console.log(data['data'][0]['email']);

/* setData(data['data']);

 */

/* console.log(data['data']); */
  
    return (
      <>
      <section>
        <div className="container">
            <div className="row">

            {data &&
        data['data'].map((item) => {
          return <div className="col-lg-4">

          <div className="cc">
            <img src={item.avatar} />
            <div>Name : {item.first_name} {item.last_name}</div>            
            <div>Email: {item.email}</div>
          </div>

          </div>;
        })}
                
            </div>
        </div>
      </section>
      
      </>
    );
}

export default Userdata