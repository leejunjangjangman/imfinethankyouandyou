import { useState } from "react";

// 한개의 제품에 대한 가장 기본적인 수량 증감소 구조연습

//카운팅 컴포넌트의 기능
//1. 1가지 선택지의 상품군을 카트에 담는다 
//2. 상품은 증감소가 가능하다
//3. 담은 상품의 총 수량을 확인할 수 있다 
//4. 증감소에는 수량적 제한이 있다
 

const Counting = ()=>{
    const [count, setCount]=useState(0);

    return(
        <>
        
        <p>신라면이 총 20개있어요</p>
        <h2>얼마나 원하시나요?</h2>
        {/* 현재수량을표시 */}
        <h3> 내 장바구니 : {count} </h3> 
       
       <div>
        <button onClick={()=>{
            setCount(count > 0 ? count -1 : 0)
        }}>뺄게요</button>
        </div>


        <div>
        <button onClick={()=>{
            setCount(count < 20 ? count + 1 : 20)
        }}>추가할게요</button>
        </div>


        
        </>




    )
}


export default Counting;