import Img from './Frame.png'

const feaArray = [
    {   
        num : "01",
        link : "https://axbdevtarsem.netlify.app/",
        head : "Mathametics AX=B solver Tools",
        des : "In this project we build AX=B solver using Html, Css, JavScript, the site is responsive and availabe on live server, you see the working project from below links"
    }
    ,
    {   
        num : "02",
        link : "https://fluidflowanalysis.netlify.app/",
        head : "Flow rate calulater with distribution",
        des : "this is a chemical engineering computational project in which we can very easily calculate the flow rate effects while changing the outlet flow pipe dustribution,html, css, javaScript is used in this project, we all can see working of project by below links"
    }
    ,
    {   
        num : "03",
        link : "https://documenter.getpostman.com/view/19074743/2s93XsX6Bj",
        head : "Backend food ordering API",
        des : "This is backend project, an API a food ordering API in which we have 25 features By using this API any developer no matter, frontend or android can make a very nice application like swiggy , zomato etc, node.js, express,js, mongoDB is used in this project complete details and how to use this api we can see it on github and working is available by below link"
    }

]

function Features(){



    return(
        <div id='prj' className='features prj pad96 flex flex-dir gap48' >
            <h2 className='secondaryHeading'>Project I have</h2>
            <div className='features-list prj-list grid grid-3-col gap96 pad96'>
                {feaArray.map(el=><div className='projects flex flex-dir gap16'>
                    {/* <iframe className='showPrj' src={el.link} title="AX=B"></iframe> */}
                    <div className='coverprj flex flex-dir gap16'>
                        <p className='head'>{el.head}</p>
                        <p className='des--'>{el.des}</p>
                        <div className='links flex flex-2'>
                            <a href={el.link} className='prjview'>See project</a>
                        </div>

                    </div>
                </div>)}
                
            </div>
        </div>
    )
}

export default Features;