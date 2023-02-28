<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('locations')->insert(array (
            0 => 
            array (
                'id' => 1,
                'location_name' => 'Gulshan',
                'slug' => 'gulshan',
                'description' => 'Details',
                'image' =>'/location/dhaka.jpeg',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            1 => 
            array (
                'id' => 2,
                'location_name' => 'Banani',
                'slug' => 'banani',
                'description' => 'Details',
                'image' =>'/location/rajshahi.jpg',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            2 => 
            array (
                'id' => 3,
                'location_name' => 'Baridhara',
                'slug' => 'baridhara',
                'description' => 'Details',
                'image' =>'/location/rangpur.webp',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            3 => 
            array (
                'id' => 4,
                'location_name' => 'Bashundhara',
                'slug' => 'bashundhara',
                'description' => 'Details',
                'image' =>'/location/rangpur.webp',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            )
        ));
    }
}
