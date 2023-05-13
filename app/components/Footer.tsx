export default function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-12 py-12  border-zinc-800 dark:text-white text-zinc-900">
            <p >Stephen Finegan </p>
            <p >{new Date().getFullYear()}</p>
        </div>
    )
}