import React from "react";
import { useContext } from "react";
import { NavContextSayHello } from "../context/NavSayHello";

export default function NavbarSayHello() {
  const HelloUser = useContext(NavContextSayHello);
  return (
    <div>
      <img src={HelloUser.user.avatar} alt={HelloUser.user.name} />
      <div>Hello User {HelloUser.user.name}</div>
    </div>
  );
}
