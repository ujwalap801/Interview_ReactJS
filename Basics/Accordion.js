import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css'

function Accordion({ items }) {
    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index)
    }


    return !items || (items.length === 0) ? "No items available" : (
        <div className="accordion ">


            {items.map((i, index) => {
                return <div key={index} className="accordion-item">

                    <button className="accordion-title" onClick={() => handleToggle(index)} >{i.title}

                        {open === index ? < FaChevronUp className="right" /> : <FaChevronDown className="right" />
                        }

                    </button>




                    {open === index &&
                        <div className="accordion-content">{i.content}</div>}
                </div>

            })}


        </div>
    );
}

export default Accordion;

// right class has float:right