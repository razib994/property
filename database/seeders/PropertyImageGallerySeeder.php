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
            ),3 => 
            array (
                'id' => 4,
                'property_id' =>1,
                'status' => 1,
                'images'=>'/images/p1.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            4 => 
            array (
                'id' => 5,
                'property_id' =>2,
                'status' => 1,
                'images'=>'/images/p2.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            5 => 
            array (
                'id' => 6,
                'property_id' =>2,
                'status' => 1,
                'images'=>'/images/p3.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),6 => 
            array (
                'id' => 7,
                'property_id' =>2,
                'status' => 1,
                'images'=>'/images/p4.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            7 => 
            array (
                'id' => 8,
                'property_id' =>2,
                'status' => 1,
                'images'=>'/images/p5.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            8 => 
            array (
                'id' => 9,
                'property_id' =>3,
                'status' => 1,
                'images'=>'/images/p6.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),9 => 
            array (
                'id' => 10,
                'property_id' =>3,
                'status' => 1,
                'images'=>'/images/p7.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            10 => 
            array (
                'id' => 11,
                'property_id' =>3,
                'status' => 1,
                'images'=>'/images/p8.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            11 => 
            array (
                'id' => 12,
                'property_id' =>3,
                'status' => 1,
                'images'=>'/images/p9.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),12=> 
            array (
                'id' => 13,
                'property_id' =>4,
                'status' => 1,
                'images'=>'/images/p10.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            13 => 
            array (
                'id' => 14,
                'property_id' =>4,
                'status' => 1,
                'images'=>'/images/p11.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            14 => 
            array (
                'id' => 15,
                'property_id' =>4,
                'status' => 1,
                'images'=>'/images/p12.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),15 => 
            array (
                'id' => 16,
                'property_id' =>4,
                'status' => 1,
                'images'=>'/images/p13.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            16 => 
            array (
                'id' => 17,
                'property_id' =>5,
                'status' => 1,
                'images'=>'/images/p14.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            17 => 
            array (
                'id' => 18,
                'property_id' =>5,
                'status' => 1,
                'images'=>'/images/p15.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),18 => 
            array (
                'id' => 19,
                'property_id' =>5,
                'status' => 1,
                'images'=>'/images/p16.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            19 => 
            array (
                'id' => 20,
                'property_id' =>5,
                'status' => 1,
                'images'=>'/images/p17.jpg',
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            )
        ));
    }
}
