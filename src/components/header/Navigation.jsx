import { NavLink } from "react-router-dom";


const Navigation = ({navbtn}) => {
  const navItems=[
    {name: 'Home', slug:'/'},
    {name: 'Courses', slug:'#'},
    {name: 'About Us', slug:'/about-us'},
    {name: 'Contact Us', slug:'/contact'},
  ]
  var className='hidden'
  var liClass=''
  if(!navbtn)
  {
    className='h-1 ';
    liClass='';
  }else{
    className='flex flex-col bg-white  lightShadow h-52 dark:bg-primary-dark ';
    liClass='border-y  border-border-dark  rounded-none ';
  }

  
  return (
    <ul className={`navShadow  w-full text-primary-grayText font-bold lg:gap-2 overflow-hidden  absolute  top-16 left-0 z-10 ${className} md:shadow-none md:w-auto md:py-2 md:px-4 md:flex md:static md:h-auto md:items-center transition-height duration-300`}>
      {
        navItems.map((item)=>(

        <li  
          className={`px-7  py-3 rounded-lg hover:bg-primary-light hover:text-primary cursor-pointer ${liClass} transition-colors duration-300 dark:text-dark-nav`} 
          key={item.name}
        >
          <NavLink to={item.slug}>{item.name}</NavLink>
        </li>
        ))
      }
    
    </ul>
  )
}

export default Navigation