"use client";
import Image from "next/image";
import user from "../asset/user.png";
import {
  ArrowLeft,
  ChevronDown,
  Link,
  Menu,
  Settings,
  User,
  UserRound,
  X,
} from "lucide-react";
import Navbar from "../Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../../button/custombutton";
import cupIcon from "../../../../public/cup.svg";
import infoIcon from "../../../../public/info-circle.svg";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";
type PageProps = {
  handleGoBack: () => void;
  handleShareGameLink: () => void;
};

const JoinGameNavbar = ({ handleShareGameLink }: PageProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();

  const handleShowMenu = () => {
    menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
  };
  const handleHowToPlayClick = () => {
   
  };

  return (
    <div className="w-full">
      <Navbar className="flex justify-between bg-body z-[995] fixed top-0 left-0">
        <div className="flex md:hidden justify-between items-center bg-transparent">
          <CustomButton
            onClick={() => router.back()}
            variant="outline"
            isLeftIconVisible={true}
            icon={<ArrowLeft color="#00658B" />}
            size={"lg"}
          >
            Back
          </CustomButton>{" "}
        </div>
        {/* {menuIsOpen === false ? (
          <button
            onClick={() => handleShareGameLink()}
            className="flex md:hidden items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-extra-small text-black justify-center py-[12px] px-4"
          >
            <span>Share game link</span>
            <span>
              <Link size={"14px"} />
            </span>
          </button>
        ) : (
          ""
        )} */}
        <div className="hidden md:flex  items-center gap-4">
          <CustomButton
            onClick={() => router.back()}
            variant="outline"
            isLeftIconVisible={true}
            icon={<ArrowLeft color="#00658B" />}
            size={"lg"}
          >
            Back
          </CustomButton>
        </div>
        <div className="hidden md:flex items-center gap-4 justify-center border-solid border-[2px] rounded-[8px] border-[#7F7F7F] p-3">
          <Image src={cupIcon} alt="cup" width={37} height={37.6} />
          <span className="text-[24px] font-[700] text-[#4CAF50]">$350</span>
        </div>
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-2 ">
            <CustomButton
              onClick={() => {
                console.log("Copy link");
              }}
              variant="subtle"
              isRightIconVisible={true}
              icon={<Link size={"14px"} />}
              size={"lg"}
            >
              Share Game Invite
            </CustomButton>
            <button className="bg-primary-700 shadow-custom-inset text-primary-100 hover:bg-primary-700/90 dark:bg-slate-50 dark:text-primary-100 dark:hover:bg-slate-50/90 flex items-center justify-center gap-3 rounded-[8px] px-4">
              <User color="#ffffff" />
              <span>Frieda</span>
              <ChevronDown color="#ffffff" />
            </button>
            <button className="px-4 border-[2px] border-primary-800 border-solid rounded-[8px] text-primary-800">
              ?
            </button>
          </div>

          {/* <CustomButton
            variant="secondary"
            isRightIconVisible={true}
            icon={<Link size={"14px"} />}
          >
            Button CTA
          </CustomButton> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleShowMenu();
            }}
            className="flex md:hidden shadow-custom-inset items-center bg-primary-700 border rounded-[8px] gap-[.5em] border-[#00658B] text-white justify-center py-[12px] md:py-[10px] px-4 outline-1"
          >
            {!menuIsOpen ? (
              <Menu />
            ) : (
              <button className="rounded-[8px] p-[4px]">
                <span className="border-[1px] border-solid border-white flex items-center justify-center p-[2px] rounded">
                  <X />
                </span>
              </button>
            )}
          </button>
        </div>
      </Navbar>
      {menuIsOpen === true ? (
        <div>
          <div className="bg-[#FFFDF2] h-screen w-[80%] z-[999] md:hidden fixed top-0 flex gap-4 py-[50px] flex-col min-h-[90vh] p-4 rounded-lg justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex justify-start gap-2 items-center border-b-[1px] border-solid border-primary-700 py-4">
                <User color="#00658B" /> Frieda
              </div>
              <CustomButton
                size={"lg"}
                onClick={() => {
                  console.log("Copy link");
                }}
                variant="subtle"
                isRightIconVisible={true}
                icon={<Link size={"14px"} />}
              >
                Share Game Invite
              </CustomButton>
              <div>
                <button
                  onClick={handleHowToPlayClick}
                  className="text-textColor-main self-center cursor-pointer flex items-center gap-4 text-primary-700 text-[18px]"
                >
                  <Image alt="info-icon" src={infoIcon} />
                  How to play
                </button>
              </div>
              <div>
                <button
                  onClick={handleHowToPlayClick}
                  className="text-textColor-main self-center cursor-pointer flex items-center gap-4 text-primary-700 text-[18px]"
                >
                  <Settings color="#292D32" /> Settings
                </button>
              </div>
            </div>
            <button className="block w-full text-center py-2 rounded-[8px] text-error border-error border-[1px] border-solid">
              Leave Game
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default JoinGameNavbar;
