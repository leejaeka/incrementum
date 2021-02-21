import {auth, db} from './Firebase.js'

const USER_TEMPLATE =
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

            let newUser = {
                ...USER_TEMPLATE,
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
                    setUser(newUser)
                    setAuth(false);
                    setModal(true);

                    addUser(newUser)
                }
            });

        }).catch((error) => {
        console.log(error.code, error.message)
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

export function updateUser(setAuth, user, setUser, items) {
    user = {...user, goalSet: true, ...items} /* order matters */
    setUser({...user})

    db.collection("users").doc(user.uid).set(user);
    localStorage.setItem('session', JSON.stringify(user));

    setAuth(true)
}


export function deleteUser(user, setUser, setAuth) {
    db.collection("users").doc(user.uid).delete().then(() => {
        signOut(setAuth)

        console.log("User successfully deleted!");
    }).catch((error) => {
        console.error("Error removing user: ", error);
    });
}

export async function getTopUsers(setTopUsers) {
    return db.collection("users").orderBy("totalTrees", "desc").orderBy("totalSavings", "desc").limit(100).get().then((querySnapshot) => {
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });

        let result = []
        querySnapshot.forEach(doc => result.push(doc.data()));

        setTopUsers(result)
    })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}


