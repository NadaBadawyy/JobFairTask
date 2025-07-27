
export default function Footer() {
  return (
    <>
      <footer className=" mt-10 p-5  bg-gray-300 font-mono dark:bg-[#1F2937] ">
        <div className=" flex justify-center items-center flex-col md:flex-row md:justify-around gap-y-2 ">
          <h2 className="capitalize text-2xl dark:text-white">made by <span className="text-primary font-bold">Nada Badawy</span> </h2>
          <div className="social media flex gap-x-4 text-xl">
          <a href="https://web.facebook.com/nada.badawy.790" target="_plank"><i className="fa-brands fa-facebook hover:text-primary dark:text-white dark:hover:text-primary"></i></a>
          <a href="https://www.linkedin.com/in/nada-badawy-3027b6298/" target="_plank"><i className="fa-brands fa-github hover:text-primary dark:text-white dark:hover:text-primary" ></i></a>
          <a href="https://github.com/NadaBadawyy" target="_plank"><i className="fa-brands fa-linkedin hover:text-primary dark:text-white dark:hover:text-primary"></i></a>
          <a href="mailto:nadabadawy505@gmail.com" target="_plank"><i className="fa-solid fa-envelope hover:text-primary dark:text-white dark:hover:text-primary"></i></a>
          
          
          
          

          </div>
        </div>

      </footer>
    </>
  )
}
