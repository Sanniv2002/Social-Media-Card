import avatar from '../images/avatar-jessica.jpeg'

export function Card(){
    return <div className="flex-col bg-[#1E1E1F] justify-center text-center rounded-xl">
        <img src={avatar} className="rounded-full h-20 w-20 m-auto mt-10" />
        <h1 className="text-2xl font-medium text-white pt-7">Jessica Randall</h1>
        <h2 className="text-sm text-[#C4F82A]">London, United Kingdom</h2>
        <h2 className="text-white pt-7 pb-5 mx-10 font-thin">"Front-end developer and avid reader."</h2>
        <div className="flex flex-col gap-2">
            <button className="p-2 mx-10 rounded-md bg-[#323233] hover:bg-[#B4D361] transition-colors duration-300">Github</button>
            <button className="p-2 mx-10 rounded-md bg-[#323233] hover:bg-[#B4D361] transition-colors duration-300">Frontend Mentor</button>
            <button className="p-2 mx-10 rounded-md bg-[#323233] hover:bg-[#B4D361] transition-colors duration-300">LinkedIn</button>
            <button className="p-2 mx-10 rounded-md bg-[#323233] hover:bg-[#B4D361] transition-colors duration-300">Twitter</button>
            <button className="p-2 mx-10 mb-6 rounded-md bg-[#323233] hover:bg-[#B4D361] transition-colors duration-300">Instagram</button>
        </div>
    </div>
}