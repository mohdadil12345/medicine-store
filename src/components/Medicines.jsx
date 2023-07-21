import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
// import data from "../db.json";

function Medicines() {
  let [data, setdata] = useState([]);
  let [globaldata, setglobaldata] = useState([]);
  let [loading, setloading] = useState(false);

  const fetchdata = async () => {
    setloading(true);
    try {
      let res = await fetch(`https://semi-mock2.onrender.com/medicines`);
      let data = await res.json();
      console.log(data);
      setdata(data);
      setloading(false);
      setglobaldata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  //  filter by category
  const fil_data = (e) => {
    //  console.log(e.target.value);

    if (e.target.value == "") {
      setdata(data);
    } else {
      const filterrr = globaldata.filter(
        (item) => item.category == e.target.value
      );
      setdata(filterrr);
    }
  };

  // search by name
  const serchfilter = (e) => {
    console.log(e.target.value);

    let filter_search = globaldata.filter((ele) =>
      ele.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setdata(filter_search);
  };

  // goto detailspage
  const navig = useNavigate();
  const GotoDetails = (item) => {
    // console.log(item.id);
    console.log(item);
    navig(`/medicine/${item.id}`);
  };

  return (
    <div className="medicine_page">
      <div className="medicine_filter">
        <h4>FILTER</h4>
        <select class="form-select my-2" aria-label="Default select example"
           onChange={(e) => fil_data(e)}>
          <option value="">Filter By Category</option>
          <option value="tablet">tablet</option>
          <option value="syrup">syrup</option>
          <option value="injection">injection</option>
          <option value="cream">cream</option>
          
        </select>

        <input
          type="text"
          placeholder="Search"
          onChange={(e) => serchfilter(e)}
          className='bdr4 btn btn-light'
          style={{width: "100%"}}
        />
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="medicine">
          {data.map((item) => (
            <div key={item.id} className="medi_details">
              <img src={item.img1} alt="" />
              <h2>{item.name}</h2>
              <div className="flex-box ">
                <p>{item.price}</p>
                <p>{item.discount}</p>
              </div>
              <button className="btn btn-dark" onClick={() => GotoDetails(item)}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Medicines;




// old Ui


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Loading from "./Loading";
// // import data from "../db.json";

// function Medicines() {
//   let [data, setdata] = useState([]);
//   let [globaldata, setglobaldata] = useState([]);
//   let [loading, setloading] = useState(false);

//   const fetchdata = async () => {
//     setloading(true);
//     try {
//       let res = await fetch(`https://semi-mock2.onrender.com/medicines`);
//       let data = await res.json();
//       console.log(data);
//       setdata(data);
//       setloading(false);
//       setglobaldata(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   //  filter by category
//   const fil_data = (e) => {
//     //  console.log(e.target.value);

//     if (e.target.value == "") {
//       setdata(data);
//     } else {
//       const filterrr = globaldata.filter(
//         (item) => item.category == e.target.value
//       );
//       setdata(filterrr);
//     }
//   };

//   // search by name
//   const serchfilter = (e) => {
//     console.log(e.target.value);

//     let filter_search = globaldata.filter((ele) =>
//       ele.name.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setdata(filter_search);
//   };

//   // goto detailspage
//   const navig = useNavigate();
//   const GotoDetails = (item) => {
//     // console.log(item.id);
//     console.log(item);
//     navig(`/medicine/${item.id}`);
//   };

//   return (
//     <div className="medicine_page">
//       <div className="medicine_filter">
//         <h4>FILTER</h4>
//         <select onChange={(e) => fil_data(e)}>
//           <option value="">Filter By Category</option>
//           <option value="tablet">tablet</option>
//           <option value="syrup">syrup</option>
//           <option value="injection">injection</option>
//           <option value="cream">cream</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Search"
//           onChange={(e) => serchfilter(e)}
//         />
//       </div>

//       {loading ? (
//         <Loading />
//       ) : (
//         <div className="medicine">
//           {data.map((item) => (
//             <div key={item.id} className="medi_details">
//               <img src={item.img1} alt="" />
//               <h2>{item.name}</h2>
//               <div className="flex-box ">
//                 <p>{item.price}</p>
//                 <p>{item.discount}</p>
//               </div>
//               <button className="btn btn-dark" onClick={() => GotoDetails(item)}>
//                 Buy Now
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Medicines;
