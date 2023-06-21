// import React from 'react';
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyA4bFj14tVc9IT-5yL7tbvyvB2sCy7hbWM",
//     authDomain: "recipeworld-8ecc6.firebaseapp.com",
//     projectId: "recipeworld-8ecc6",
//     storageBucket: "recipeworld-8ecc6.appspot.com",
//     messagingSenderId: "725588893040",
//     appId: "1:725588893040:web:f83005b7b51cca25fbc3b5",
//     measurementId: "G-52RMZMLKKQ"
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// const uploadIMG = () => {
//     handleFileUpload = (file) => {
//         const metadata = {
//             contentType: 'image/jpeg',
//         };

//         const storageRef = ref(storage, 'images/' + file.name);
//         const uploadTask = uploadBytesResumable(storageRef, file, metadata);

//         uploadTask.on(
//             'state_changed',
//             (snapshot) => {
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log('Upload is ' + progress + '% done');
//                 switch (snapshot.state) {
//                     case 'paused':
//                         console.log('Upload is paused');
//                         break;
//                     case 'running':
//                         console.log('Upload is running');
//                         break;
//                 }
//             },
//             (error) => {
//                 console.error('Upload error:', error);
//             },
//             () => {
//                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                     console.log('File available at', downloadURL);
//                 });
//             }
//         );
//     };

//     handleUploadButtonClick = () => {
//         const file = this.fileInput.files[0];
//         if (file) {
//             this.handleFileUpload(file);
//         }
//     };
// }
// render() {
//     return (
//         <div>
//             <input type="file" ref={(ref) => (this.fileInput = ref)} />
//             <button onClick={this.handleUploadButtonClick}>Upload</button>
//         </div>
//     );
// }

