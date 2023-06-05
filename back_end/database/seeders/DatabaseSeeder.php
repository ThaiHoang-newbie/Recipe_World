<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run():void
    {
        $this->call(\Database\Seeders\ObtainerSeeder::class);
        $this->call(\Database\Seeders\CategorySeeder::class);
        $this->call(\Database\Seeders\PostSeeder::class);
        $this->call(\Database\Seeders\TagSeeder::class);
        $this->call(\Database\Seeders\OrderSeeder::class);
        $this->call(\Database\Seeders\OrderBuyerSeeder::class);
        $this->call(\Database\Seeders\OrderSellerSeeder::class);
    }
}
