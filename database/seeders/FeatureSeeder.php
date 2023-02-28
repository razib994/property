<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('features')->insert(array (
            0 => 
            array (
                'id' => 1,
                'feature_name' => 'first',
                'description' =>"details",
                'icon' => '',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            1 => 
            array (
                'id' => 2,
                'feature_name' => 'second',
                'description' =>"details",
                'icon' => '',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
            2 => 
            array (
                'id' => 3,
                'feature_name' => 'three',
                'description' =>"details",
                'icon' => '',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            )
        ));
    }
}
