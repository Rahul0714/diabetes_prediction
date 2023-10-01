import React, { useState } from "react";
const Container = () => {
  const [value, setValue] = useState("Male");
  const [noOfPreg, setNoOfPreg] = useState(0);
  const [glucose, setGlucose] = useState(0);
  const [bloodPressure, setBloodPressure] = useState(0);
  const [insuline, setInsuline] = useState(0);
  const [skinThickness, setSkinThickness] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [dpf, setDPF] = useState(0);
  const [age, setAge] = useState(0);
  const [isDiabetes, setIsDiabetes] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    console.log(value);
    console.log(noOfPreg);
    console.log(glucose);
    console.log(bloodPressure);
    console.log(insuline);
    console.log(skinThickness);
    console.log(bmi);
    console.log(dpf);
    console.log(age);

    const params = {
      noOfPreg,
      glucose,
      bloodPressure,
      skinThickness,
      insuline,
      bmi,
      dpf,
      age,
    };

    const res = await fetch("http://127.0.0.1:8080/prediction/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const json = await res.json();
    console.log(json.data["interpretation"]);
    setIsDiabetes(json.data["interpretation"]);
  }

  return (
    <div className="w-full font-mono bg-[#C6E2ED] h-screen overflow-hidden">
      <div className="p-2 text-center font-bold text-4xl text-slate-800">
        Diabetes Prediction
      </div>
      <div className="flex flex-row  w-full">
        <div className="flex flex-col w-1/2 p-10">
          <form className="flex flex-col">
            <select
              name="Gender"
              id="Gender"
              className="text-xl font-bold text-black p-2 bg-[#C6E2ED] outline-none border border-black rounded-md"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <optgroup label="Select Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </optgroup>
            </select>
            {value === "Female" && (
              <div className=" mt-2 font-bold text-xl flex justify-between items-center">
                <div>Enter Number of Pregnencies:</div>
                <input
                  className=" p-1 outline-none rounded-md bg-[#C6E2ED] border border-black"
                  type="number"
                  onChange={(e) => setNoOfPreg(e.target.value)}
                  value={noOfPreg}
                />
              </div>
            )}
            <div className=" mt-2 font-bold text-xl flex justify-between items-center">
              <div>Enter Number of Glucose:</div>
              <input
                className=" p-1 outline-none rounded-md bg-[#C6E2ED] border border-black"
                type="number"
                onChange={(e) => setGlucose(e.target.value)}
                value={glucose}
              />
            </div>
            <div className=" mt-2 font-bold text-xl flex justify-between items-center">
              Enter Number of Blood Pressure:
              <input
                className=" p-1 outline-none rounded-md bg-[#C6E2ED] border border-black"
                type="number"
                onChange={(e) => setBloodPressure(e.target.value)}
                value={bloodPressure}
              />
            </div>
            <div className=" mt-2 font-bold text-xl flex justify-between items-center">
              Enter Number of Insuline:
              <input
                className=" p-1 outline-none rounded-md bg-[#C6E2ED] border border-black"
                type="number"
                onChange={(e) => setInsuline(e.target.value)}
                value={insuline}
              />
            </div>
            <div className=" mt-2 font-bold text-xl flex justify-between items-center">
              Enter Number of Skin Thickness:
              <input
                className=" p-1 outline-none rounded-md bg-[#C6E2ED] border border-black"
                type="number"
                onChange={(e) => setSkinThickness(e.target.value)}
                value={skinThickness}
              />
            </div>
            <div className=" mt-2 font-bold text-xl flex justify-between items-center">
              Enter Number of BMI:
              <input
                className=" p-1 outline-none rounded-md bg-[#C6E2ED] border border-black"
                type="number"
                onChange={(e) => setBMI(e.target.value)}
                value={bmi}
              />
            </div>
            <div className=" mt-2 font-bold text-xl flex justify-between items-center">
              Enter Number of Diabetes Pedigree Function:
              <input
                className=" p-1 outline-none rounded-md bg-[#C6E2ED] border border-black"
                type="number"
                onChange={(e) => setDPF(e.target.value)}
                value={dpf}
              />
            </div>
            <div className=" mt-2 font-bold text-xl flex justify-between items-center">
              Enter Number of Age:
              <input
                className=" p-1 outline-none rounded-md bg-[#C6E2ED] border border-black"
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </div>
          </form>
          <button
            type="submit"
            className=" mt-2 border border-black p-2 rounded-md font-bold text-xl hover:bg-slate-500  hover:text-white"
            onClick={submitHandler}
          >
            Submit
          </button>
          <div className="font-bold text-3xl text-center mt-2">
            {isDiabetes}
          </div>
        </div>
        <div className="w-1/2 h-28">
          <img src="doctor.jpg" alt="Doctor" className="h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Container;
