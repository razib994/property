<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Apartments for sale',
                'slug' => 'apartments-for-sale',
                'description' => 'Details',
                'status' => 1,
                'image'=>'/images/1.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Single family homes for sale',
                'slug' => 'single-family-homes-for-sale',
                'description' => 'Details',
                'status' => 1,
                'image'=>'/images/2.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Villas for sale',
                'slug' => 'villas-for-sale',
                'description' => 'Details',
                'status' => 1,
                'image'=>'/images/3.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            )
        ));
    }
}
