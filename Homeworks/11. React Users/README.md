# 11. React. Информация о пользователях

## Задание
Необходимо создать реакт-приложение, содержащее в себе 2 страницы:
* Страница, отображающая список пользователей
* Страница, отображающая информацию о конкретном пользователе

## Требования
* Данные пользователей загружать с `https://reqres.in/api/users?per_page=12`
* Страница со списком пользователей должна находиться по адресу `localhost:3000/users`
* Страница конкретного пользователя должна находиться по адресу `localhost:3000/users/1`, где вместо 1 - `id` пользователя (id приходят в данных с сервера)
* Список пользователей на странице списка пользователей должен содержать ссылки, нажатие на которые приводит к переходу на страницу конкретного пользователя
* Страница отдельного пользователя должна выводить его информацию (получить данные конкретного пользователя можно используя `https://reqres.in/api/users/1`, где вместо 1 - настоящий `id` пользователя). 
   Можно вывести всю доступную информацию, но имени и фамилии достаточно. Главное, чтобы страницу одного пользователя можно было отличить от страницы другого пользователя.
