import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { Header as StyledHeader } from './Header.styles';

export const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <StyledHeader>
      <div>DEMO REACT APP</div>
      <div>
        {i18n.language === 'en' ? (
          <Button label="FR" onClick={() => changeLanguage('fr')} />
        ) : (
          <Button label="EN" onClick={() => changeLanguage('en')} />
        )}
      </div>
    </StyledHeader>
  );
};
