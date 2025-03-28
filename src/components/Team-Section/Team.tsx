import TeamCard from './TeamCard'
import { MoveDown } from 'lucide-react';
import ronitImg from "../../images/ronit.jpg"
import sayakImg from "../../images/sayak.png"
import joydeepImg from "../../images/joydeep.jpeg"

const Team = () => {
    return (
        <>
            <div id='teamSection' className="w-full h-full my-20">
                <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans border-l-4 border-orange-500">
                    <span className="flex gap-3 items-center">Meet out Team <MoveDown /></span>
                </h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-10 ">
                    <TeamCard img={ronitImg} role={"backend developer"} fullname={"ronit ghosh"} />
                    <TeamCard img={sayakImg} role={"frontend developer"} fullname={"sayak dey"} />
                </div>
            </div>
        </>
    )
}

export default Team
