<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DashbaordController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TypeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Route::get("/home", [HomeController::class, 'index'])->name('frontend.home');

Route::get("/", [HomeController::class, 'index'])->name('frontend.home');
Route::get("/about", [FrontendController::class, 'about'])->name('frontend.about');
Route::get("/contact", [FrontendController::class, 'contact'])->name('frontend.contact');
Route::get("/blog", [FrontendController::class, 'blog'])->name('frontend.blog');
Route::get("/property", [FrontendController::class, 'property'])->name('frontend.property');
Route::get("/area/{location}/{itemId}", [FrontendController::class, 'propertyDetails'])->name('frontend.propertyDetails');
Route::get("/property-details/khala/{id}", [FrontendController::class, 'totalData'])->name('frontend.total');
Route::get("/terms-conditions", [FrontendController::class, 'termsConditions'])->name('frontend.termsConditions');
Route::get("/privacy-policy", [FrontendController::class, 'privacyPolicy'])->name('frontend.privacyPolicy');
Route::get("/blog-details", [FrontendController::class, 'blogDetails'])->name('frontend.blogDetails');
Route::get("/corporate", [FrontendController::class, 'corporateIndex'])->name('frontend.corporate');
Route::get("/area/{location}", [FrontendController::class, 'areaLocation'])->name('frontend.area');
Route::get("/cookie", [FrontendController::class, 'cookieData'])->name('frontend.cookie');


Route::get("/login", [LoginController::class,'login'])->name('login');
Route::post("/login-user", [LoginController::class,'loginSubmit'])->name('login.submit');
Route::get("/logout", [LoginController::class,'logout'])->name('logout')->middleware('auth');

Route::middleware('user_admin')->group(function () {
    // Route::get("/logout", [LoginController::class,'logout'])->name('logout');
    Route::get("/dashboard", [DashbaordController::class,'dashboard'])->name('dashboard');
    Route::get("/settings", [SettingController::class,'settings'])->name('settings');
    // Property
    Route::get("/propety-create", [PropertyController::class,'propertyCreate'])->name('property.create');
    Route::post("/propety-store", [PropertyController::class,'storeProperty'])->name('property.submit');
    Route::get("/propety-list", [PropertyController::class,'propertyList'])->name('property.list');

    // Location
    Route::get("/location-create", [LocationController::class,'locationCreate'])->name('location.create');
    Route::post("/location-store", [LocationController::class,'storeLocation'])->name('location.submit');
    Route::get("/location-list", [LocationController::class,'locationList'])->name('location.list');

    // Type
    Route::get("/type-create", [TypeController::class,'typeCreate'])->name('type.create');
    Route::post("/type-store", [TypeController::class,'storeType'])->name('type.submit');
    Route::get("/type-list", [TypeController::class,'typeList'])->name('type.list');

    // banner Info
    Route::get("/create-banner", [SettingController::class,'bannerCreate'])->name('banner.create');
    Route::post("/banner-store", [SettingController::class,'storeBanner'])->name('banner.submit');
    Route::get("/banner-list", [SettingController::class,'bannerList'])->name('banner.list');

    // Top Header
    Route::get("/create-top-header", [SettingController::class,'topHeaderCreate'])->name('topHeader.create');
    Route::post("/top-header-store", [SettingController::class,'storeTopHeader'])->name('topHeader.submit');
   Route::get("/top-header-list", [SettingController::class,'topHeaderList'])->name('topHeader.list');

   // Feature
   Route::get("/create-feature", [SettingController::class,'featureCreate'])->name('feature.create');
   Route::post("/store", [SettingController::class,'storeFeature'])->name('feature.submit');
   Route::get("/feature-list", [SettingController::class,'featureList'])->name('feature.list');


   Route::get("/upload-image", [SettingController::class,'imageCreate'])->name('image.create');
   Route::post("/image-store", [SettingController::class,'storeImageUpload'])->name('image.submit');
});

Route::middleware('is_admin')->group(function () {
    // Route::get("/logout", [LoginController::class,'logout'])->name('logout');
    Route::get('admin/home', [DashbaordController::class, 'adminHome'])->name('admin.home');
});



