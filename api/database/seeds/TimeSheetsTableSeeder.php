<?php

use Illuminate\Database\Seeder;
use App\TimeSheet;
use App\Employee;
use App\User;
class TimeSheetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        TimeSheet::truncate();
        
                $faker = \Faker\Factory::create();        
                // And now, let's create a few articles in our database:
                //protected $fillable = ['employee_id', 'tm_date', 'day_number', 'tm_week', 'start', 'end', 'tm_interval'];
                
                for ($i = 0; $i < 50; $i++) {
                    $start = $faker->numberBetween($min = 0, $max = 60*24);
                    TimeSheet::create([
                        'employee_id' => $faker->randomElement(Employee::pluck('id')->toArray()),
                        'user_id' => $faker->randomElement(User::pluck('id')->toArray()),
                        'tm_date' => $faker->dateTimeBetween($startDate = '-90 days', $endDate = 'now'),
                        'day_number' => $faker->numberBetween($min = 1, $max = 7),
                        'tm_week' => $faker->dateTimeBetween($startDate = '-90 days', $endDate = 'now'),
                        'start' => $start,
                        'end' => $faker->numberBetween($min = $start, $max = 60*24),
                        'tm_interval' => $faker->numberBetween($min = 0, $max = 60*2)
                    ]);
                }            
    }
}
