/* eslint-disable react/prop-types */


const Total = ({total}) => {
    return (
        <div>
            <h1 className=" bg-slate-400 text-black p-4 font-bold text-2xl mt-5">Total Price:{total}</h1>
            <button className="btn btn-secondary mt-5">Purchase</button>
        </div>
    );
};

export default Total;