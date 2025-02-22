"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomButton from "../../shared/button/custombutton";
import ImageTextButtons from "../../shared/imageTextButtons";
import Navbar from "../../shared/navbars/Navbar";
import { useAuthContext } from "@/context/AuthContext";

type Props = {};

const LogoutConfirmation = (props: Props) => {
  const router = useRouter();

  const handleBackToSettingsClick = () => {
    router.push("/game-settings");
  };

  const { logout } = useAuthContext();
  const handleLogout = () => {
    // API call to terminate session

    // Clear session tokens or cookies here
    logout();
    document.cookie = "sessionToken=; Max-Age=0; path=/; domain=yourdomain.com";

    router.push("/auth/logout-success");
  };

  return (
    <div className="min-h-screen bg-[#faf1e4] flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <ImageTextButtons message="Are you sure you want to Logout of Remote Bingo?">
          <CustomButton
            className="w-full"
            variant="outline"
            onClick={handleBackToSettingsClick}
          >
            Back to settings
          </CustomButton>
          <CustomButton
            className="w-full"
            isLeftIconVisible
            icon={<LogOut size={24} />}
            variant="destructive"
            onClick={handleLogout}
          >
            Log out
          </CustomButton>
        </ImageTextButtons>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
