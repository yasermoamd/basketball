export default function NewsCard({ posts }) {
    return (
        <div className='bg-[#282828] flex flex-col gap-2 laptop:w-[390px] laptop:h-[23.5rem]'>
             {
                posts.slice(0, 10).map((post) => (
                    <div key={post.id} className=''>
                        <div className='flex justify-center items-center gap-3'>
                        <div className='w-[80px] h-[40px]'>
                          <img src={post.postImg} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[14px] text-[#cacaca]'>{post.title}</h1>
                        <div className='flex justify-start'>
                            <p className='text-[9px] text-[#797979]'>{post.time}</p>
                       </div>
                     </div>
                        </div>
                     <hr className='border-1 border-[#797979] mx-5'  />
                    </div>
                ))
             }
        </div>
    )
}