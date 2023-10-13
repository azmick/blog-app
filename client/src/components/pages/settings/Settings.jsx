import './settings.css'
import SideBar from '../../sidebar/Sidebar'
function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className='settingsUpdateTitle'>Hesabını Güncelle</span>
                <span className='settingsDeleteTitle'>Hesabını Sil</span>
            </div>
            <form className='settingsForm'>
                <label >Profil Fotoğrafı</label>
                <div className="settingsPP">
                    <img src="https://picsum.photos/id/163/500/500" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                </div>
                <label>Kullanıcı Adı</label>
                <input type="text" placeholder='Kullanıcı adı giriniz' />
                <label>Email</label>
                <input type="email" placeholder='ornek@gmail.com' /> 
                <label>Şifre</label>
                <input type="password" />
                <button className="settingsSubmit">Güncelle</button>
            </form>
        </div>
        <SideBar/>
    </div>
  )
}

export default Settings