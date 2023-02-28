<?php

namespace App\Http\Controllers;

use App\Models\BannerInfo;
use App\Models\Feature;
use App\Models\TopHeader;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function settings()
    {
        return Inertia::render("Dashboard/Settings/Settings");
    }
    
    
    
// Feature List 
    public function featureList()
    {
        $features = Feature::all();
        return Inertia::render("Dashboard/Feature/Index",[
            'features'=>$features,
        ]);
    }

    public function featureCreate() {
        return Inertia::render('Dashboard/Feature/Create');
    }

    public function storeFeature(Request $request) {
        $feature = Feature::create([
            'feature_name'=> $request->title,
            'description'=> $request->description,
            'icon'=> '',
            'status' => '1',
        ]);
        //return $feature;
        return redirect('/feature-list');
        }

// Top Header List
    public function topHeaderList()
    {
        $topHeaders = TopHeader::all();
        return Inertia::render("Dashboard/TopHeader/Index",
    [
        'topHeaders'=>$topHeaders,
    ]);
    }
    public function topHeaderCreate() {
        return Inertia::render('Dashboard/TopHeader/Create');
    }
    
    public function storeTopHeader(Request $request) {
      
        $topHeader = TopHeader::create([
            'title'=> $request->title,
            'phone'=> $request->phone,
            'logo_image'=> '',
            'status' => '1',
        ]);
        //return $topHeader;
        return redirect('/top-header-list');
        }


// Banner Information
    public function bannerList()
    {
        $bannerInfos = BannerInfo::all();
        return Inertia::render("Dashboard/Banner/Index",[
            'bannerInfos'=>$bannerInfos,
        ]);
    }
    public function bannerCreate() {
        return Inertia::render('Dashboard/Banner/Create');
    }
    
    public function storeBanner(Request $request) {
        $banner = BannerInfo::create([
            'title'=> $request->title,
            'description'=> $request->description,
            'banner_image'=> '',
            'status' => '1',
        ]);
        //return $banner;
        return redirect('/banner-list');
        }

        public function imageCreate() {
            return Inertia::render('Dashboard/Image/Create');

        }
        public function storeImageUpload(Request $request) {
            dd($request->all());
        }
}
