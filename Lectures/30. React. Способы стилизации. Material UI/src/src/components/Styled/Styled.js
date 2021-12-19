import styled from 'styled-components';

const TextComponent = styled.div`
    background-color: red;
    color: white;
`;

const Link = styled.a`
    color: lime;
  
    &:hover {
      color: magenta;
    }
`;

function Styled() {
    return (
        <div>
            <TextComponent>
                Hello Styled!
            </TextComponent>
            <Link href={'https://google.com'}>Ссылка лаймовая</Link>
        </div>
    )
}

export default Styled;
