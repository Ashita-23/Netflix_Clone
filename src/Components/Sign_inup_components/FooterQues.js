import {acordionData} from "../../utils/hardCodedData"

const FooterQues = ()=>{
    console.log(acordionData,"AD")
    return(<div className="mt-[2rem] border border-red-300 flex flex-col items-center" >
        <h1 className="text-white p-2 text-3xl font-bold">Frequently Asked Questions</h1>
{ acordionData?.map((data)=>{return(<div className="text-white w-8/12 border border-white m-2">
            <p className=" mb-[0.2rem] bg-[#2d2d2d] text-2xl p-4">{data.hText} <button>+</button></p>
            {/* <p className="border border-green-500 bg-[#2d2d2d] text-2xl p-4 ">{data.bText}</p> */}
        </div>)})}

        
    </div>)
}

export default FooterQues