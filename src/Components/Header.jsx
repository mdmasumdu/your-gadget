

const Header = () => {
    return (
        <div className="flex container mx-auto p-5">
            {/* part 1 */}
            <div className="flex-1">
            <h1 className='text-2xl font-bold mt-5 text-green-500'>Your Gadget</h1>
                
            </div>

            {/*part 2  */}
           <div className="flex-1">
            <h1 className="text-center text-2xl font-bold mt-5 text-blue-600">Welcome to <span className="text-green-500">Your Gadget</span></h1>

            </div>

               {/* part-03 */}
            <div className="flex-1">
            <h1 className="font-bold text-2xl mt-5 text-right text-green-500 ">Blog</h1>
            </div>
            
        </div>
    );
};

export default Header;