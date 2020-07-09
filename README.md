## Короче
Сначала инсталишь себе генератор express-проектов
```
npm install -g express-generator
```

После генерируешь проект
```
express --view="ejs" nodetest1
```

Запускать локальный сервер уже умеешь
```
npm start
```

Он тебе стандартную структуру проекта (директории, файлы) сгенерирует, будет также, как у меня в репе тут


Теперь свой готовый проект начинаешь распихивать по нужным папкам - просто посмотри, как тут это сделано.

Все ресурсы раскиданы по папкам в public/, html'ка превратилась в ejs и лежит во views/.

ejs - язык шаблонов js'cовский, сама уже почитаешь, как с ним работать, на данном этапе от html ничем не отличается внутри


Дальше про роутинг - добавили в app.js новый роут /addStudents, туда будет приходить POST запрос со всеми данными с фронта (опять же, смотри здесь, как это конкретно сделано).

Во фронте в форме, которая заполняется, добавил action="/addStudents" - адрес, куда запрос летит, + тебе надо для каждого input'а задать имя (для первых трех для примера задал), чтобы на фронте можно было распарсить все это дело

Ну и все - сейчас там по адресу /addStudents просто отображаются данные, которые к нему прилетели, тебе надо там логику работы с бд сделать, она у тебя вроде уже была

