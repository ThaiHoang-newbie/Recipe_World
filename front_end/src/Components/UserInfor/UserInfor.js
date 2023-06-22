import React, { Component } from 'react';
import './user.css';
import axios from 'axios';

class UserInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: {},
        };
    }

    componentDidMount() {
        this.getInfor();
    }

    getInfor = () => {
        var obtainerId = sessionStorage.getItem('obtainer_id');
        axios
            .get(`http://127.0.0.1:8000/api/get-obtainer/${obtainerId}`)
            .then(response => {
                this.setState({ res: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };



    direct = page => {
        if (page === 'profile') {
            window.location = 'http://localhost:3000/profile';
        } else if (page === 'my-posts') {
            window.location = 'http://localhost:3000/my-posts';
        } else if (page === 'edit-profile') {
            window.location = 'http://localhost:3000/edit-profile';
        } else {
            window.location = 'http://localhost:3000/';
        }
    };

    render() {
        const { res } = this.state;
        return (
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <div className="nav nav-borders__left">
                        <button className="nav-link active outline-success ms-0"  onClick={() => this.direct('profile')}>Profile</button>
                        <button className="nav-link ms-0" onClick={() => this.direct('my-posts')}>My profile </button>
                    </div>
                    <div className="nav nav-borders__right">
                        <button className="nav-link ms-0" onClick={() => this.direct('back')}>Back</button>
                    </div>
                </nav>
                <hr className="mt-0 mb-4" />
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-12 mb-xl-0">
                            <div className="card-header">User Information</div>
                            <div className="card-body text-center">
                                <img id="avatar" title="Your avatar" className="img-account-profile rounded-circle mb-2"
                                    src={`https://firebasestorage.googleapis.com/v0/b/recipeworld-8ecc6.appspot.com/o/images%2F${res.profile_image_url}?alt=media&token=6faaf2a3-91a1-4350-9b33-9ccbcc755a28`}
                                    alt="Avatar" />
                                <div className="text-muted mb-4">
                                    <b>Email: </b>{res.email}
                                </div>
                                <div className="text-muted mb-4">
                                    <b>Full name:</b> {res.full_name}
                                </div>
                                <div className="text-muted mb-4">
                                    <b>Birthday:</b> {res.date_of_birth}
                                </div>
                                <div className="text-muted mb-4">
                                    <b>Phone number:</b> {res.phone_number}
                                </div>
                                <div className="text-muted mb-4">
                                    <b>Followers:</b> {res.followers_count}
                                </div>
                                <button className="btn btn-primary" type="button" onClick={() => this.direct('edit-profile')}>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfor;
