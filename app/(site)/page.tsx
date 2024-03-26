
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsGithub, BsGoogle  } from 'react-icons/bs';
import {signIn} from 'next-auth/react'
import router from "next/router";
import { Toaster, toast } from 'sonner'
import Authbutton from "./components/authbutton";

export default  async function Home() {



 


  return (
 <Authbutton/>
  );
}
