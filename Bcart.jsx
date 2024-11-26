import { useState } from "react";

//카트 컴포넌트의 기능
//1.2가지 선택지의 상품군을 카트에 담는다 (완료)
//2. 각각의 상품은 증감소가 가능하다 (완료)
//3. 각각 담은 상품의 총 수량은 종류별로 확인할 수 있다(완료)
//4. 증감소에는 수량적 제한이 있다(완료)(복습필요)
//4. 수량적 제한의 값에 도달 했을 때 유저에게 알림을 제공한다
//5. 카트를 한번에 리셋한다 

//장바구니 함수 컴포넌트 만들기
const Bcart =() => {

    const[cart, setCart]=useState({
        jelly : 0,
        cookie : 0,
    });

// 최대 최소 값 도달시 등장하는 "토스트" 변수 선언
    const[toastMessage, setToastMessage]=useState("")
    const[showMessage, setShowMessage]=useState(false)

//제공 될 수 있는 과자류의 최대 갯수 변수 선언
    const maxJelly = 10;
    const maxCookie = 10;

//하 이놈 어렵다... 장바구니 업데이트 함수선언
const updateCart = (item, amount) => {
    setCart((a) => {
        const NewQuantity = a[item] + amount;

        // 젤리 수량 제한
        if (item === "jelly" && (NewQuantity > maxJelly || NewQuantity < 0)) {
            setToastMessage(
                NewQuantity > maxJelly ? "더 이상 담을 수 없어요" : "더 이상 뺄 게 없어요"
            );
            setShowMessage(true);
            return a;
        }

        // 쿠키 수량 제한
        if (item === "cookie" && (NewQuantity > maxCookie || NewQuantity < 0)) {
            setToastMessage(
                NewQuantity > maxCookie ? "더 이상 담을 수 없어요" : "더 이상 뺄 게 없어요"
            );
            setShowMessage(true);
            return a;
        }

        // 정상적으로 상태 업데이트
        return {
            ...a,
            [item]: NewQuantity,
        };
    });

//  오류의 주범 왜 그런지 알 수 없다...토스트 메세지 자동 사라지게 하기 
    // setTimeout(() => {
    //     showMessage(false)
        
    // }, 2000);
};


    return(

        <>
        <p>세계다과백화점</p>
        <h2>원하시는 과자를 담아주세요</h2>

        <div>
            <h3>현재 젤리는 {maxJelly}개 남아있어요</h3>
            <h4>장바구니에{cart.jelly}개 담을래요</h4>
            <button onClick={()=>[
                updateCart("jelly", -1)
            ]}>빼기</button>

            <button onClick={()=>[
                updateCart("jelly", +1)
            ]}>담기</button>
        </div>


        <div>
            <h3>현재 쿠키는 {maxCookie}개 남아있어요</h3>
            <h4>장바구니에{cart.cookie}개 담을래요</h4>
            <button onClick={()=>[
                updateCart("cookie", -1)
            ]}>빼기</button>

            <button onClick={()=>[
                updateCart("cookie", +1)
            ]}>담기</button>
        </div>


        {showMessage && ( 
            <div>
                *** {toastMessage} ***
            </div>
        )};
                
                
      
        </>
    )
};




export default Bcart;