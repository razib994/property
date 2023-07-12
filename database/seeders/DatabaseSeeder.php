<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Property;
use App\Models\TopHeader;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {


        DB::table('users')->insert([
            0 =>
            array(
                'id'=>1,
            'name' => 'Nasullah Nash',
            'email' => 'nash@gmail.com',
            'is_admin'=>null,
            'password' => Hash::make('nash@%2023')),
            1 =>
            array(
                'id'=>2,
            'name' => 'Razibur Rahman',
            'email' => 'razibur@gmail.com',
            'is_admin'=>"1",
            'password' => Hash::make('00000000'))
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(TopHeaderSeeder::class);
        $this->call(TypeSeeder::class);
        $this->call(LocationSeeder::class);
        $this->call(PropertySeeder::class);
        $this->call(PropertyImageGallerySeeder::class);
        $this->call(FeatureSeeder::class);
        $this->call(BannerInfoSeeder::class);

    }
}
