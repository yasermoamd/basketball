import { Footer } from "../../components";

export default function ContactUs() {
    return (
      <main className="flex justify-center flex-col">
        <section className='
             desktop:ml-[35rem] desktop:mt-[6rem]
             laptop:ml-[4.5rem] laptop:mt-[4.8rem] tablet:ml-[6.5rem] tablet:mt-[4.6rem]'>
       <div className=" bg-[#202020] flex justify-center w-[800px] h-[520px]">
            <div className='bg-[#282828] mt-3 w-[780px] h-[497px] shadow-lg rounded-md text-[#d8d8d8] p-4 flex flex-col'>
                <h1 className='text-[2rem] font-bold font-serif'>BasketballNews.com Contact Information</h1>
                <p>
                   General questions: <span className="underline decration-1">info@basketballnews.com</span>
                </p>
                <p className="flex flex-col gap-2 text-[14px] font-bold font-[Rubik-Medium]">
                BasketballNews.com is owned and operated by Basketball News International LLC located at:
                <span>7321 E Sixth Ave</span>
                <span>Scottsdale, AZ 85251</span>
                <span>United States</span>
                </p>
                <p className='text-[18px] font-medium font-serif'>
                BasketballNews.com features in-depth basketball news, rumors, articles and 
                podcasts from our staff of professional basketball journalists and both former 
                and current basketball players and coaches. We also specialize in stats and data 
                visualization that can provide our users with a unique way to compare and analyze 
                their favorite teams and players. 
                </p>

                <p className="flex flex-col gap-3">
                    <span className='underline'> Terms Of Use</span>
                    <span className='underline'>Privacy Policy</span>
                </p>
            </div>
         </div>
        </section>
        <div className='laptop:ml-[6.6rem] desktop:mt-[4rem]  w-[800px] min-h-screen'>
                <div className='desktop:ml-[16.5rem]'>
                    <Footer />
                </div>
              </div>
      </main>
    )
}