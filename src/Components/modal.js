import "../App.css";
import citiesData from "../cities.json";
export const Modal = ({
  onRequestClose,
  isOpen,
  onSubmit,
  handleInputChange,
  formData
}) => {
  if (isOpen) {
    return (
      <div className="Overlay">
        <div className="Modal">
          <form className="form" onSubmit={onSubmit}>
            <div>
              <p>City</p>
              <select
                defaultValue={formData.city}
                name="city"
                onChange={handleInputChange}
              >
               {citiesData.map((city) => (
                  <option key={city.city} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </select>
            </div>
            <p>Start date</p>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />

            <p>End Date</p>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />
            <div className="formButtons">
              <button type="submit">Submit</button>
              <button type="button" onClick={onRequestClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
// export const Modal = ({
//   onRequestClose,
//   isOpen,
//   setCity,
//   setStartDate,
//   setEndDate,
//   onSubmit,
// }) => {
//   // const [selectedCity, setSelectedCity] = useState("");
//   if (isOpen) {
//     return (
//       <div className="Overlay">
//         <div className="Modal">
//           <form className="form" onSubmit={onSubmit}>
//             <div>
//               <p>City</p>
//               <select
//                 defaultValue={"Kyiv"}
//                 type="text"
//                 placeholder="City"
//                 onSelect={(e) => setCity(e.target.value)}
//               >
//                 {citiesData.map((city) => (
//                   <option key={city.city} value={city.city}>
//                     {city.city}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <p>Start date</p>
//             <input
//               type="date"
//               placeholder="Start Date"
//               onChange={(e) => setStartDate(e.target.value)}
//             />

//             <p>End Date</p>
//             <input
//               type="date"
//               placeholder="End Date"
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//             <div className="formButtons">
//               <button type="submit">Submit</button>
//               <button type="button" onClick={onRequestClose}>
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// };
