export default function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-12 py-12 border-t-2 border-zinc-800">
            <p className="text-white">Stephen Finegan </p>
            <p className="text-white">{new Date().getFullYear()}</p>
        </div>
    )
}