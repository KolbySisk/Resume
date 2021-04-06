import { FC } from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BiPointer } from "react-icons/bi";
import { ContactInfo } from "../../types";

export const ContactInfoSection: FC<ContactInfo> = ({
  email,
  phone,
  website,
}) => {
  return (
    <section>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <HiOutlineMail /> <p>{email}</p>
        </div>
        <div className="flex items-center space-x-2">
          <HiOutlinePhone /> <p>{phone}</p>
        </div>
        <div className="flex items-center space-x-2">
          <BiPointer /> <p>{website}</p>
        </div>
      </div>
    </section>
  );
};
