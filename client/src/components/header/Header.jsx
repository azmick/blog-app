import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleLg">Hatibek</span>
            <span className="headerTitleSm">SAÜ HUKUK ÖĞRENCİSİ</span>
        </div>
        <img className="headerImg" src="https://picsum.photos/id/445/1500/500" alt="" />
    </div>
  )
}

export default Header