import banner from '../../assets/image/banner.png'
const Banner = () => {
  return (
    <div className='lg:flex items-center justify-between'>
      <div className='flex flex-col gap-2 max-w-2xl'>
          <h2 className='font-bold text-3xl'>Hello It's Me</h2>
          <h1 className='font-bold text-4xl'>Abdur Rhaman Babu</h1>
          <h2 className='font-bold text-3xl'>I'm A <span>Frontend Web Developer</span></h2>
          <p>I am a frontend web developer specializing in creating responsive, interactive, and user-friendly websites. Passionate about design and seamless user experiences.</p>
          <div>

          </div>
      </div>
      <div>
          <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
