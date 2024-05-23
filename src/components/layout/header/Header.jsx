import { useNavigate } from 'react-router-dom'
import CustomLink from '../../links/CustomLink'
import styles from './Header.module.scss'
import logo from '../../../assets/cinema/44.png'

export const companyName = 'MyCompany'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <div className={styles.companyBlock} onClick={() => navigate('/')}>
        <div>
          <img src={logo} alt="logo" width={'40px'} />
        </div>

        <h3>ООО "ДЭМ компани"</h3>
      </div>
      <div className={styles.logoBlock} onClick={() => navigate('/')}></div>

      <nav className={styles.navMenu}>
        <div> </div>
        <div></div>
        <div style={{ display: 'flex', gap: '48px' }}>
          <CustomLink to="/requisites" className="white">
            Реквизиты
          </CustomLink>
          <CustomLink to="/policy-page" className="white">
            Политика конфиденциальности
          </CustomLink>
        </div>
      </nav>
    </div>
  )
}
