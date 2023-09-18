import React, { useState } from 'react'
import ListCard from '../list-card/listCard'
import {faker} from "@faker-js/faker"
import "./List.css"
import Button from '../button/button'
const List = (props) => {
    function Person(image,name,description,rating){
        this.image=image;
        this.name=name;
        this.description=description;
        this.rating=rating;

    }
    const [items,changeItems]=useState(3)
    const Person1=new Person(faker.image.avatar(),faker.person.firstName(),faker.person.jobDescriptor(),"5")
    const Person2=new Person(faker.image.avatar(),faker.person.firstName(),faker.person.jobDescriptor(),"5")
    const Person3=new Person(faker.image.avatar(),faker.person.firstName(),faker.person.jobDescriptor(),"5")
    const Person4=new Person(faker.image.avatar(),faker.person.firstName(),faker.person.jobDescriptor(),"5")
    const Person5=new Person(faker.image.avatar(),faker.person.firstName(),faker.person.jobDescriptor(),"5")
    const onclick=()=>{
        changeItems(items+3)

    }
    const List=[Person1,Person2,Person3,Person4,Person5]
   
    const formattedList=List.slice(0,items)
  return (
    <div className='Content'>
        <div className='title'>
            {props.title}
        </div>
        <div className='List-grid'>
            {
                formattedList.map((item)=>(
                    <ListCard props={item}/>

                ))
            }
        </div>
        <div className='load-button'>
            {
                items < List.length &&  <Button label="See More" onClick={onclick}/>
            }

            
        </div>
        
        
        
        
    </div>
  )
}

export default List