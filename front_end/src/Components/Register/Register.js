import React, { useState, useEffect } from 'react';
import '../../svg.css';
import { axios } from 'axios';

const Register = () => {

    const [phantram, setPhanTram] = useState(0);

    const [submit, setSubmit] = useState(false)

    const [dataForm, setDataForm] = useState({
        "email": "",
        "full_name": "",
        "date_of_birth": "",
        // "username": "",
        "password": "",
        "confirm_password": ""
    });


    const [checkForm, setCheckForm] = useState({
        inputForm: false,
        uploadAvatar: false,
        btnRegister: false
    })

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()


    // Hàm xử lý việc chọn hình ảnh
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
        const reader = new FileReader();

        reader.onloadend = () => {
            setPreview(reader.result)
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            setPreview(reader.result)
        }
        else {
            setPreview(undefined)
        }
    }

    useEffect(() => {
        const today = () => {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = yyyy + '-' + mm + '-' + dd;
            document.getElementById('datefield').setAttribute('max', today);
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
                setCheckForm({ ...checkForm, uploadAvatar: true })
                setPhanTram(100)
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


            fetch('http://127.0.0.1:8000/api/obtainers/register', requestOptions)
                .then(res => res.json())
                .then(json => {
                    if (json['success'] > 0) {
                        alert("Bạn đã đăng ký thành công!");
                        setTimeout(() => {
                            window.location = 'http://localhost:3000/login';
                        }, 1000);
                    }
                    else {
                        alert(JSON.stringify(json.error))
                    }
                });
        }
    }


    const renderCheckValidationForm = () => {
        return (
            <div className="errors" >
                {/* {dataForm.username === "" && <span>Username must be filled</span>} */}
                {dataForm.date_of_birth === "" && <span>Birthday must be filled</span>}
                {dataForm.full_name === "" && <span>Full name must be filled</span>}
                {/* {dataForm.username.length <= 2 && <span>Username has at least 3 characters</span>} */}
                {!validateEmail(dataForm.email) && <span>Email syntax</span>}
                {dataForm.password === "" && <span>Password must be filled</span>}
                {dataForm.password.length < 8 && <span>Password has at least 8 characters</span>}
                {dataForm.confirm_password === "" && <span>Confirm Password must be filled</span>}
                {dataForm.password !== dataForm.confirm_password && <span>Confirm password not same as password</span>}
            </div>
        )
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const backForm = (value) => {

        if (value === 'inputForm') {
            setCheckForm({ ...checkForm, inputForm: false })
            setPhanTram(25)
        }

        if (value === 'uploadAvatar') {
            setCheckForm({ ...checkForm, uploadAvatar: false })
            setPhanTram(75)
        }

    }


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


    const renderFormRegister =
        <div className="form-register" >

            <div className="form-label">
                <label>Full name</label>
                <input type="text" name="full_name" placeholder="" onChange={(e) => setDataForm({ ...dataForm, "full_name": e.target.value })} value={dataForm.full_name} />
            </div>

            <div className="form-label">
                <label>Email</label>
                <input type="email" name="email" placeholder="" onChange={(e) => setDataForm({ ...dataForm, "email": e.target.value })} value={dataForm.email} />
            </div>

            <div className="form-label">
                <label>Birthday</label>
                <input type="date" id="datefield" name="date_of_birth" min="1900-01-02" placeholder="" onChange={(e) => setDataForm({ ...dataForm, "date_of_birth": e.target.value })} value={dataForm.date_of_birth} />
            </div>

            <div className="form-label">
                <label>Password</label>
                <input type="password" name="password" placeholder="" onChange={(e) => setDataForm({ ...dataForm, "password": e.target.value })} value={dataForm.password} />
            </div>

            <div className="form-label">
                <label>Confirm Password</label>
                <input type="password" name="confirm_password" placeholder="" onChange={(e) => setDataForm({ ...dataForm, "confirm_password": e.target.value })} value={dataForm.confirm_password} />
            </div>

            <div className="form-label">
                <button className="btn-next" onClick={() => checkState("inputForm")}>Next</button>
            </div>

            <div className="form-label">
                {submit && renderCheckValidationForm()}
            </div>
        </div>

    const renderUploadAvatar = <div className="form-upload">
        <div className="upload-file">
            <div className="box-avatar">
                <label className="label-avatar">Avatar</label>
                {selectedFile && <img src={preview} alt="avatar" className="img-avatar" />}
                <input type="file" name="file" className="input-file" onChange={onSelectFile} />
            </div>
        </div>
        <div className="upload-file">
            <div className="box-event">
                <button className="btn-next" onClick={() => backForm("inputForm")}>Back</button>
                <button className="btn-next" onClick={() => checkState("uploadAvatar")}>Next</button>
            </div>
        </div>
    </div>

    const renderEventRegister = <div className="form-event-register">
        <div className="form-event">
            <label>Vui lòng bấm xác nhận để hoàn thành đăng ký</label>
            <div className="box-event">
                <button className="btn-next" onClick={() => backForm("uploadAvatar")}>Back</button>
                <button className="btn-next" onClick={() => checkState("btnRegister")}>Register</button>
            </div>
            {

            }

        </div>
    </div>

    return (
        <div>
            <div>
                <div className="boxState">
                    <div className="box">
                        <svg>
                            <circle cx="70px" cy="70px" r="70px"></circle>
                            <circle className={phantram > 0 ? 'p' + phantram : 'p25'} cx="70px" cy="70px" r="70px"></circle>
                        </svg>
                        <div className="number_precent"><span>{phantram}</span>%</div>
                    </div>
                </div>
            </div>


            {
                !checkForm.inputForm && renderFormRegister
            }
            {
                checkForm.inputForm && !checkForm.uploadAvatar && renderUploadAvatar
            }
            {
                checkForm.uploadAvatar && !checkForm.btnRegister && renderEventRegister
            }
        </div>

    )
}

export default Register
