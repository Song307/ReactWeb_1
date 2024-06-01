
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'



function Main() {
  return (
    <div className='MainField'>
    <div className="App">
    <header className="mainheader">

    <h2 className="">
      <div className="title">
        <img src="https://i.ibb.co/93W4731/title-2.png"/>
        <p className='p_1'>Web to Study HTML & CSS</p>
        <div><a href='/Info' className='title_start'><b> 👉시작하기</b></a></div> 
      </div>
      

    </h2>

  </header>
 
    <nav className ="navidd">
    <nav className="navtitle">
    <a href="http://google.co.kr"><button class="btn-hover color-5">Google</button></a>
    <a href="https://www.notion.so/ssongha/"><button class="btn-hover color-5">Notion</button></a>
    <a href="https://www.dongyang.ac.kr/dongyang/index.do"><button class="btn-hover color-5">DMU</button></a>
    <a href="https://eclass.dongyang.ac.kr/login.php"><button class="btn-hover color-5">DMU E-CLASS</button></a>
    <a href="https://github.com/Song307?tab=repositories"><button class="btn-hover color-5">GIT</button></a>
    
    </nav>
    </nav>

    <div className='down_botton'>
      
    </div>



    </div>
    </div>
  );
}
 
export default Main;
