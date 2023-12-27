import mobile from '../images/mobile.png'

export const MobileSection = () => {

  return (
    <section className='mobileSection'>
      <div className='mobileSection__text'>
        <span className='mobileSection__text-tag heading__h5' >LOREM</span>
        <h1 className='heading__h1'>
          Lorem ipsum dolor sit amet consectetur adipis
        </h1>
        <p className='body-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis adipiscing in turpis luctus ipsum, amet. Risus ac mauris pellentesque sed nunc nulla accumsan nec. Risus gravida donec tempor feugiat.</p>
      </div>
      <img src={mobile} class="mobileSection__img" alt="Imagen movil" />
    </section>
  );
}