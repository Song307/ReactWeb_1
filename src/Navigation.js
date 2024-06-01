import './App.css';

function Navigation() {
  return (
    <div>
<header className="headline">
        <header className="headline_contents">
            <nav className="ex1">
              <ul>
                <li><a href="https://www.tcpschool.com/html/intro">TCPschool</a></li>
                <li><a href="http://webprogramming.co.kr/">Reference</a></li>
                <li><a href="https://imgbb.com/">ImgBB</a></li>                     
                <li><a href="https://www.bizhows.com/v/category?mock=free_design_001">Bizhow</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/info">INFO</a></li>          
              </ul>              
            </nav>
      </header>
    <p className="headline_logo">
            <a  href ="http://hub.hs307.kro.kr"/><img src="https://i.ibb.co/R7RLhDc/001-1.png" className="none" width="100px"/>           
    </p>
    <div className='left1'>
    <a href="/"><button class="custom-btn btn-11">🏠</button></a>
    </div>

</header>
  

    </div>
  );
}

export default Navigation;
