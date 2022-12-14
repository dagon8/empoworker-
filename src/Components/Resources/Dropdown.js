import React, {useState} from 'react'

const Dropdown = ({num}) => {

    const [show, setShow] = useState(false)

    const categories = ["Wage Theft", "Child Labor", "Work Place Accidents", "Migrant Resources", "Workers' Rights"];
    const listCategories = categories.map((category) => {
     return (category)});


  return (
    <div style={{display: "inline-block", width: "10vw"}}>
        <div style={{display: "flex"}}>
            <h3 style={{color: "white"}}> {listCategories[num]}</h3>
            {
                !show ? 
                <i onClick={() => setShow(!show)} style={{cursor: "pointer", color: "white", margin: "auto"}}className="fa-sharp fa-solid fa-circle-chevron-down"></i>
                :
                <i onClick={() => setShow(!show)} style={{cursor: "pointer", color: "white", margin: "auto"}}className="fa-sharp fa-solid fa-circle-chevron-up"></i>

            }
        </div>

        {
            show 
            &&
            <ul style={{display: "inline block", color: "white"}}>
                <li style={{fontSize: "1.5vh"}}>Lorem ipsum dolor sit amet.</li>
                <li style={{fontSize: "1.5vh"}}>Lorem ipsum dolor sit amet.</li>
                <li style={{fontSize: "1.5vh"}}>Lorem ipsum dolor sit amet.</li>
            </ul>
        }
    </div>
  )
}

export default Dropdown