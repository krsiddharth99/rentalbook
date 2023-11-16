import React from "react";
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 py-6">

      <div>
        <hr className="border-t-2 border-dashed border-gray-600" />
      </div>

      <div id="content" className="flex flex-wrap px-8 space-x-4 items-center justify-between">


        <div className="w-96 m-4">
          <div className="font-bold text-white">
            <div className="flex items-center">
              <span className="ml-3 text-4xl cursor-pointer" style={{ fontFamily: 'Griffy' }} onClick={()=>navigate('/')}>BookHive</span>
            </div>
            <hr className="my-2 border-gray-600" />
            <span className="font-light">
              BOOKHIVE is your digital haven for an extensive collection of books, from classics to contemporary gems. Explore, read, and immerse yourself in a world of literature, right at your fingertips."
            </span>
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
                <a href="https://wa.me/919677062540" target="_blank" rel="noreferrer" className="flex items-center"><BsWhatsapp className="mr-2" /> Chat with us on WhatsApp</a><br />
              </div>
              <div className="flex items-center mb-1">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center"><BsInstagram className='mr-2' /> Follow us on Instagram</a><br />
              </div>
              <div className="flex items-center mb-1">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center"><RiTwitterXFill className='mr-2' /> Hear us on X</a><br />
              </div>


            </span>
          </div>
        </div>


      </div>


    </div>
  );
}

export default Footer;
