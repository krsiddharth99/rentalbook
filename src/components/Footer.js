import React from "react";
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'

function Footer() {

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 mt-10 py-6">

      <div>
        <hr className="border-t-2 border-dashed border-gray-600" />
      </div>

      <div id="content" className="flex flex-wrap px-8 space-x-4 items-center justify-between">


        <div className="w-96 m-4">
          <div className="font-bold text-white">
            <div className="flex items-center">
              <span className="ml-3 text-4xl" style={{ fontFamily: 'Griffy' }}>BookHive</span>
            </div>
            <hr className="my-2 border-gray-600" />
            <span className="font-light">
              BOOKHIVE is your digital haven for an extensive collection of books, from classics to contemporary gems. Explore, read, and immerse yourself in a world of literature, right at your fingertips."
            </span>
          </div>
        </div>


        <div className="w-96 m-4">
          <div className="flex w-full border-b-2 p-2 shadow-sm rounded-md bg-white">
            <input className="w-full outline-none" placeholder="Search Books" />
            🔍
          </div>
        </div>


        <div className="w-96 m-4">
          <div className="font-bold text-white">
            <div className="flex items-end">
              CONTACT
            </div>
            <hr className="my-2 border-gray-600" />
            <span className="font-light">
              <div className="flex items-center mb-1">
                <BsWhatsapp className="mr-2" /> Chat with us on WhatsApp<br />
              </div>
              <div className="flex items-center mb-1">
                <BsInstagram className='mr-2' /> Follow us on Instagram<br />
              </div>
              <div className="flex items-center mb-1">
                <RiTwitterXFill className='mr-2' /> Hear us on X<br />
              </div>


            </span>
          </div>
        </div>


      </div>


    </div>
  );
}

export default Footer;
