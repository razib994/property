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
use Illuminate\Support\Facades\Redirect;

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
Route::get("/faq", [FrontendController::class, 'faq'])->name('frontend.faq');
Route::get("/blog", [FrontendController::class, 'blog'])->name('frontend.blog');
Route::get("/property", [FrontendController::class, 'property'])->name('frontend.property');
Route::get("/property/{itemId}", [FrontendController::class, 'propertyDetails'])->name('frontend.propertyDetails');
Route::get("/property-details/khala/{id}", [FrontendController::class, 'totalData'])->name('frontend.total');
Route::get("/terms-conditions", [FrontendController::class, 'termsConditions'])->name('frontend.termsConditions');
Route::get("/privacy-policy", [FrontendController::class, 'privacyPolicy'])->name('frontend.privacyPolicy');
Route::get("/cookies", [FrontendController::class, 'cookies'])->name('frontend.cookie');
Route::get("/sitemap_page", [FrontendController::class, 'siteMap'])->name('frontend.siteMap');
Route::get("/blog-details", [FrontendController::class, 'blogDetails'])->name('frontend.blogDetails');
Route::get("/corporates", [FrontendController::class, 'corporateIndex'])->name('frontend.corporate');
Route::get("/area/{location}", [FrontendController::class, 'areaLocation'])->name('frontend.area');
Route::get("/cookie", [FrontendController::class, 'cookieData'])->name('frontend.cookie');
Route::post("/property-request", [FrontendController::class, 'propertyRequest'])->name('requestFrom.submit');
Route::post("/property-search", [FrontendController::class, 'search'])->name('search.submit');
Route::post("/client-post", [FrontendController::class, 'postClientData'])->name('client.submit');
Route::get("/get-request", [FrontendController::class, 'getRequest'])->name('getRequest.data');
Route::get("/property-owner", [FrontendController::class, 'propertyOwner'])->name('property.owner');
Route::get("/client-registration", [FrontendController::class, 'clientRegistration'])->name('client.registration');
Route::get("/contact-owner", [FrontendController::class, 'contactOwner'])->name('contact.owner');
Route::get("/contact-corporate", [FrontendController::class, 'contactCorporate'])->name('contact.corporate');
Route::get("/contact-tenlent", [FrontendController::class, 'contactTenlent'])->name('contact.tenlent');
Route::get("/contact-want-know", [FrontendController::class, 'contactWantKnow'])->name('contact.wantknow');
Route::get("/error", [FrontendController::class, 'error'])->name('error.data');



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
    Route::post("/propety-update", [PropertyController::class,'updateProperty'])->name('property.update');
    Route::get("/propety-edit/{id}", [PropertyController::class,'editProperty'])->name('property.edit');
    Route::get("/propety-delete/{id}", [PropertyController::class,'destroy'])->name('property.delete');
    Route::get("/property-list", [PropertyController::class,'propertyList'])->name('property.list');
    Route::get("/property-list/details/{id}", [PropertyController::class,'propertyListDetails'])->name('property.list.details');

    // Location
    Route::get("/location-create", [LocationController::class,'locationCreate'])->name('location.create');
    Route::post("/location-store", [LocationController::class,'storeLocation'])->name('location.submit');
    Route::get("/location-list", [LocationController::class,'locationList'])->name('location.list');
    Route::post("/location-update", [LocationController::class,'updateProperty'])->name('location.update');
    Route::get("/location-edit/{id}", [LocationController::class,'editProperty'])->name('location.edit');
    Route::get("/location/{id}", [LocationController::class,'destroy'])->name('location.delete');

    // Type
    Route::get("/type-create", [TypeController::class,'typeCreate'])->name('type.create');
    Route::post("/type-store", [TypeController::class,'storeType'])->name('type.submit');
    Route::get("/type-list", [TypeController::class,'typeList'])->name('type.list');
    Route::post("/type-update", [TypeController::class,'updateType'])->name('type.update');
    Route::get("/type-edit/{id}", [TypeController::class,'editType'])->name('type.edit');
    Route::get("/type/{id}", [TypeController::class,'destroyType'])->name('type.delete');

    // banner Info
    Route::get("/create-banner", [SettingController::class,'bannerupdateTypeCreate'])->name('banner.create');
    Route::post("/banner-store", [SettingController::class,'storeBanner'])->name('banner.submit');
    Route::get("/banner-list", [SettingController::class,'bannerList'])->name('banner.list');
    Route::post("/banner-update", [SettingController::class,'updateBanner'])->name('banner.update');
    Route::get("/banner-edit/{id}", [SettingController::class,'editBanner'])->name('banner.edit');
    Route::get("/banner/{id}", [SettingController::class,'destroyBanner'])->name('banner.delete');

    // Top Header
    Route::get("/create-top-header", [SettingController::class,'topHeaderCreate'])->name('topHeader.create');
    Route::post("/top-header-store", [SettingController::class,'storeTopHeader'])->name('topHeader.submit');
    Route::get("/top-header-list", [SettingController::class,'topHeaderList'])->name('topHeader.list');
    Route::post("/top-header-update", [SettingController::class,'updateTopheader'])->name('topheader.update');
    Route::get("/top-header-edit/{id}", [SettingController::class,'editTopHeader'])->name('topheader.edit');
    Route::get("/delete/{id}", [SettingController::class,'destroy'])->name('topheader.delete');

    // Feature
    Route::get("/create-feature", [SettingController::class,'featureCreate'])->name('feature.create');
    Route::post("/store", [SettingController::class,'storeFeature'])->name('feature.submit');
    Route::get("/feature-list", [SettingController::class,'featureList'])->name('feature.list');
    Route::post("/feature-update", [SettingController::class,'updateFeature'])->name('feature.update');
    Route::get("/feature-edit/{id}", [SettingController::class,'editFeature'])->name('feature.edit');
    Route::get("/feature-delete/{id}", [SettingController::class,'featureDestroy'])->name('feature.delete');



    Route::get("/upload-image", [SettingController::class,'imageCreate'])->name('image.create');
    Route::post("/image-store", [SettingController::class,'storeImageUpload'])->name('image.submit');

    // Request Property Data
    Route::get("/request-property-list", [DashbaordController::class, 'requestPropertyList'])->name('request.property.list');
});

Route::middleware('is_admin')->group(function () {
    // Route::get("/logout", [LoginController::class,'logout'])->name('logout');
    Route::get('user/home', [DashbaordController::class, 'adminHome'])->name('user.home');
});

Route::fallback(function () {
    return redirect('/');

});