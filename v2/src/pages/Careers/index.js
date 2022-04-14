import React, {useEffect} from 'react'
import DefaultLayout from "../../layout/DefaultLayout";

export default function Careers() {
  useEffect(() => {
    const rtscript = document.createElement('script');
    rtscript.type = 'text/javascript';
    rtscript.src = 'https://d10zminp1cyta8.cloudfront.net/widget.js';
    rtscript.onload = function() {
      new window.RTWidget({
        companies: [43746],
        detailsMode: "popup",
        language: "en",
        departmentsFilter: [],
        themeVars: {
          primary: "#1999e3",
          secondary: "#000",
          text: "#5c6f78",
          textDark: "#37474f",
          fontFamily: "\"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;",
          baseFontSize: "16px"
        },
        flags: {
          showLocation: true,
          showCountry: true,
          showCity: true,
          groupByLocation: false,
          groupByDepartment: false,
          groupByCompany: false
        }
      });
    }
    document.body.appendChild(rtscript);
    return () => document.body.removeChild(rtscript);

  }, []);
  return (
    <DefaultLayout className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div id="recruitee-careers"></div>
      </div>
    </DefaultLayout>
  );
}
