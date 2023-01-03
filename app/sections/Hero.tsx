import Socials from "../components/Socials"
export default function Hero() {
    return (
        <div className="w-full mx-auto h-96 flex flex-col justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Frontend Developer</h1>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">@ Distilled</h1>

        <p className="mt-6 text-base text-zinc-400">
            I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
            </p>
            <Socials />
        </div>
    )
}