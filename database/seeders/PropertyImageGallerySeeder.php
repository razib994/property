<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PropertyImageGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('property_image_galleries')->insert(array (
            0 => 
            array (
                'id' => 1,
                'property_id' =>1,
                'status' => 1,
                'images'=>'/images/1.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            1 => 
            array (
                'id' => 2,
                'property_id' =>1,
                'status' => 1,
                'images'=>'/images/2.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            2 => 
            array (
                'id' => 3,
                'property_id' =>1,
                'status' => 1,
                'images'=>'/images/3.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            )
        ));
    }
}
