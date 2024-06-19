import react, { useState } from 'react'
import './App.css'
import BoxList from './BoxList.jsx'
import Box from './Box.jsx'

function App() {
return (
  <BoxList />
  )
};

export default App

//Create Box component (div with background color, width, and height)
  //add a button with text of X that removes that specific box
//Create NewBoxForm
  // form specifies box's width, height, and background color
  // Create new Box in Box array
  // Clear input values
//Write smoke test
//Write snapshot test
//Write test for creating a new box
//Write test for deleting a box