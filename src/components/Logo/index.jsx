import IconLogo from '../../assets/images/Vector.svg';
import ImageLogo from '../../assets/images/DigitalStore.svg';
import { ContainerLogo } from './styles';

export const Logo = () => {
  return (
    <ContainerLogo>
      <div>
        <img src={IconLogo} alt='Logo Icon' className='icon-logo' />
      </div>
      <div>
        <img src={ImageLogo} alt='Logo Image' className='image-logo' />
      </div>
    </ContainerLogo>
  );
};
