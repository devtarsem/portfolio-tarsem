import API from './api.png'

function OpenProject(){
    return(
        <div id='open' className='openprj grid grid-2-col gap96 pad96' >
            <div className='detials flex flex-dir gap16 flex-2'>
                <h2 className='secondaryHeading secondaryHeading--'>Open projects I have</h2>
                <p className='des des__update'>We have open API building projects on 10 Topics as shown below</p>
                <ol className='list flex flex-dir flex-2'>
                    <li>E-commerce API</li>
                    <li>Delivery service API</li>
                    <li>Booking application API</li>
                    <li>Transport service API</li>
                    <li>Social mediaa API</li>
                    <li>Chat application API</li>
                    <li>Interactive Data Visulization API</li>
                    <li>Trading Dashboard API</li>
                    <li>Voice controlled Home automation API</li>
                    <li>Security & privacy API</li>
                </ol>
            </div>
            
            <button className='contact btn btn__update contri' >Want to contribute DM me now on TS6346298@gmail.com</button>
        </div>
    )
}

export default OpenProject;