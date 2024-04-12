import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../../DataProvider";
import "../Result/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarLoader, BeatLoader, BounceLoader } from 'react-spinners'; 


const Result = () => {
  const { data,loading } = useContext(DataContext);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (data) {
      setResult({
        ...data,
        imagePathFront: `data:image/png;base64,${data.imagePathFront}`,
        imagePathBack: `data:image/png;base64,${data.imagePathBack}`,
      });
    }
  }, [data]); // Dependency array ensures effect runs only when `data` changes

  return (
    <div className="result d-flex">
    {loading ? (
      <div className="loader">
        <BarLoader color={'#00BFFF'} size={80} /> {/* Customize color and size */}
      </div>
    ) : (
      data && data.userID ? (
        <Fragment>
          <div className="info col-xl-6 col-md-6 col-12">
            <p className="p"><b>ID: </b> {result.userID}</p>
            <p className="p"><b>Họ và tên: </b> {result.fullName}</p>
            <p className="p"><b>Ngày sinh: </b> {result.dob}</p>
            <p className="p"><b>Ngày hết hạn: </b> {result.doe}</p>
          </div>
          <div className="id-card col-xl-6 col-md-6 col-12">
            <p><b>Mặt trước: </b></p>
            <img src={result.imagePathFront} alt="Mặt trước CCCD" />
            <p><b>Mặt sau: </b></p>
            <img src={result.imagePathBack} alt="Mặt sau CCCD" />
          </div>
        </Fragment>
      ) : (
        <p className="no-data">Không tìm thấy dữ liệu</p>
      )
    )}
  </div>
   
  );
};

export default Result;
