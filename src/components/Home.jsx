import React from 'react';
import Typed from 'react-typed';
import Bgimg from '../Images/bgimg3.png';

const Home = () => {
    return (
        <>
            <div className="container h-100 align-content-center home pt-lg-1 pt-3 " style={{backgroundImage:`url(${Bgimg})`}}>
                <div className="text-capitalize">
                    <p>Hello ,my name is</p>
                    <h1>shubham patidar</h1>
                    <p>And I'm <span style={{color:"#fe0435"}}><Typed
                        strings={[
                            'Full stack developer.. ',
                            'python developer..',
                            'react developer..']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed></span></p>
                    <button className="btn  mt-3" style={{backgroundColor:"#fe0435",color:'white'}}>DOWNLOAD CV</button>
                </div>
            </div>

        </>
    )
}

export default Home;
