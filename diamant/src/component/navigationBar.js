import React from 'react'
import'./navigationBar.css'
export default class NavigationBar extends React.Component{
   
   render (){
       return(
        <div class="bg-img">
        <div class="container">
          <div class="topnav">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      </div>)};
}