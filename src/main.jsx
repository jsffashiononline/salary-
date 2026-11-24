import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from './firebase.js';
import {AuthScreen} from './AuthScreen.jsx';
import App from './App.jsx';
import './style.css';
function Root(){const [user,setUser]=useState(undefined);useEffect(()=>onAuthStateChanged(auth,setUser),[]);if(user===undefined)return <div className="authLoading">My Salary লোড হচ্ছে…</div>;if(!user)return <AuthScreen/>;return <><button className="logoutButton" onClick={()=>signOut(auth)}>লগআউট</button><App uid={user.uid}/></>;}
createRoot(document.getElementById('root')).render(<React.StrictMode><Root/></React.StrictMode>);
