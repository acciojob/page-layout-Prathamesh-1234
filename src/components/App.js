
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  let header='Welcome to my website' 
  let footer='© 2023 My Website.All rights reserved'
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout header={header} footer={footer}>
        <p>This is the content of my website</p>
        </PageLayout>
    </div>
  )
}

export default App
