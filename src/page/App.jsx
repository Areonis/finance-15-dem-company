import { color } from 'framer-motion'
import Main from './Main'
// import TempBlock from '../components/block'
import styles from './styles/Pages.module.scss'

import logo1 from '../assets/cinema/c1.jpg'
import logo2 from '../assets/cinema/c2.jpg'
import logo3 from '../assets/cinema/c3.jpg'

import img1 from '../assets/cinema/11.png'
import img2 from '../assets/cinema/12.png'
import img3 from '../assets/cinema/13.png'
import { LogoBlock } from '../components/image'

export default function App() {
  return (
    <div className={styles.app}>
      <div style={{ maxWidth: '1124px', margin: '0 auto' }}>
        {/* block 1 */}
        <div
          style={{
            margin: '0 auto',
            padding: '96px 16px',
            textShadow: '1px 2px grey',
          }}
        >
          <h1
            style={{ padding: '24px 0', fontSize: '50px', lineHeight: '120%' }}
          >
            Приложение, которое поможет развивать любой бизнес, который не может
            расшириться самостоятельно.
          </h1>
          <div
            style={{
              padding: '24px 0 100px 0',
              fontSize: '24px',
              lineHeight: '120%',
            }}
          >
            Разработка SMM и рекламных планов и рекламных стратегий для любого
            бизнеса под ключ.
          </div>

          <button
            style={{
              background: 'orange',
              padding: '18px 74px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '24px',
              color: 'white',
            }}
          >
            <a
              href="#part1"
              style={{
                scrollBehavior: 'smooth',
                textDecoration: 'none',
                color: 'white',
              }}
            >
              Читать далее
            </a>
          </button>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '64px',
            }}
          >
            <a href="#part1" style={{ scrollBehavior: 'smooth' }}>
              <div style={{ margin: '0 auto' }} className={styles.animation}>
                <ion-icon
                  name="chevron-down-outline"
                  style={{ fontSize: '64px', color: 'white' }}
                  background="white"
                ></ion-icon>
              </div>
            </a>
          </div>
        </div>

        {/* block 2 */}

        <div
          style={{
            margin: '0 auto',
            padding: '12px 16px 0 16px ',
            textShadow: '1px 2px grey',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.07)',
          }}
          id="part1"
        >
          {[
            {
              text1: ' Бухгалтерия',
              text2:
                ' Полная поддержка новых пользователей и ведение бухгалтерии по всем новым продуктам бизнеса без дополнительного персонала. ',
              text3: 'Инновации - наше кредо.',
            },
            { text1: ' Аудит', logo1: img1, logo2: img2, logo3: img3 },
            {
              text1: 'Консультации ',
              text2:
                ' Консультация по финансовым услугам, банковским продуктам, брокериджу.',
              text3: 'Самая свежая информация финансовых рынков',
            },
          ].map((item) => {
            return (
              <div style={{ flexBasis: '31%' }}>
                <h1
                  style={{
                    padding: '24px 0',
                    fontSize: '42px',
                    lineHeight: '130%',
                    height: '120px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    textAlign: 'center',
                  }}
                >
                  {item.text1}
                </h1>
                <div
                  style={{
                    padding: '24px 0 100px 0',
                    fontSize: '18px',
                    lineHeight: '130%',
                    height: '120px',
                  }}
                >
                  {item?.text2 || <LogoBlock logo={item.logo1} />}
                </div>
                <div
                  style={{
                    padding: '24px 0 20px 0',
                    fontSize: '20px',
                    lineHeight: '130%',
                  }}
                >
                  {item?.text3 || <LogoBlock logo={item.logo2} />}
                </div>
              </div>
            )
          })}

          {/* block - 2   button + arrow */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: ' 24px 0 84px 0',
              }}
            >
              <a href="#part2" style={{ scrollBehavior: 'smooth' }}>
                <div style={{ margin: '0 auto' }} className={styles.animation}>
                  <ion-icon
                    name="chevron-down-outline"
                    style={{ fontSize: '64px', color: 'white' }}
                    background="white"
                  ></ion-icon>
                </div>
              </a>
            </div>
          </div>
        </div>

        <Main />
        {/* <TempBlock /> */}
      </div>
    </div>
  )
}
