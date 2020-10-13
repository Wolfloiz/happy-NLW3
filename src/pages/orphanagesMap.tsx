import React from 'react';
import mapMarkerImg from'../images/Local.svg'
import {Link} from 'react-router-dom'
import{FiPlus} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){

    return(
       <div id="page-map">
           <aside>
               <header>
                   <img src={mapMarkerImg} alt="Happy"/>
                   <h2>Escolha um orfanato no mapa.</h2>
                   <p>Muitas crianças estão
                        esperando a sua visita :)</p>
               </header>
               <footer>
                   <strong>Belo Horizonte </strong>
                   <span>Minas Gerais</span>
               </footer>
           </aside>
          
          <Map 
          center={[-19.9196569,-43.9522016]}
          zoom={14.48}
          style={{width:'100%', height:'100%'}}
          >
              <TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid29sZmxvaXoiLCJhIjoiY2tnNzhmZ2c3MDRxajJxbXp4cHo1NnF0aCJ9.DNkkAyt_Sop0naIHokoWRg'}/>
        </Map>


            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"></FiPlus>
            </Link>
       </div>
    );
}
export default OrphanagesMap;