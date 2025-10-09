export function H2({children}: {children: React.ReactNode}){
    return(
        <div className={"flex w-full items-center"}>
            <div className="grow border-b-2 border-black opacity-10"></div>
            <div className="md:text-3xl text-2xl w-fit px-4">{children}</div>
            <div className="grow border-b-2 border-black opacity-10"></div>
        </div>
    )
}