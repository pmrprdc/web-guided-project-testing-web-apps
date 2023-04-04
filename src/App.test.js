import React from 'react'
import { screen, render} from "@testing-library/react"
import App from "./App"
import AnimalForm from './components/AnimalForm'



test("when app mounts, Add New Animal Header", ()=> {
    //Arrange
    
    render(<App/>)
    const random = screen.getByText("Add New Animal")
    expect(random).toBeInTheDocument();
 } )