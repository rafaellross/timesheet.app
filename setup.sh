start mysql_start.bat
npm install
cd api
composer install
mysql\bin\mysql -uroot < mysql\bin\start.sql
php artisan migrate
php artisan db:seed
start php artisan serve
cd ..
start ng serve --open