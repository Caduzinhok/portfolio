export default function Introduction() {
    return (
        <div className="max-w-full flex justify-center items-center m-24">
            <div className="flex flex-wrap justify-center items-start m-5">
                <div className="min-w-2/5 flex items-center justify-center p-5">
                    <div className="px-24">
                        <div className="w-[30rem] h-[30rem] bg-[url('/foto-principal.png')] bg-top bg-cover bg-no-repeat rounded-xl" >
                        </div>
                    </div>
                </div>
                <div className="w-2/5 break-words mt-24">
                    <h1 className="text-4xl p-2">
                        Hello, I'm Carlos.
                    </h1>

                    <p className="text-9xl font-bold">
                        Software Developer 
                    </p>

                    <p className="text-3xl p-2 job">
                        Know a little about my job
                    </p>

                </div>
                
            </div>
        </div>
    );
}