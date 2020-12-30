import React from "react";
import LogOutModal from "../components/modals/LogOutModal";
import LoggedInLayout from "../layouts/LoggedInLayout";

function Blank() {
   return (
      <>
         <LoggedInLayout>
            <h1 className="h3 mb-4 text-gray-800">Blank Pageee</h1>
         </LoggedInLayout>

         <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
         </a>
         <LogOutModal />
      </>
   );
}

export default Blank;
