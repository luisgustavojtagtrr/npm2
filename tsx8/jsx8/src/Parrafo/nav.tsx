import '../styles/Home.module.css';
import {Logo2,Logo3,Logo4,Logo5,Logo6} from '../Logo/Logo2.tsx';
export default function Nav(){
    return(
        <>
        <div>
         <nav>
           <div className='letraReducida'>
           <Logo2/>
            <div>
            <p>GUTIERREZ</p>
            <p className='letraReducida2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit sint similique adipisci nam? Ad inventore incidunt doloremque</p>   
            </div>
           </div>
           <div className='letraReducida'>
           <Logo3/>
            <div>   
           <p>JAITA</p>
            <p className='letraReducida2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit sint similique adipisci nam? Ad inventore incidunt doloremque</p>   
            </div>
           </div>  
           <div className='letraReducida'>
           <Logo4/>
           <div>
           <p>GUSTAVO</p>
            <p className='letraReducida2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit sint similique adipisci nam? Ad inventore incidunt doloremque</p>   
            </div>
           </div>
           <div className='letraReducida'>
           <Logo5/>
           <div> 
           <p>LUIS</p>
            <p className='letraReducida2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit sint similique adipisci nam? Ad inventore incidunt doloremque</p>   
            </div>
           </div>
           <div className='letraReducida'>
           <Logo6/>
            <div>
           <p>UI</p>
            <p className='letraReducida2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit sint similique adipisci nam? Ad inventore incidunt doloremque</p>   
            </div>
            </div> 
         </nav>
        </div>
        </>
    );
}