import SideBar from "@/components/Layout/SideBar";
import { GlobalContext } from "@/context";
import Email from "@/Pages/Email";
import Sms from "@/Pages/Message/Sms";
import Notification from "@/Pages/PushNotification";
import WhatsApp from "@/Pages/WhatsApp";
import { useContext } from "react";
import Welcome from "../Pages/Welcome/Welcome";


export default function Home() {

  return (
    <Welcome/>
  );
}
