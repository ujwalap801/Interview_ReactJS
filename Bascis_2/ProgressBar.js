import React, { useState } from 'react';

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    const updateProgess = (delta) => {

        setProgress(prev=>Math.max(0, Math.min(100, prev+delta)))
    }

    const getBarColor = () =>
    {
        if (progress >= 80) return "green";
        if (progress >= 40) return "orange";
        return "red"
    }

    return (
        <div style={{maxWidth:"400px", margin:"auto", padding:"20px"}}>
            {/* Implement the ProgressBar component logic here */}
<h2>Progess Bar</h2>

            <div style={{ height: '25px', width: '200px', borderRadius: '8px', backgroundColor: '#ddd', overflow: 'hidden', position: 'relative' }}>



                <div style={{ width: `${progress}%`, height: "100%", backgroundColor: getBarColor(), transition: "width 0.3s ease-in-out" }}>
                
                    <span style={{position:'absolute', top:'0', left:'50%', transfrom:'transalteX(-50%)', color:"#fff", fontWeight:'bold'}}>{progress}%</span>


         </div>



            </div>
         

            <div>
                <button onClick={() => updateProgess(-10)}> -10%

                </button>


                <button onClick={() => updateProgess(+10)}> +10%

                </button>
            </div>


        </div>
    );
}

export default ProgressBar;
