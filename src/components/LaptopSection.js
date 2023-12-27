import laptop from '../images/computer.png'
export const LaptopSection = () => {

  return (
    <section className='laptopSection grid__desktop'>
      <h2 className='heading__h2'>Lorem ipsum dolor sit amet</h2>
      <div className='laptopSection__dropdown' >
        <div className='laptopSection__dropdown__title active'>
          <h4>Lorem ipsum</h4>
          <span className='arrow-bottom'></span>
        </div>
        <div className='laptopSection__dropdown__info'>
          <img src={laptop} className='body-1' alt='imagen ordenador' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet tortor diam habitasse tristique morbi tempus. Auctor semper diam dignissim turpis nisl ultricies tellus mi. Metus.</p>
        </div>
      </div>
      <div className='laptopSection__dropdown' >
        <div className='laptopSection__dropdown__title'>
          <h4>Lorem ipsum</h4>
          <span className='arrow-right'></span>
        </div>
      </div>
      <div className='laptopSection__dropdown' >
        <div className='laptopSection__dropdown__title'>
          <h4>Lorem ipsum</h4>
          <span className='arrow-right'></span>
        </div>
      </div>
    </section >
  );
}