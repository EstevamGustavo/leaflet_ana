import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/global'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { CardSc, PageSc } from './styles/styled';
import { LatLngExpression } from 'leaflet';
import Chart from 'react-google-charts';

function App() {
  const [position, setPosition] = useState<LatLngExpression>({ lat: 51.51020785704632, lng: -0.09797182807233186 })
  const [lat, setLati] = useState<number>(51.51020785704632)
  const [long, setLongi] = useState<number>(-0.09797182807233186)
  const [map, setMap] = useState<any>(null)
  const [rend, setRend] = useState(0)


  useEffect(() => {
    if (map) {
      console.log(map);
    }
  }, [map])

  const setLong = (e: any) => {
    console.log(e.target.value);
    // setLongi(e.target.value)

  }
  const setLat = (e: any) => {
    console.log(e.target.value);
    // setLati(e.target.value)
  }
  const setPos = () => {
    setPosition([lat, long])
    setRend(rend + 1)
  }

  const Teste = () => {
    useMapEvents({
      click(e) {
        console.log(e.latlng);

        setLongi(e.latlng.lng)
        setLati(e.latlng.lat)
        setPosition(e.latlng)

      }
    })

    return <></>
  }

  return (
    <>
      <GlobalStyles />
      <PageSc>
        <CardSc>
          {/* <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={{
              hAxis: {
                title: "Time",
              },
              vAxis: {
                title: "Popularity",
              },
              series: {
                1: {
                  curveType: "function",
                  legend: { position: "bottom" },
                  enableInteractivity: true,
                },
              },
            }}
            chartEvents={[
              {
                eventName: 'ok',
                callback(eventCallbackArgs) {
                  console.log("eventCallbackArgs => ", eventCallbackArgs);

                },
              }
            ]}

          /> */}
          <span>Latitude :{lat.toFixed(2)}</span>
          <br />
          <span>Longitude :{long?.toFixed(2)}</span>
          <br />
          <input defaultValue={lat} onChange={setLat} placeholder="latitude" type='number' />
          <input defaultValue={long} onChange={setLong} placeholder="longitude" type='number' />
          <button onClick={setPos}>
            Encontrar
          </button>
          <MapContainer
            key={rend}
            style={{ height: '100%', width: '100%' }}
            center={position}
            zoom={13}
            ref={setMap}


          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} draggable={true} >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <Teste />
          </MapContainer>
        </CardSc>
      </PageSc>
    </>
  );
}

export default App;


export const data = [
  ["x", "dogs", "cats"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];