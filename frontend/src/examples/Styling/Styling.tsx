import './Styling.css';
import style from './Styling.module.css';
import './Styling.scss';
import clsx from 'clsx';

const Styling: React.FC = () => {
  return (
    <div>
      <h1>Inline Styling</h1>
      {/*
        unübersichtlich
        nicht wiederverwendbar
        nur für Ausnahmefälle
        */}
      <div
        style={{
          color: 'yellow',
          backgroundColor: 'black',
          borderRadius: '5px',
          height: '30px',
          width: 200,
          padding: 5,
        }}
      >
        Hallo Welt
      </div>
      <hr />
      <h1>CSS Import</h1>
      {/*
        potenziell wiederverwendbar
        sauberer Komponentencode
        aber: global gültig - selbst um namespacing kümmern
      */}
      <div className="cssImport">CSS Import</div>
      <hr />
      <h1>CSS Modules</h1>
      {/*
        automatisch namespaced
        standard css
        basiert auf css klassen selektoren
        */}
      <div className={style.myModule}>CSS Module</div>
      <hr />
      <h1>Präprozessoren</h1>
      {/*
        Installieren: https://vitejs.dev/guide/features#css-pre-processors
        */}
      <div className="myPreProcessor">
        <div>Präprozessor</div>
      </div>
      <hr />
      <h1>clsx</h1>
      {/*
        installiern npm install clsx
        importieren import clsx from 'clsx';
        nutzen!
      */}
      <div className={clsx(['clsxClass', 'clsxClass2', { clsxClass3: true }])}>
        clsx
      </div>
    </div>
  );
};

export default Styling;
