<?php

namespace App\Console\Commands;

use App\Models\Location;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Property;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatically Generate an XML Sitemap';
    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $postsitmap = Sitemap::create();
        Property::get()->each(function (Property $post) use ($postsitmap) {
            $postsitmap->add(
                Url::create("/property/{$post->slug}")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
            );
        });
        $postsitmap->add(
            Url::create("/")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/about")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/contact")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/area/furnished-apartment-for-rent-in-gulshan")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/area/furnished-apartment-for-rent-in-banani")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/area/furnished-apartment-for-rent-in-baridhara-diplomatic-zone")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/area/furnished-apartment-for-rent-in-bashundhara")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/corporates")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/property")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->add(
            Url::create("/property-owner")
                    ->setPriority(0.9)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        );
        $postsitmap->writeToFile(public_path('sitemap.xml'));
    }
}
