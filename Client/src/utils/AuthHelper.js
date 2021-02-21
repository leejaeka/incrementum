import {auth} from './Firebase.js'

export function signIn(setAuth) {
    const provider = new auth.GoogleAuthProvider();

    auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...

            console.log(user)
            localStorage.setItem('session', user)
            setAuth(true)
        }).catch((error) => {
        console.log(error)
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
    });
}

export function signOut(setAuth) {
    setAuth(false)
    localStorage.clear('session')
    return auth().signOut();
}

// export function createUser(email, password, type, setUser) {
//     return auth.createUserWithEmailAndPassword(email, password)
//         .then((user) => {
//             return fetch(config.serverUrl + "/user", {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     email, type, uid: user.user.uid
//                 }),
//             }).then(response => {
//                 if (response.ok) {
//                     const user_obj = JSON.parse(JSON.stringify(user)).user;
//                     setUser({ ...user_obj, type })    // set global user state in App.tsx
//                     console.log("user created:", user_obj)
//                     return user
//                 } else {
//                     const user = auth.currentUser;
//                     // delete user from firebase if backend failed to create
//                     if (user) {
//                         user.delete()
//                     }
//                     return Promise.reject(new Error("Failed to create user"));
//                 }
//             })
//         })
// }
//

//
// export function login(email, password, setUser) {
//     return auth.signInWithEmailAndPassword(email, password)
//         .then((user) => {
//             // const user_obj = JSON.parse(JSON.stringify(user)).user;
//             //
//             // fetch(config.serverUrl + "/user/token/" + user_obj.stsTokenManager.accessToken, {
//             //     method: "GET",
//             //     headers: {
//             //         Accept: "application/json",
//             //         "Content-Type": "application/json",
//             //     },
//             // }).then(mongo_user_obj => mongo_user_obj.json())
//             //     .then(json_obj => json_obj.type)
//             //     .then(type => {
//             //         setUser({ ...user_obj, type })    // set global user state in App.tsx
//             //     });
//             //
//             // console.log(`signed in as ${user_obj.email}: `, user_obj)
//         })
// }
//
// export function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email);
// }
