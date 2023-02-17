import NewsCard from "../cardComponents/NewsCard";
import postsData from '../../assets/data/posts.data.json';
import FeaturedStaff from "../cardComponents/FeaturedStaff";
import './style.css';

export default function NewsCardList() {
    return (
        <div className='laptop:w-[343px] laptop:h-[23.5rem] flex flex-col gap-4 rounded-sm shadow-xl'>
            <div><FeaturedStaff title={'TOP NEWS'} /></div>
            <div className='components_scroll'>
                <NewsCard posts={postsData} />
            </div>
        </div>
    )
}