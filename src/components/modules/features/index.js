import React from 'react';
import './features.css';

export default (props) => {
  
  console.log(props.bgColor);
  return (
    <div className='features-container' style={{backgroundColor: props.bgColor}}>
      <h3>Преимущества React.</h3>
      <div className='features'>
        <div className="feature-box">
          <div className="feature-icon">
            <i className="fas fa-fighter-jet"></i>
          </div>
          <div className="feature-title">Быстродействие.</div>
          <div className="feature-desc">За счёт оптимизации работы своих алгоритмов React
            имеет высокую производительность и скорость работы. Собранное приложение React
            уже включает в себя всё необходимое из библиотек, поэтому не требует их подключения,
            что положительно сказывается на скорости загрузки.
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-icon">
            <i className="far fa-window-restore"></i>
          </div>
          <div className="feature-title">Одностраничные приложения (SPA).</div>
          <div className="feature-desc">Технология SPA (single page application) позволяет
            создавать приложения, которые работают без перезагрузки страницы браузера. Поэтому
            переходы пользователя между страницами не требуют обращения к серверу.
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="feature-title">Мобильные приложения.</div>
          <div className="feature-desc">Использование технологий React Native и PWA позволяет
            создавать на основе React приложения для мобильных устройств. При этом, переиспользование
            кода значительно упрощает и ускоряет разработку таких приложений паралельно с браузерной
            версией.
          </div>
        </div>
      </div>
    </div>
  );
}