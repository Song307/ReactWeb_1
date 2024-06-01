import "./page.css"
import "./page_button.css"

function page1() {
    return (
      <div className="">
        <center>
       <header className="mainfield">
        <nav className="navfield">
          <h1><b>CONTENT</b></h1>
          <hr/>
          <a href="/"><button class="btn-hover color-6">🌎</button></a>
          <a href="/"><button class="btn-hover color-6">⛅</button></a>
          <a href="/"><button class="btn-hover color-6">💻</button></a>
          <a href="/"><button class="btn-hover color-6">📃</button></a>
        </nav>
    



        <div className="textbox">
          <maintitle><b> [$] 페이지의 메인 타이틀 영역</b></maintitle><br/>
          <time_post>2024-05-16</time_post>
          <hr/>

          <p>2024 1학기 웹프론트앤드 과목을 공부하며 react 사용법을 배우고 기존에 공부하던 HTML및 CSS 파일을 적용시킨 프로젝트입니다. 추후 Javascript를 이용한 다양한 예제를 추가하고 기록할 예정입니다.
          </p>
          <hr/>


          <h2>HTML&CSS 리액트로 시작하기</h2>
          <p> 1. Visual Studio Code 프로그램을 열어 터미널을 통해 해당 디렉토리로 이동합니다. <br/>
            2. 터미널 창에 <b>'npm install'</b>를 입력하여 노드 모듈을 설치합니다. <br/>
            3. <b>'npm install react-bootstrap bootstrap'</b>를 입력하여 bootstrap 모듈을 설치합니다. <br/>
            4. <b>'npm install react-router-dom '</b>를 입력하여 router-dom 모듈을 설치합니다.<br/>
            5. 실행 : <b>'npm run start'</b> 을 입력하여 localhost:3000으로 호스팅을 실행합니다.
          </p>
          

          <hr/>
          <h2>README.md</h2>
          <h3># Getting Started with Create React App </h3>
          This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br/> <br/>

          <h3>## Available Scripts <br/></h3>

          In the project directory, you can run: <br/> <br/>

          <h3>### `npm start` <br/></h3>

          Runs the app in the development mode.\ <br/>
          Open [http://localhost:3000](http://localhost:3000) to view it in your browser. <br/>

          The page will reload when you make changes.\ <br/>
          You may also see any lint errors in the console. <br/> <br/>



          <h3>### `npm install react-bootstrap bootstrap` <br/></h3>

          modules to switch Many page <br/>

          import 'bootstrap/dist/css/bootstrap.css'; <br/>
          import 'bootstrap/dist/css/bootstrap.min.css'; <br/> <br/>


          <h3>### 'npm i react-router-dom ' <br/></h3>
          install react-router-dom. <br/>
          <hr/>
          <h2>Navigation.js 영역 소개</h2>
          <p>
            TCP School : HTML 및 CSS를 공부할 때 참고하던 사이트입니다. <br/>
            Reference : HTML5+ CSS3+ Javascript 웹 프로그래밍 교재 부록 사이트 입니다 <br/>
            My domain : 무료 호스팅 사이트입니다. <br/>
            imgBB : 이미지 업로딩을 위한 사이트 입니다.<br/>
            Bizhow : 이미지 편집 및 로고 제작 사이트 입니다. <br/>
            
          </p>
          <hr/>
          
          
    



        </div>



       </header>
       </center>


    </div>
    
      
    );
  }

  export default page1;