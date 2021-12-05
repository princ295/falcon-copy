/* eslint-disable no-debugger, no-console */
import React, { useEffect } from 'react'

const WithHoc = (Component, arg) => {

  return function WithHocComponent () {
    useEffect(() => {
    
      const btn = document.getElementById("button-download-as-xls");
      let tableHead = document.getElementsByTagName('th');
      let tableItem = document.getElementsByClassName('dataTable')[0].lastElementChild;

      document.getElementById('table_1')?.lastChild?.remove();


      if(tableItem && arg.padding){
        tableItem.remove();
        Object.values(tableHead).map((th) => {
            Object.values(tableHead).map(th => th.style.padding='0 10px')
        })
        if(arg.btn){
          btn.style.background="#492a78";
          btn.style.color="#fff"
        }
      }else {
        tableItem.remove();
      }
    }, [])
    return <Component />
  }
} 
export default WithHoc;
/* eslint-enable no-alert, no-console */
