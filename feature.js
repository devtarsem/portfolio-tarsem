const feaArray = [
    {   
        num : "01",
        head : "Customized Web pages",
        des : "I will provide you fully customized and cool looking web pages very quickly."
    }
    ,
    {   
        num : "02",
        head : "customized API designing avilable",
        des : "Customized API building is available with fully automatic cloud hosting"
    }
    ,
    {   
        num : "03",
        head : "React websites",
        des : "Fully Responsive web application in famous REACT.js library."
    }
    ,
    {   
        num : "04",
        head : "Customized Frontend animations building",
        des : "Complete web application from scratch is available with backend."
    }
    ,
    {   
        num : "05",
        head : "Cloud MongoDB server with data analysis",
        des : "MongoDB Cloud server integration in backend with Admin panels."
    }
    ,
    {   
        num : "06",
        head : "Express.js advance backend",
        des : "Advance backend service with popular Express.js framework."
    }
    ,
    {   
        num : "07",
        head : "Responsive web application",
        des : "Responsive mobile friendly web application building are avaible."
    }
]

function Features(){



    return(
        <div id='fea' className='features pad96 flex flex-dir gap48' >
            <h2 className='secondaryHeading'>Features I am Offering</h2>
            <div className='features-list grid grid-3-col gap96 pad96'>
                {feaArray.map(el=><div className='fea pad16 flex flex-dir gap16'>
                    <div className='design-fea'>{el.num}</div>
                    <p className='head'>{el.head}</p>
                    <p className='des--'>{el.des}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Features;