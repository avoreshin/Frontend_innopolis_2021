# 30. React. Способы стилизации. Material UI

## Материалы
* [Код с урока](src)
* [Material UI](https://mui.com/)

## Summary
### Инлайн-стилизация
Инлайн стилизация - это использование атрибута `style` у тега.
В отличие от обычной вёрстки, в реакте атрибут `style` на вход принимает не строку, а объект.
В объекте свойства css пишутся в camelCase.<br/>
Сравнение чистого html и темплейта в реакте:
```html
<!-- Чистый html -->
<div style="background-color: red; color: white"></div>
```
```jsx
<div style={{ backgroundColor: 'red', color: white }}></div>
```

Объект можно заранее объявить и передать в атрибут `style`:
```jsx
const title = {
    backgroundColor: 'red',
    color: 'white'
}
function Component() {
    return (
        <h1 style={title}></h1>
    )
}
```

Все стили можно вынести в отдельный файл и экспортировать оттуда:
```jsx
// styles.js
const styles = {
    title: {
        backgroundColor: 'red',
        color: 'white'
    },
    // Свойства могут быть динамическими и возвращать
    // нужный объект в зависимости от переданных параметров
    titleDynamic: (type = 'big') => {
        if (type === 'big') {
            return {
                fontSize: '30px'
            }
        }
        
        if (type === 'small') {
            return {
                fontSize: '14px'
            }
        }
    }
}
```

```jsx
// Component.js
import styles from './styles.js';

function Component() {
    return (
        <div>
            <h1 style={styles.title}>Title</h1>
            
            // Здесь будет большой заголовок с font-size 30px
            <h2 style={styles.titleDynamic('big')}>Title</h2>
        
            // Здесь будет маленький заголовок с font-size 14px
            <h2 style={styles.titleDynamic('small')}>Title</h2>
        </div>
    )
}
```

### Styled-components
Чтобы использовать styled-components, необходимо установить библиотеку:
```shell
npm install styled-components
```

С помощью библиотеки можно выполнять стилизацию в синтаксисе CSS:

```jsx
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: red;
    color: white;
`;

const StyledInput = styled.input`
    font-size: 30px;
`;

function Component() {
    return (
        <div>
            {/* Преобразуемся в обычный div со стилями, которые мы задали выше */}
            <StyledDiv>Hello Styled</StyledDiv>
            {/* Преобразуется в обычный input со стилями, которые задали выше */}
            <StyledInput name={'input'}/>
        </div>
    )
}
```

### CSS-Modules
CSS-модули предполагают импорт CSS файла в качестве объекта:
```jsx
// Обычный импорт css
import './styles.css';

// Импорт в качестве объекта
import styles from './styles.css';

function Component() {
    return (
        <div>
            <div className={'text'}>Использование обычных стилей</div>
            <div className={styles.text}>Использование того же стиля в модулях</div>
            <div className={'text-message'}>Использование обычных стилей</div>
            <div className={styles['text-message']}>Использование того же стиля в модулях</div>
        </div>
    )
}
```

### Material UI
MaterialUI - библиотека компонентов, позволяющая быстро, используя готовые и уже стилизованные компоненты, собрать приложение (сайт)

#### Установка
1. Установить саму библиотеку
```shell
npm install @mui/material
```
1. Если возникла проблема с `@emotion/react`
```shell
npm install @emotion/react
```
1. Если возникла проблема с  `@emotion/styled`
```shell
npm install @emotion/styled
```
