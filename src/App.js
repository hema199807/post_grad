import React, {useState,useEffect} from 'react';
import './App.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '3px',
      backgroundColor: 'black',
      border: 'solid 2px brown',
      width: '50%',
      height: '70%',
  }
};

function App() {
  const [modalIsOpen,setModal]=useState(false);
  const [styleCss1,setStyleCss1]=useState("far fa-star beforegrading");
  const [styleCss2,setStyleCss2]=useState("far fa-star beforegrading");
  const [styleCss3,setStyleCss3]=useState("far fa-star beforegrading");
  const [styleCss4,setStyleCss4]=useState("far fa-star beforegrading");
  const [styleCss5,setStyleCss5]=useState("far fa-star beforegrading");
  const [styleCssC1,setStyleCssC1]=useState("far fa-star beforegrading");
  const [styleCssC2,setStyleCssC2]=useState("far fa-star beforegrading");
  const [styleCssC3,setStyleCssC3]=useState("far fa-star beforegrading");
  const [styleCssC4,setStyleCssC4]=useState("far fa-star beforegrading");
  const [styleCssC5,setStyleCssC5]=useState("far fa-star beforegrading");
  const [styleCssU1,setStyleCssU1]=useState("far fa-star beforegrading");
  const [styleCssU2,setStyleCssU2]=useState("far fa-star beforegrading");
  const [styleCssU3,setStyleCssU3]=useState("far fa-star beforegrading");
  const [styleCssU4,setStyleCssU4]=useState("far fa-star beforegrading");
  const [styleCssU5,setStyleCssU5]=useState("far fa-star beforegrading");
  const [reviewValue,setReviewValue]=useState("");
  const [c1,setc1]=useState(0);
  const [c2,setc2]=useState(0);
  const [c3,setc3]=useState(0);
  const [total,setTotal]=useState(0);
  const [mArr,setmArr]=useState([]);
  const [count,setCount]=useState(0);
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('arr'))){
    setmArr(JSON.parse(localStorage.getItem('arr')));
   
    let c=0;
    let a=JSON.parse(localStorage.getItem('arr'));
    setCount(a.length);
    for(let i=0;i<a.length;i++){
      c =Number(c)+Number(a[i].avg)
    }
    setTotal(Number(c)/a.length);
    }
  },[])
  function handleOpen(){
    setModal(true);
  }
  function handleClose(){
    setModal(false);
  }
  function handleSubmit(){
    setModal(false);
    const obj={
      "exp":c1,
      "cle":c2,
      "und":c3,
      "avg":Math.round((c1+c2+c3)/3),
      "rev":reviewValue
    }
    let localArr=JSON.parse(localStorage.getItem('arr'))===null?[]:JSON.parse(localStorage.getItem('arr'));
    localArr.push(obj);
    console.log(localArr)
    localStorage.setItem('arr',JSON.stringify(localArr));
    setmArr(JSON.parse(localStorage.getItem('arr')));
    setStyleCss1("far fa-star beforegrading");
    setStyleCss2("far fa-star beforegrading");
    setStyleCss3("far fa-star beforegrading");
    setStyleCss4("far fa-star beforegrading");
    setStyleCss5("far fa-star beforegrading");
    setStyleCssC1("far fa-star beforegrading");
    setStyleCssC2("far fa-star beforegrading");
    setStyleCssC3("far fa-star beforegrading");
    setStyleCssC4("far fa-star beforegrading");
    setStyleCssC5("far fa-star beforegrading");
    setStyleCssU1("far fa-star beforegrading");
    setStyleCssU2("far fa-star beforegrading");
    setStyleCssU3("far fa-star beforegrading");
    setStyleCssU4("far fa-star beforegrading");
    setStyleCssU5("far fa-star beforegrading");
    setReviewValue("");
    setc1(0);
    setc2(0);
    setc3(0);
    let b=JSON.parse(localStorage.getItem('arr'));
    setCount(b.length);
    let c=0;
    for(let i=0;i<b.length;i++){
      c =Number(c)+Number(b[i].avg)
    }
    setTotal(Number(c)/b.length);
  }

  return (
    <div>
      <div id="postContent">
        <p>some post some post some post some post some post some post some post some post some post some post some post some post some post some post some post some post some post some post some post some post some post  some post some post some post some post some post some post some post some post some post some postsome post some post some post some post adding grades click on star icon</p>
      </div>
      <div id="icons">
        <i className="far fa-thumbs-up blue"></i>
        <i className="far fa-comment-alt blue"></i>
        <i className="far fa-star grading" onClick={handleOpen}></i>
      </div>
      <div id="total-grade">
        <i className="fas fa-star beforegrading"><span style={{color:'black',marginLeft:5+'px'}}>{total}</span></i>
        <p id="tg">{count} Total grade</p>
      </div>
      <hr style={{marginTop:30+'px',marginLeft:385+'px',width:45+'%'}}/>
      {mArr.length!==0 && mArr.map((item,index)=>{
        return  <div className='dis' key={index}>
        <div>
        <div><span style={{marginLeft:10+'px',marginRight:10+'px'}}>{item.exp}</span><span><i className="fas fa-star beforegrading" style={{marginRight:10+'px'}}></i></span>Explanation</div>
        <div><span style={{marginLeft:10+'px',marginRight:10+'px'}}>{item.cle}</span><span><i className="fas fa-star beforegrading" style={{marginRight:10+'px'}}></i></span>Cleanliness</div>
        <div><span style={{marginLeft:10+'px',marginRight:10+'px'}}>{item.und}</span><span><i className="fas fa-star beforegrading" style={{marginRight:10+'px'}}></i></span>Understanding</div>
        <div>{item.rev}</div>
        </div>
        <div>
        <i className="fas fa-star beforegrading avg-grade"><span style={{color:'black',marginLeft:5+'px'}}>{item.avg}</span></i>
        <p style={{marginTop:0}}>average grade</p>
        </div>
      </div>
      })}
     
      <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            ariaHideApp={false}
        >
            <button className="btn btn-sm btn-danger" style={{ float: 'right'}} onClick={handleClose}>❌</button>
            <div>
              <h5 className="headding">Explanation</h5>
              <div className="grading-modal">
              <i className={styleCss1} onClick={()=>styleCss1 !=="fas fa-star beforegrading"?setStyleCss1("fas fa-star beforegrading",setc1(c1+1)):setStyleCss1("far fa-star beforegrading",setc1(c1-1))} ></i>
              <i className={styleCss2} onClick={()=>styleCss2 !=="fas fa-star beforegrading"?setStyleCss2("fas fa-star beforegrading",setc1(c1+1)):setStyleCss2("far fa-star beforegrading",setc1(c1-1))} ></i>
              <i className={styleCss3} onClick={()=>styleCss3 !=="fas fa-star beforegrading"?setStyleCss3("fas fa-star beforegrading",setc1(c1+1)):setStyleCss3("far fa-star beforegrading",setc1(c1-1))} ></i>
              <i className={styleCss4} onClick={()=>styleCss4 !=="fas fa-star beforegrading"?setStyleCss4("fas fa-star beforegrading",setc1(c1+1)):setStyleCss4("far fa-star beforegrading",setc1(c1-1))} ></i>
              <i className={styleCss5} onClick={()=>styleCss5 !=="fas fa-star beforegrading"?setStyleCss5("fas fa-star beforegrading",setc1(c1+1)):setStyleCss5("far fa-star beforegrading",setc1(c1-1))} ></i>
              </div>
              <h5 className="headding">Cleanliness</h5>
              <div className="grading-modal">
              <i className={styleCssC1} onClick={()=>styleCssC1 !=="fas fa-star beforegrading"?setStyleCssC1("fas fa-star beforegrading",setc2(c2+1)):setStyleCssC1("far fa-star beforegrading",setc2(c2-1))} ></i>
              <i className={styleCssC2} onClick={()=>styleCssC2 !=="fas fa-star beforegrading"?setStyleCssC2("fas fa-star beforegrading",setc2(c2+1)):setStyleCssC2("far fa-star beforegrading",setc2(c2-1))} ></i>
              <i className={styleCssC3} onClick={()=>styleCssC3 !=="fas fa-star beforegrading"?setStyleCssC3("fas fa-star beforegrading",setc2(c2+1)):setStyleCssC3("far fa-star beforegrading",setc2(c2-1))} ></i>
              <i className={styleCssC4} onClick={()=>styleCssC4 !=="fas fa-star beforegrading"?setStyleCssC4("fas fa-star beforegrading",setc2(c2+1)):setStyleCssC4("far fa-star beforegrading",setc2(c2-1))} ></i>
              <i className={styleCssC5} onClick={()=>styleCssC5 !=="fas fa-star beforegrading"?setStyleCssC5("fas fa-star beforegrading",setc2(c2+1)):setStyleCssC5("far fa-star beforegrading",setc2(c2-1))} ></i>
              </div>
              <h5 className="headding">Understanding</h5>
              <div className="grading-modal">
              <i className={styleCssU1} onClick={()=>styleCssU1 !=="fas fa-star beforegrading"?setStyleCssU1("fas fa-star beforegrading",setc3(c3+1)):setStyleCssU1("far fa-star beforegrading",setc3(c3-1))} ></i>
              <i className={styleCssU2} onClick={()=>styleCssU2 !=="fas fa-star beforegrading"?setStyleCssU2("fas fa-star beforegrading",setc3(c3+1)):setStyleCssU2("far fa-star beforegrading",setc3(c3-1))} ></i>
              <i className={styleCssU3} onClick={()=>styleCssU3 !=="fas fa-star beforegrading"?setStyleCssU3("fas fa-star beforegrading",setc3(c3+1)):setStyleCssU3("far fa-star beforegrading",setc3(c3-1))} ></i>
              <i className={styleCssU4} onClick={()=>styleCssU4 !=="fas fa-star beforegrading"?setStyleCssU4("fas fa-star beforegrading",setc3(c3+1)):setStyleCssU4("far fa-star beforegrading",setc3(c3-1))} ></i>
              <i className={styleCssU5} onClick={()=>styleCssU5 !=="fas fa-star beforegrading"?setStyleCssU5("fas fa-star beforegrading",setc3(c3+1)):setStyleCssU5("far fa-star beforegrading",setc3(c3-1))} ></i>
              </div>
              <div className="rev-headding">Review:</div>
                <textarea id="text-area" spellCheck="false" onChange={(e)=>setReviewValue(e.target.value)}></textarea>
            </div>
            <button id="sub-btn" onClick={handleSubmit}>Submit</button>
        </Modal>
    </div>
  );
}

export default App;
