import { useState } from "react";
//자 이곳의 jsx에서는 RemakeRegister.jsx의 비요율적인 구조를  효율적인 코드구조로 바꿔보도록하자

//  Set PRD (동일)

//  1.유저의 아이디 설정 (required)
//  2.패스워드 설정 (required) 
//  3.이름 (required)
//  4.생년월일 (required)
//  5.국적 
//  6.최종 학력(드롭다운)
//  7.사이트 방문 목적(자유란)
//  8. 제출 및 완료 버튼 
//   8-1 Required 요소가 채워졌을 때만 작동
//   8-2 Required 미입력란 포커스 안내
//   8-3 제출완료 토스트메세지 렌더

// 기존의 회원가입 컴포넌트의 구조는 아래와 같다 
// 조금 생각해보면 모든 요소들은 결국 같은 input이라는 이벤트핸들러 방식으로 값이 전달되는 구조이다
// 또한 최초함수선언 컴포넌트의 값의 역할을 하는 모든 const의 state매개변수가 설정되어 있기 때문에 간단하게 바꿀 수 있는 구조로 파악된다
// 따라서 애초에 컴포넌트선언함수 자체를 다시 설계할 필요가 있다
// 다시 말해서 어차피 이 컴포넌트의 이벤트 발생은 인풋이고 인풋값이 컴포넌트함수의 state변수 값으로 전달되는 것이기 때문에
// 일일이 const를 쪼개서 나눌 필요가 없는 것이다  
 
// const RefactoryRegister = ()=>{

//     const[id, setUserid] =useState();
//     const[psw, setPsw] = useState();
//     const[name, setName] = useState();
//     const[birth, setBirth] = useState();
//     const[counrty, setCountry] = useState();
//     const[education, setEducation] = useState();
//     const[visit, setVisit] = useState();


// 아래의 코드로 구조를 짜면 결국 input이라는 state변수의 값은 setInput라는 set함수가 전닫하고
// set 함수는 useState()의 매개변수 값을
// 받기 때문에 useState가 참조하는 props의 값을 set 함수가 다시 state 변수값에 할당하는 구조로 간단하게 풀어낼 수 있다
// 그러면 여기서 의문점이 생긴다. 이런구조로 값이 할당 된다면 set함수는 useState매개변수 즉 Props를 가져오고 전달하기 때문에
// 결국 Return 반환문에서 먼저 처리하는 이름 입력란의 값을 모든 Props에 할당하거나 이름 입력란에 값만 할당되는 위험성이 있다.
// 이쯤에서 개쩌는 녀석이 필요해진다  그것은 바로 '스프레드 연산자와 이벤트 핸들러 타겟팅을 사용하는 조합'이다 
const RefactoryRegister = () =>{
    
    const[input,setInput] =useState({
        id : "",
        psw : "",
        name : "",
        birth : "",
        country : "",
        education : "",
        visit : "",
    });

//아래의 주석된 코드는 이전 코드의 state변수에  입력발생(이벤트발생)시 전달되는 인풋값을 전달하기 위해서 짜여진 코드이다
// 새롭게 리팩토링 하는 코드의 구조에 맞게 스프레드 연산자가 이때부터 필요해진다고 볼 수 있다 

     // const onchangeId = (e) =>{
    //    setUserid(e.target.value) 


// 스프레드 연산자는 컴포넌트선언의 set함수의 속성값으로 들어가고 이 스프레드 연산자는 최초컴포넌트 선언의
// useState의 props값을 유지한 채 다시 set함수에게 전달하는 특성을 가지고 있다
// 이 특성은 편리하지만 원하는 컴포넌트의 기능에 악영향을 미치기 때문에 '타겟팅'이 필요해진다. 이때 필요한 것이 이벤트 핸들러 타겟팅이다.
// onChange라는 이벤트핸들러함수가 타겟팅할 동적 키값[key]인Props를 생성하고 그 props의 값을 이벤트핸들러 타겟팅방법으로 지정해준다

// 참고로 놀랍게도 onChange 이벤트핸들러 자체를 const의 변수명으로 지정하고 함수로 나타낼 수 있다
// 결국 Return문의 속하는 ui 속성마다 [e.target."타겟지점역할을 하는 변수"] 즉 지금 여기선 name이라는 객체를 뿌려주면 
// 유저가 입력하는 이벤트가 발생할 때마다 새롭게 값을 전달한다
// 다시말해서 예를 들어 유저가 이름을 입력하는Ui에 이름을 지우고 다시 쓰고 할 때마다 이벤트발생!으로 코드는 받아들이기 때문에 리렌더가 계속해서 일어나 
// 더이상 이벤트가 발생하지 않으면 그 값이 state변수의 최종 값이 되는 것이다
// 쉽게 말하면 이벤트는 결국 유저가 Ui와 인터렉션 하는 그 행위 자체를 코드에선 이벤트라고 부르는 것이다  
    const onChange = (e)=>{
        setInput({
            ...input,
            [e.target.name] : e.target.value

        })

    }
    //이제 리턴 반환값으로 와서 name props를 뿌려준다 그리고 그 객체의 값은 useState의 Porps네이밍을 따른다
    // 그리고 기존 리턴문에 value객체의 값도 수정해준다 (input.useState의 객체명)
    return(
        <>
        <h3> 환영합니다 </h3>
        <p> 회원가입을 진행해주세요 </p>


        <div>
            <h5>아이디 설정</h5>
        <input
        name = "id"
        value = {input.id}
        onChange={onChange} 
        placeholder="아이디를 입력하세요"/>
        </div>

        <div>
            <h5>비밀번호 설정</h5>
        <input
        name = "psw"
        value = {input.psw}
        onChange={onChange}
        placeholder="비밀번호는 8자리 이상" 
        type="password"/>
        </div>


        <div>
            <h5>멋진 이름을 알려주세요</h5>
            <input
            name = "name" 
            value = {input.name}
            onChange={onChange}
            placeholder="이름을 입력하세요"/>
        </div>


        <div>
            <h5>생일을 알려주세요</h5>
            <input
            name = "birth"
            value = {input.birth}
            onChange={onChange} 
            type = "date"/>
        </div>


        <div>
            <h5>어떤 나라에 살고계시나요?</h5>
            <select
            name = "country" 
            value ={input.counrty} onChange={onChange}>

                <option>현재 거주 중인 국가를 선택</option>
                <option value = "us"> 미국 </option>
                <option value = "ca"> 캐나다 </option>
                <option value = "uk"> 영국 </option>
                <option value = "kr"> 대한민국 </option>
                <option value = "jp"> 일본 </option>
                <option value = "cn"> 중국 </option>

            </select>
        </div>


        <div>
            <h5>최종 학력을 알려주세요</h5>
            <select
            name = "education" 
            value ={input.education} onChange={onChange}>

                <option>최종 학력을 선택</option>
                <option value = "mid"> 중학교 </option>
                <option value = "high"> 고등학교 </option>
                <option value = "bachelor"> 학사 </option>
                <option value = "master"> 석사 </option>
                <option value = "specail"> 박사 </option>

            </select>
        </div>


        <div>
            <h5>방문목적을 알고싶어요</h5>
        <textarea
        name = "visit" 
        value={input.visit}
        onChange={onChange} 
        placeholder="자유롭게 작성해주세요. 예: 취업을 위해서 방문했어요"/>
        </div>

        
        </>
        
        
    )

} 
    
    

  


   


export default RefactoryRegister;