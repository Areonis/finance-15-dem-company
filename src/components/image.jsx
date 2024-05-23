export const LogoBlock = ({logo}) => {
  return (
    <div style={{maxWidth: '200px',  overflow: 'hidden', margin: '0 auto'}}>
      <img src={logo} style={{borderRadius:'50%', width: '200px', height: '200px'}} />
    </div>
  )
}