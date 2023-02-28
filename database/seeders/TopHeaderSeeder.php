<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TopHeaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('top_headers')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'logo',
                'phone' => '01737988947',
                'logo_image' => '/logo/logo.jpeg',
                'status' => 1,
                'created_at' => '2022-11-08 21:38:52',
                'updated_at' => '2022-11-08 21:38:52',
            )
        ));
    }
}
