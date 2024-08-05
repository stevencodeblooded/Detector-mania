import { Link } from 'react-router-dom'
import article from '../../assets/img_article_2.jpg'

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto px-2 my-10'>
        <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row gap-5">
            <div className=" md:col-span-2">
                <Link to={''} className='relative text-white group'>
                    <div className='relative rounded-2xl'>
                        <img src={article} alt="" className='w-full h-full object-cover rounded-2xl' />
                        <div className='absolute inset-0 bg-gradient-to-t from-[rgba(4,120,87,0.7)] via-[rgba(4,120,87,0.7)] to-transparent transition-all duration-500 ease-in-out group-hover:from-[rgba(4,120,87,0.8)] group-hover:via-[rgba(4,120,87,0.8)]'></div>
                        <div className='flex flex-col gap-3 w-2/3 absolute bottom-7 lg:bottom-14 left-7 lg:left-14 z-10'>
                            <h3 className='font-semibold'>Emilio G.</h3>
                            <p className='text-base lg:text-3xl font-semibold'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi repellat consequuntur voluptatibus.
                            </p>
                            <p className='text-sm lg:text-lg'>News</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className=" md:col-span-1 flex flex-col gap-5">
                <Link to={''} className='relative text-white group'>
                    <div className='relative rounded-2xl'>
                        <img src={article} alt="" className='w-full h-full object-cover rounded-2xl' />
                        <div className='absolute inset-0 bg-gradient-to-t from-[rgba(4,120,87,0.7)] via-[rgba(4,120,87,0.7)] to-transparent transition-all duration-500 ease-in-out group-hover:from-[rgba(4,120,87,0.8)] group-hover:via-[rgba(4,120,87,0.8)]'></div>
                        <div  className='flex flex-col gap-2 lg:gap-3 w-2/3 absolute bottom-7 lg:bott0 left-7 z-10'>
                            <h3 className='font-semibold'>Emilio G.</h3>
                            <p className='text-base xl:text-2xl font-semibold'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </p>
                            <p className='text-sm lg:text-lg'>News</p>
                        </div>
                    </div>
                </Link>
                <Link to={''} className='relative text-white group'>
                    <div className='relative rounded-2xl'>
                        <img src={article} alt="" className='w-full h-full object-cover rounded-2xl' />
                        <div className='absolute inset-0 bg-gradient-to-t from-[rgba(4,120,87,0.7)] via-[rgba(4,120,87,0.7)] to-transparent transition-all duration-500 ease-in-out group-hover:from-[rgba(4,120,87,0.8)] group-hover:via-[rgba(4,120,87,0.8)]'></div>
                        <div  className='flex flex-col gap-2 lg:gap-3 w-2/3 absolute bottom-7 lg:bott0 left-7 z-10'>
                            <h3 className='font-semibold'>Emilio G.</h3>
                            <p className='text-base xl:text-2xl font-semibold'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </p>
                            <p className='text-sm lg:text-lg'>News</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero