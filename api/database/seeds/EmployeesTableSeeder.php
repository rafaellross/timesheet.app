<?php

use Illuminate\Database\Seeder;
use App\Employee;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        Employee::truncate();
        
                $faker = \Faker\Factory::create();        
                // And now, let's create a few articles in our database:
                for ($i = 0; $i < 50; $i++) {
                    Employee::create([
                        'cod_emp' => $faker->unique()->randomNumber(5),
                        'name' => $faker->unique()->name,
                        'dob' => $faker->dateTimeBetween($startDate = '-50 years', $endDate = '-20 years'),
                        'phone' => $faker->phoneNumber                        
                    ]);
                }        
    }
}
