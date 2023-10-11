'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterLayout() {
  return (
    <div
    class="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
         {/*<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
           
            <div className="sm:justify-center">
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Link 1
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            

          </div>
        </div>  */}
        <Footer.Divider /> 
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="UGJobs. All Rights Reserved."
            year={2023}
          />
          <div class="fine-print">
            <p class="links">
              <a href="/privacy-policy/" title="Handshake privacy policy">Privacy policy</a> 
              <a href="/tos/" title="Handshake terms of service">Terms of service</a>
              <a href="/accessibility/" title="Handshake accessibility statement">Accessibility</a>
            </p>
          </div>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />

          </div>
        </div>
      </div>

  )
}


