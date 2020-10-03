import React, { useState, useRef } from 'react';
import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps';

const mapState = { center: [55.795482, 37.705816], zoom: 13 };

const YmapsInit = () => {
  //   return (
  //     <>
  //       <YMaps>
  //         <div className="contact__map">
  //           <Map state={mapState} width={452} height={270}>
  //             <Placemark geometry={[55.798682, 37.695816]} />
  //           </Map>
  //         </div>
  //       </YMaps>
  //     </>
  //   );
  // };

  const [ymaps, setYmaps] = useState(null);
  // Завел для хранения маршрута переменную(аналогия переменной класса в стэйтлесс компоненте)
  const routes = useRef(null);

  // В данном случае строим маршрут сразу, но можно изменить и строить по клику на кнопку
  const getRoute = (ref) => {
    if (ymaps) {
      const multiRoute1 = new ymaps.multiRouter.MultiRoute(
        {
          // Описание опорных точек мультимаршрута.
          referencePoints: ['Метро Сокольники', [55.798682, 37.695816]],
          // Параметры маршрутизации.
          params: {
            // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
            results: 1,
            routingMode: 'pedestrian',
            viaIndexes: [2],
          },
        },
        {
          // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
          boundsAutoApply: false,
          // Внешний вид линии маршрута.
          routeActiveStrokeWidth: 6,
          routeActiveStrokeColor: '#fa6600',
          wayPointStartIconColor: '#000',
          wayPointFinishVisible: false,
          wayPointStartIconImageSize: [5, 5],
        },
      );

      const multiRoute2 = new ymaps.multiRouter.MultiRoute(
        {
          // Описание опорных точек мультимаршрута.
          referencePoints: ['Метро Преображенская площадь', [55.798682, 37.695816]],
          // Параметры маршрутизации.
          params: {
            // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
            results: 1,
            routingMode: 'pedestrian',
          },
        },
        {
          // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
          boundsAutoApply: false,
          // Внешний вид линии маршрута.
          routeActiveStrokeWidth: 6,
          routeActiveStrokeColor: '#8e44ad',
          wayPointStartIconColor: '#000',
          wayPointFinishVisible: false,
        },
      );

      // Кладем полученный маршрут в переменную
      routes.current = multiRoute1;
      ref.geoObjects.add(multiRoute1);

      routes.current = multiRoute2;
      ref.geoObjects.add(multiRoute2);
    }
  };

  const getRoutes = () => {
    // Теперь в этой переменной можем получить инстанс маршрута
    console.log(routes.current.getWayPoints());
  };

  return (
    <div className="App">
      <YMaps query={{ ns: 'use-load-option', apikey: 'b08f88c0-8649-46c2-b51f-ffb422a44098' }}>
        <Map
          width={452}
          height={290}
          modules={['multiRouter.MultiRoute']}
          onLoad={(ymaps) => setYmaps(ymaps)}
          state={mapState}
          instanceRef={(ref) => ref && getRoute(ref)}>
          <Placemark geometry={[55.798682, 37.695816]} />
          <FullscreenControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default YmapsInit;
