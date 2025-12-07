import '../assets/home.css'
import { motion } from "framer-motion";
import { Mic, BookOpen, GraduationCap } from "lucide-react";

function Home(){
    type list = {
        icon: React.ElementType,
        title: string,
        description: string
    }

    const list: list[] = [
        {
            icon: Mic,
            title: 'Engaging Podcasts',
            description: 'Listen to authentic conversations, interviews, and stories that bring the French language to life with Nigerian and African voices.'
        },
        {
            icon: BookOpen,
            title: 'Insightful Blogs',
            description: 'Explore articles on language learning, cultural insights, and tips from experienced educators in the francophone community.'
        },
        {
            icon: GraduationCap,
            title: 'Teaching Pedagogy',
            description: 'Access resources and methodologies designed for teachers who want to make French learning more engaging and culturally relevant.'
        }
    ]


    return(
        <>
            <div className="first">
                <div className="soon">
                    <motion.div
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                        <svg width="7" height="7" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#ef4135" />
                        </svg>

                    </motion.div>
                    Coming Soon
                </div>
                <h1><span style={{color: '#003da5'}}>A toi le</span> micro <span style={{color: '#ef4135'}}>naija</span></h1>
                <ul>
                    <li>Blogs</li>
                    <li>Podcasts</li>
                    <li>Podcasts </li>
                </ul>
                <p>
                    For learners, for teachers, for lovers of the French language. We are building <br /> communities and connecting people with shared interests.
                </p>
            </div>
            <div className="second">
            <div className="title">
                    <h3>What's Coming</h3>
                    <p>Discover a new way to learn, teach, and celebrate the French language with an African perspective.</p>
            </div>
            <div className="items">
                {
                    list.map((item, index) => (
                        <div key={index}  className='card'>
                            <div className='icon'>
                                <item.icon  className='itemIcon'/>
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
            </div>
            {/* <div className="third">
                
            </div> */}
        </>
    )
}

export default Home