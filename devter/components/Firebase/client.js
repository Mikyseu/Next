import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged as firebaseOnAuthStateChanged, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqcIDlislJB7UNEzKN8vGONXVXidy_Bik",
    authDomain: "devter-85867.firebaseapp.com",
    projectId: "devter-85867",
    storageBucket: "devter-85867.appspot.com",
    messagingSenderId: "439864191883",
    appId: "1:439864191883:web:3cd2007022192f735ddd8e",
    measurementId: "G-GG0LC06T23"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const mapUserFromFirebaseAuthToUser = (user) => {
    if (!user) return null;
    const { displayName, photoURL, email } = user;
    return {
        username: displayName,
        avatar: photoURL,
        email: email
    };
};

export const onAuthStateChanged = (onChange) => {
    return firebaseOnAuthStateChanged(auth, user => {
        const normalizedUser = mapUserFromFirebaseAuthToUser(user);
        onChange(normalizedUser);
    });
};

export const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            return mapUserFromFirebaseAuthToUser(user);
        })
        .catch((error) => {
            console.error('Error during sign in with GitHub:', error);
            throw error;
        });
};
