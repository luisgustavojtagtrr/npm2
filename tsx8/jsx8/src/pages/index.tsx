import Logo from './components/Logo'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {ItemGrid} from './components/ItemGrid';
import Carrusel from '../Carrusel/carrusel.tsx';
import Img from '../Carrusel/Img.tsx';
import Parrafo from '../Parrafo/parrafo.tsx';
import Nav from '../Parrafo/nav.tsx';
import Pros from '../Parrafo/Pros';
import Pros2 from '../Parrafo/Pros2';
import Images from '../Parrafo/Images';
export default function Home() {
  return (
    <>
      <div style={{height:"100vh"}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ItemGrid className='stain-1'>
                <div style={{marginTop:20,marginLeft:20,marginRight:20}}>
                  <Logo/>
                  <div>
                    <h1 className='titles'>
                      find the place to live <span>your dreams</span> easily here
                    </h1>
                    <p className='paragraph'>Everything you need about finding your place to live will be here, where it will be easier for you</p>
                  </div>
                </div>
              </ItemGrid>
            </Grid>
            <Grid item xs={3}>
              <ItemGrid style={{margin:0,padding:0}}>
                <div className='bg-header'>
                </div>
              </ItemGrid>
            </Grid>
            <Grid item xs={3}>
              <ItemGrid style={{margin:0,padding:0}}>
                <div className='bg-header2'>
                </div>
              </ItemGrid>
            </Grid>
            <Grid item xs={3}>
              <ItemGrid style={{margin:0,padding:0}}>
                <div className='bg-header3'>
                </div>
              </ItemGrid>
            </Grid>
            
            <Grid item xs={3}>
              <ItemGrid style={{margin:0,padding:0}}>
                <div className='bg-header4'>
                
                </div>
              </ItemGrid>
            </Grid>         
          </Grid>
        </Box>
        <section className='diseño'>
        <div className='div'>
        <Carrusel/>    
       </div>     
       <div className='div'>
        <Img/>    
       </div>
       </section>
      <div>
        <section className='Displa'>
        <Parrafo/>
         <div>
        <Nav/>
        </div>
        </section>
        <section>   
        <Pros/>
        <Pros2/>
        <Images/>
        
        </section>
        <section>

        </section>
       <section className='data'> 
        <div className='traveloka_logosss'>
        <div className='traveloka_logo'>
        </div>
        <div className='traveloka_logo2'>
        </div>
        <div className='traveloka_logo3'>
        </div>
        <div className='traveloka_logo4'>
        </div>
        </div>
        </section> 
        </div>
      </div>
    </>
  )
}
