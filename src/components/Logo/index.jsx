import IconLogo from '../../assets/images/Vector.svg';
import ImageLogo from '../../assets/images/DigitalStore.svg';
import { ContainerLogo } from './styles';

const Logo = () => {
  return (
    <ContainerLogo>
      <div className='content-icon'>
        <img src={IconLogo} alt='Logo Icon' className='icon-logo' />
      </div>
      <div className='content-image'>
        <img src={ImageLogo} alt='Logo Image' className='image-logo' />
      </div>
    </ContainerLogo>
  );
};

export default Logo;
