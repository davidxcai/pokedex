export function SpinningPokeball() {
    return (
        <div className="relative flex justify-center items-center h-full">
            <div className="absolute size-32 bg-white rounded-full"></div>
            <div className="absolute w-32 h-2 z-10 bg-sky-300 animate-spin"></div>
            <div className="absolute size-10 z-20 bg-white border-6 border-sky-300 rounded-full"></div>
        </div>
    );
}
