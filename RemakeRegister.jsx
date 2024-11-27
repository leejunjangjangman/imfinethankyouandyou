
//  오늘의 학습 계획 : 나 혼자 다시해보는 회원가입폼 만들기
//  비효율적인 회원폼을 만들어보고 주석처리한다
//  효율적인 회원폼을 만들어보며 왜 이렇게 처리가 가능한가를 다시학습한다
//  Ref방식을 활용할 수 있는 UI요소를 찾고 적용해본다
//  코드의 흐름과 사용이유를 알 수 있는 주석 코멘트를 남긴다
//  반드시 회고한다

import { useState } from "react";

//  Set PRD

//  1.유저의 아이디 설정 
//  2.패스워드 설정  
//  3.이름 
//  4.생년월일 
//  5.국적 
//  6.최종 학력(드롭다운)
//  7.사이트 방문 목적(자유란)
//  8. 제출 및 완료 버튼 (미구현 사유 시간부족)
//   8-1 Required 요소가 채워졌을 때만 작동
//   8-2 Required 미입력란 포커스 안내
//   8-3 제출완료 토스트메세지 렌더


// step1. 객체함수선언처리(회원가입컴포넌트 만들기)
// 1-1. 그리고 이 컴포넌트가 객체가 무엇을 갖고있는가에 대한 useState 최초 선언 객체 값 설정하기
// 1-2. 참고로 set함수(ex.setuserid)는 state변수(ex.id)의 최종 리렌더값을 변환시킨다

const RemakeRegister = ()=>{

    const[id, setUserid] =useState();
    const[psw, setPsw] = useState();
    const[name, setName] = useState();
    const[birth, setBirth] = useState();
    const[counrty, setCountry] = useState();
    const[education, setEducation] = useState();
    const[visit, setVisit] = useState();

// step2. return의 객체 속성으로 기본적인 인풋필드를 생성시킨다 (placeholder, datepicker, drowdown etc)
// step3. 최초 함수객체에 속하는 여러 const의 state변수에 input값을 "전달하기 위한 이벤트핸들러를 타겟팅" 하는 함수를 만든다
// 3-1 그 이유는 Return에서 입력이벤트가 발생할 때마다 "인풋되는 값의 변경사항을 타겟팅하여 전달하기 위해서다"
// 3-2 따라서 return(반환값)에서 이를 타겟팅이 되는 요소로서  이벤트핸들러를 선언해주어야한다. e.g onChnage = {타겟팅함수변수}
// step final. 최초컴포넌트함수선언의 useState의 매개변수에 입력값이 전달 잘 되었는지 console.log(state변수)를 이용하여 리렌더링 시 값의 변경을 확인한다

//step3 참고 : 이벤트핸들러를 팔로잉할 변수를 수 있다 
    const onchangeId = (e) =>{
       setUserid(e.target.value) 
    }
    const onchangePsw = (e) =>{
        setPsw(e.target.value) 
     }
     const onchangeName = (e) =>{
        setName(e.target.value) 
     }
     const onchangeBirth = (e) =>{
        setBirth(e.target.value) 
     }
     const onchangeCountry = (e) =>{
        setCountry(e.target.value) 
     }
     const onchangeEducation = (e) =>{
        setEducation(e.target.value) 
     }
     const onchangeVisit = (e) =>{
        setVisit(e.target.value) 
     }


    return(
        <>
        <h3> 환영합니다 </h3>
        <p> 회원가입을 진행해주세요 </p>


        <div>
            <h5>아이디 설정</h5>
        <input
        value = {id}
        onChange={onchangeId} 
        placeholder="아이디를 입력하세요"/>
        </div>

        <div>
            <h5>비밀번호 설정</h5>
        <input
        value = {psw}
        onChange={onchangePsw}
        placeholder="비밀번호는 8자리 이상" 
        type="password"/>
        </div>


        <div>
            <h5>멋진 이름을 알려주세요</h5>
            <input 
            value = {name}
            onChange={onchangeName}
            placeholder="이름을 입력하세요"/>
        </div>


        <div>
            <h5>생일을 알려주세요</h5>
            <input
            value = {birth}
            onChange={onchangeBirth} 
            type = "date"/>
        </div>


        <div>
            <h5>어떤 나라에 살고계시나요?</h5>
            <select value ={counrty} onChange={onchangeCountry}>

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
            <select value ={education} onChange={onchangeEducation}>

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
        <textarea value={visit}
        onChange={onchangeVisit} 
        placeholder="자유롭게 작성해주세요. 예: 취업을 위해서 방문했어요"/>
        </div>

        
        {id} {psw} {name} {birth} {counrty} {education} {education} {visit}
        </>
        
    )
};

export default RemakeRegister;