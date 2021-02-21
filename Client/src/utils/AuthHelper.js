import {auth, db} from './Firebase.js'

let TEMPLATE =
    {
        name: 'John Doe',
        uid: 0,
        email: "john.doe@mail.utoronto.ca",
        goalSet: false,

        goal: 1,
        saveEachTime: 1,

        totalSavings: 0,
        totalTrees: 0,
        totalFriend: 0,

        // [timestamp, amount]
        savings: [
            // {
            //     time: 12345,
            //     amount: 123
            // }
        ],

        friends: [],

        tree: [
            // {
            //     position: 0
            //     base64: "asdasdasdsad"
            // }
        ]
    }


export function signIn(setAuth, setUser, setModal) {
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


            let newUser = {
                ...TEMPLATE,
                name: user.displayName,
                email: user.email,
                uid: user.uid
            }
            newUser = {...newUser};


            db.collection("users").doc(newUser.uid).get().then(doc => {
                console.log(doc.data())
                if (doc.exists && doc.data().goalSet) {
                    localStorage.setItem('session', JSON.stringify(doc.data()));
                    setUser(doc.data())
                    setAuth(true);
                    setModal(false);
                } else {
                    // localStorage.setItem('session', JSON.stringify(newUser));
                    setUser(newUser)
                    setAuth(false);
                    setModal(true);

                    addUser(newUser)
                }
            });

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

export function addUser(user) {
    db.collection("users").doc(user.uid).set(user);
}

// export async function isExistedUser(uid) {
//     await db.collection("users").doc(uid).get().then(doc => doc.exists)
// }



export function submitGoal(setAuth, user, setUser, items) {
    user = {...user, goalSet:true, ...items} /* order matters */
    setUser({...user})

    db.collection("users").doc(user.uid).set(user);
    localStorage.setItem('session', JSON.stringify(user));

    setAuth(true)
    // return auth.createUserWithEmailAndPassword(email, password)
    //     .then((user) => {
    //         return fetch(config.serverUrl + "/user", {
    //             method: "POST",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 email, type, uid: user.user.uid
    //             }),
    //         }).then(response => {
    //             if (response.ok) {
    //                 const user_obj = JSON.parse(JSON.stringify(user)).user;
    //                 setUser({ ...user_obj, type })    // set global user state in App.tsx
    //                 console.log("user created:", user_obj)
    //                 return user
    //             } else {
    //                 const user = auth.currentUser;
    //                 // delete user from firebase if backend failed to create
    //                 if (user) {
    //                     user.delete()
    //                 }
    //                 return Promise.reject(new Error("Failed to create user"));
    //             }
    //         })
    //     })
}


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
