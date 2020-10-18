import React, {useEffect,useState} from 'react';
import mapMarkerImg from'../images/Local.svg'
import {Link} from 'react-router-dom'
import{FiPlus,FiArrowRight} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import {Map, TileLayer,Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import api from '../services/api';
import mapIcon from '../utils/mapIcon';

interface Orphanage {
    id:number;
    latitude:number;
    longitude:number;
    name:string;
}

function OrphanagesMap(){
const [orphanages,setOrphanages] = useState<Orphanage[]>([]);
useEffect(()=>{
    api.get('orphanages').then(response=>{
        setOrphanages(response.data);
    });
}, []);

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
            
            
            
           {orphanages.map(orphanage=>{
               return(
            <Marker 
             key={orphanage.id}
            icon={mapIcon} 
             position={[orphanage.latitude ,orphanage.longitude]} 
             >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    {orphanage.name}
                    <Link to= {`/orphanages/${orphanage.id}`}>
                        <FiArrowRight size={20} color="#FFF"/>
                    </Link>
                    </Popup>
            </Marker>
               ) 
            })};  
         </Map>


            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff"></FiPlus>
            </Link>
       </div>
    );
}
export default OrphanagesMap;