import { Logo } from './Logo'

export const Header = () => {

  return (
    <header>
      <div className='header grid__desktop'>
        <Logo/>
        <nav class="header__menu">
          <a href='https://www.tecalis.com/es' class="header__menu-icon" title='hh' alt="logo"></a>
          <ul className='header__menu-items'>
            <li>
              <a 
                className='heading__h5'
                href='#section'
                title='enlace a sección'
                aria-label='ir a sección'>
                Section
              </a>
            </li>
            <li>
              <a 
                className='heading__h5'
                href='#section'
                title='enlace a sección'
                aria-label='ir a sección'>
                Section
              </a>
            </li>
            <li>
              <a 
                className='heading__h5'
                href='#section'
                title='enlace a sección'
                aria-label='ir a sección'>
                Section
              </a>
            </li>
            <li>
              <a 
                className='heading__h5'
                href='#section'
                title='enlace a sección'
                aria-label='ir a sección'>
                Section
              </a>
            </li>
            <li>
              <a 
                className='heading__h5'
                href='#section'
                title='enlace a sección'
                aria-label='ir a sección'>
                Section
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}