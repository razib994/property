<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BannerInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('banner_infos')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Get your dream home',
                'description' =>"Providing Excellent Guidance And Honest Advice On Real Estate",
                'banner_image' => '/images/banner.jpg',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            ),
           
            
        ));
    }
}

