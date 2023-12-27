import { Logo } from './Logo'
import  data  from '../data/footerData.json'

export const Footer = () => {

  return (
    <footer >
      <div className='footer grid__desktop'>
        <Logo/>
        <div className='footer__items'>
          {data.map((item) => (
          <div key={item.id}>
            <h5 className='heading__h5'>{item.title}</h5>
            {item.subtitle ? <p className='footer__items-subtitle'>{item.subtitle}</p> : ""}
            <ul>
            {item.subitems.map((subitem) => (
              <li className='body-2' key={subitem.id}>{subitem.name}</li>
            ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </footer>
  );
}
