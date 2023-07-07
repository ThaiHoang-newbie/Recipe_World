import React, { useState, useEffect, useRef } from "react";
import "../../svg.css";
import './Register.css';
import Header from "../pages/homepage/parts/Header";
import Footer from "../pages/homepage/parts/Footer";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-storage.js';

const Register = () => {

  const [phantram, setPhanTram] = useState(25);


  const [submit, setSubmit] = useState(false);


  const [dataForm, setDataForm] = useState({
    email: "",
    full_name: "",
    date_of_birth: "",
    password: "",
    confirm_password: "",
  });

  const [checkForm, setCheckForm] = useState({
    inputForm: false,
    uploadAvatar: false,
    btnRegister: false,
  });

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const fileInput = useRef(null)


  // Hàm xử lý việc chọn hình ảnh
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setPreview(undefined);
    }
  };

  useEffect(() => {
    const today = () => {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = yyyy + "-" + mm + "-" + dd;
      document.getElementById("datefield").setAttribute("max", today);
    };

    today();
  }, []);

  // Hàm xử lý từng bước của form
  const checkState = (value) => {
    if (value === 'inputForm') {
      if (validateEmail(dataForm.email)
        && dataForm.password.length >= 8
        && (dataForm.password == dataForm.confirm_password)) {
        setPhanTram(75)
        setCheckForm({ ...checkForm, inputForm: true })
      }
      setSubmit(true)
    }

    if (value === "uploadAvatar") {
      if (selectedFile !== undefined) {
        setCheckForm({ ...checkForm, uploadAvatar: true });
        setPhanTram(100);
      }
    }

    if (value === 'btnRegister') {
      const _formData = new FormData();
      _formData.append("username", dataForm.username);
      _formData.append("date_of_birth", dataForm.date_of_birth);
      _formData.append("full_name", dataForm.full_name);
      _formData.append("email", dataForm.email);
      _formData.append("password", dataForm.password);
      _formData.append("confirm_password", dataForm.confirm_password)
      _formData.append("profile_image_url", selectedFile);

      const requestOptions = {
        method: 'POST',
        body: _formData
      };

      fetch("http://127.0.0.1:8000/api/obtainers/register", requestOptions)
        .then((res) => res.json())
        .then((json) => {
          if (json["success"] > 0) {
            alert("Bạn đã đăng ký thành công!");
            setTimeout(() => {
              window.location = "http://localhost:3000/sign-in";
            }, 1000);
          } else {
            alert(JSON.stringify(json.error));
          }
        });





      const handleFileUpload = (file) => {
        const metadata = {
          contentType: 'image/jpeg'
        };
        // config

        const firebaseConfig = {
          apiKey: "AIzaSyA4bFj14tVc9IT-5yL7tbvyvB2sCy7hbWM",
          authDomain: "recipeworld-8ecc6.firebaseapp.com",
          projectId: "recipeworld-8ecc6",
          storageBucket: "recipeworld-8ecc6.appspot.com",
          messagingSenderId: "725588893040",
          appId: "1:725588893040:web:f83005b7b51cca25fbc3b5",
          measurementId: "G-52RMZMLKKQ"
        };


        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);

        if (file) {
          const storageRef = ref(storage, 'images/' + file.name);
          const uploadTask = uploadBytesResumable(storageRef, file, metadata);

          uploadTask.on('state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              setPhanTram(progress);
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              console.error('Error:', error);
            },
            () => {
              console.log('Upload complete');
            }
          );
        }
      };

      handleFileUpload(selectedFile);
    }

  };

  const renderCheckValidationForm = () => {
    return (
      <div className="errors">
        {/* {dataForm.username === "" && <span>Username must be filled</span>} */}
        {dataForm.date_of_birth === "" && <span>Birthday must be filled</span>}
        {dataForm.full_name === "" && <span>Full name must be filled</span>}
        {/* {dataForm.username.length <= 2 && <span>Username has at least 3 characters</span>} */}
        {!validateEmail(dataForm.email) && <span>Email syntax</span>}
        {dataForm.password === "" && <span>Password must be filled</span>}
        {dataForm.password.length < 8 && (
          <span>Password has at least 8 characters</span>
        )}
        {dataForm.confirm_password === "" && (
          <span>Confirm Password must be filled</span>
        )}
        {dataForm.password !== dataForm.confirm_password && (
          <span>Confirm password not same as password</span>
        )}
      </div>
    );
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const backForm = (value) => {
    if (value === "inputForm") {
      setCheckForm({ ...checkForm, inputForm: false });
      setPhanTram(25);
    }

    if (value === "uploadAvatar") {
      setCheckForm({ ...checkForm, uploadAvatar: false });
      setPhanTram(75);
    }
  };

  const checkTokenAndRedirect = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setTimeout(() => {
        window.location = "http://localhost:3000";
      }, 100)
    }
  };

  useEffect(() => {
    checkTokenAndRedirect();
  }, []);

  const renderFormRegister = (
    <div className="form-register container my-4">
      <div className="input-group mb-3">
        <label
          className="input-group-text bg-success text-light"
          style={{ width: "175px" }}
        >
          Full name
        </label>
        <input
          id="full_name"
          type="text"
          name="full_name"
          placeholder="Enter your full name here"
          className="form-control border border-success"
          onChange={(e) =>
            setDataForm({ ...dataForm, full_name: e.target.value })
          }
          value={dataForm.full_name}
        />
      </div>

      <div className="input-group mb-3">
        <label
          className="input-group-text bg-success text-light"
          style={{ width: "175px" }}
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email here"
          className="form-control border border-success"
          onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })}
          value={dataForm.email}
        />
      </div>

      <div className="input-group mb-3">
        <label
          htmlFor="datefield"
          className="input-group-text bg-success text-light"
          style={{ width: "175px" }}
        >
          Birthday
        </label>
        <input
          type="date"
          id="datefield"
          name="date_of_birth"
          className="form-control border border-success"
          min="1970-01-02"
          placeholder=""
          onChange={(e) =>
            setDataForm({ ...dataForm, date_of_birth: e.target.value })
          }
          value={dataForm.date_of_birth}
        />
      </div>

      <div className="input-group mb-3">
        <label
          className="input-group-text bg-success text-light"
          style={{ width: "175px" }}
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password here"
          className="form-control border border-success"
          onChange={(e) =>
            setDataForm({ ...dataForm, password: e.target.value })
          }
          value={dataForm.password}
        />
      </div>

      <div className="input-group mb-3">
        <label
          className="input-group-text bg-success text-light"
          style={{ width: "175px" }}
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirm_password"
          placeholder=""
          className="form-control border border-success"
          onChange={(e) =>
            setDataForm({ ...dataForm, confirm_password: e.target.value })
          }
          value={dataForm.confirm_password}
        />
      </div>

      <div className="btn-group d-flex justify-content-center">
        <button
          className="btn btn-success"
          onClick={() => checkState("inputForm")}
        >
          Next
        </button>
        <button className="btn btn-outline-success">Clear</button>
      </div>

      <div className="form-label">{submit && renderCheckValidationForm()}</div>
    </div>
  );
  const renderUploadAvatar = (
    <div className="form-upload my-4">
      <div class="image-box">
        <span class="error"></span>
        <label for="fileInput" class="preview">
          {selectedFile ? (
            <img src={preview} alt="avatar" className="img-avatar" />
          ) : (
            <span>Upload to preview image</span>
          )}
        </label>
        <input
          ref={fileInput}
          type="file"
          name="file"
          id="fileInput"
          hidden
          onChange={onSelectFile} />
      </div>
      <div className="upload-file">
        <div className="box-event btn-group">
          <button
            className="btn-next btn btn-outline-success"
            onClick={() => backForm("inputForm")}
          >
            Back
          </button>
          <button
            className="btn-next btn btn-success"
            onClick={() => checkState("uploadAvatar")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
  // const renderUploadAvatar = (
  //   <div className="form-upload">
  //     <div className="upload-file">
  //       <div className="box-avatar">
  //         <label className="label-avatar">Avatar</label>
  //         {selectedFile && (
  //           <img src={preview} alt="avatar" className="img-avatar" />
  //         )}
  //         <input
  //           type="file"
  //           name="file"
  //           ref={fileInput}
  //           id="fileInput"
  //           className="input-file"
  //           onChange={onSelectFile}
  //         />
  //       </div>

  //     </div>
  //     <div className="upload-file">
  //       <div className="box-event">
  //         <button className="btn-next" onClick={() => backForm("inputForm")}>
  //           Back
  //         </button>
  //         <button
  //           className="btn-next"
  //           onClick={() => checkState("uploadAvatar")}
  //         >
  //           Next
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  const renderEventRegister = (
    <div className="form-event-register container my-4">
      <div className="form-event d-flex flex-column">
        <label>Vui lòng bấm xác nhận để hoàn thành đăng ký</label>
        <div className="box-event btn-group d-flex justify-content-center">
          <button className="btn-next btn btn-outline-success" onClick={() => backForm("uploadAvatar")}>
            Back
          </button>
          <button
            className="btn-next btn btn-success"
            onClick={() => checkState("btnRegister")}
          >
            Register
          </button>
        </div>
        {}
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <div>
        <div className="boxState container d-flex justify-content-center my-4">
          <div className="box">
          <svg>
              <circle className="" cx="70px" cy="70px" r="70px"></circle>
              <circle
                className={
                  phantram > 0 ? "p" + phantram + " bg-success" : "p25"
                }
                cx="70px"
                cy="70px"
                r="70px"
                style={{stroke: "#28a745"}}
              ></circle>
            </svg>
            <div className="number_precent">
              <span>{phantram}</span>%
            </div>
          </div>
        </div>
      </div>

      {!checkForm.inputForm && renderFormRegister}
      {checkForm.inputForm && !checkForm.uploadAvatar && renderUploadAvatar}
      {checkForm.uploadAvatar && !checkForm.btnRegister && renderEventRegister}
      <Footer />
    </div>
  );
};

export default Register;
