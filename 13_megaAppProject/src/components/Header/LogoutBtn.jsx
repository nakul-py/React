/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import {logout} from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandeler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-red-400 rounded-full"
      onClick={logoutHandeler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
