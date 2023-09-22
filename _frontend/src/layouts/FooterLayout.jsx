"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterLayout() {
  return (
    <div>
      <Footer.Divider />
      <div class="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright by="UGJobs. All Rights Reserved." year={2023} />
        <div className="sm:justify-center">
          <Footer.LinkGroup corol>
            <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
            <Footer.Link href="/term-of-policy">Term of Policy</Footer.Link>
            <Footer.Link href="/accessibility">Accessibility</Footer.Link>
          </Footer.LinkGroup>
        </div>

        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://www.facebook.com/" icon={BsFacebook} />
          <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} />
          <Footer.Icon href="https://twitter.com/" icon={BsTwitter} />
          <Footer.Icon href="https://github.com/" icon={BsGithub} />
        </div>
      </div>
    </div>
  );
}
