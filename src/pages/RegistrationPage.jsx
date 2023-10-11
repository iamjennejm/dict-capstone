import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";

export default function RegistrationPage() {
    return (
        <>
        <main className="container mx-auto">
            <div className='main'>
                <div className='header'>
                        <HeaderLayout /> 
                </div>
                <div className="grid bg-gray-100"></div>
    
            {/* Content */}
        
            Registration Page
        
            {/* Footer */}
            <FooterLayout />
        </div>
        </main>
    </>
    );
  }
  