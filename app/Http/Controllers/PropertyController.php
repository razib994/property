<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\FeatureProperty;
use App\Models\Location;
use App\Models\Property;
use App\Models\PropertyImageGallery;
use App\Models\PropertyLocation;
use App\Models\Type;
use Database\Seeders\PropertyImageGallerySeeder;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;

use function Termwind\render;

class PropertyController extends Controller
{
    //
    public function propertyCreate()
    {
        $locations = Location::select('location_name AS label', 'id AS value')->where('status', 1)->get();
        $types = Type::where('status', 1)->get();
        $features = Feature::where('status', 1)->get();
        return Inertia::render(
            "Dashboard/Property/Create",
            [
                'locations' => $locations,
                'types' => $types,
                'features' => $features,
            ]
        );
    }

    public function propertyList()
    {
        $properties = Property::orderby('id', 'desc')->get();
        return Inertia::render("Dashboard/Property/Index", [
            'properties' => $properties,
        ]);
    }

    public function storeProperty(Request $request)
    {
        // dd($request->location_id);

        $request->validate([
            'title' => 'required',
            'price' => 'required',
            // 'image' => 'required',
            // 'location_id' => 'required',
            'type_id' => 'required',
            'date' => 'required',
            'publisher_status' => 'required',
            'image_gallery' => 'required',

        ]);
        $photo = (isset($request['image']) && $request['image'] != "") ? $request['image'] : "";
        if ($photo != "") {
            $ext                    = $photo->getClientOriginalExtension();
            $photoFullName          = time().$photo->getClientOriginalName();
            $uploadPath             = 'images/';
            $success                = $photo->move($uploadPath, $photoFullName);
        }
        $property = Property::create([
            'title'             => $request->title,
            'slug'              => Str::slug($request->title) ,
            'location_id'       => 1,
            'price'             => $request->price,
            'type_id'           => $request->type_id,
            'bed'               => $request->bed ? $request->bed : "",
            'bath'              => $request->bath ? $request->bath : "",
            'grage'             => $request->grage ? $request->grage : "",
            'city'              => $request->city,
            'zip_code'          => $request->zip_code,
            'country'           => "Bangladesh",
            // 'user_id'             =>$request->user_id,
            'sqf'               => $request->sqf ? $request->sqf : "",
            'balcony'           => $request->balcony,
            'floor'             => $request->floor,
            'unit_no'           => $request->unit_no,
            'unit_per_floor'    => $request->unit_per_floor,
            'maid_room'         => $request->maid_room,
            'service_charge'    => $request->service_charge,
            'phone'             => $request->phone ? $request->phone : "",
            'date'              => $request->date,
            // 'description'       =>$request->description,
            'address'           => $request->address,
            // 'details'           =>$request->details,
            'map_link'          => $request->map_link,
            'whatsapp_number'   => $request->whatsapp_number,
            'created_by'        => Auth::user()->id,
            'rating'            => 0, //$request->rating,
            // 'share_link'        =>$request->share_link,
            'share_count'       => 0, //$request->share_count,
            'call_count'        => 0, //$request->call_count,
            'visitor_count'     => 0, //$request->visitor_count,
            'status'            => 1, //$request->status,
            'publisher_status'  => $request->publisher_status,
            'recived_count'     => 0, //$request->recived_count,
          //   'image'            => '/'.$uploadPath.$photoFullName,
             'image'            => '',
            'video_link'        => $request->video_link,
            'meta_title'        => $request->meta_title,
            'meta_description'  => $request->meta_description,
            'meta_tag'          => '', //$request->meta_tag,
            'meta_keyward'      => $request->meta_keyword
        ]);
        if($property->id) {
            $galleriesData = new PropertyImageGallery();
            $galleriesData->property_id = $property->id;
            $galleriesData->images = '/'.$uploadPath.$photoFullName;
            $galleriesData->featured = 0;
            $galleriesData->save();

        }
        if ($property->id) {
            foreach ($request->location_id as $location) {
                $locations = new PropertyLocation();
                $locations->property_id   = $property->id;
                $locations->location_id    = $location['value'];
                $locations->save();
            }
        }
        if ($property->id) {
            $property = Property::find($property->id);
            $property->property_id = 'FH100251'.$property->id;
            $property->update();
            if(is_array($request->feature_id)) {
                foreach ($request->feature_id as $feature) {
                    $featureData = new FeatureProperty();
                    $featureData->property_id   = $property->id;
                    $featureData->feature_id    = $feature;
                    $featureData->save();
                }
            }
        }

        foreach ($request->image_gallery as $key => $gallery) {

            $photo = (isset($gallery) && $gallery != "") ? $gallery : "";
            if ($photo != "") {
                $ext                    = $photo->getClientOriginalExtension();
                $gallerFullName          = time().$photo->getClientOriginalName();
                $uploadPath             = 'images/';
                $success                = $photo->move($uploadPath, $gallerFullName);
            }
            $galleriesData = new PropertyImageGallery();
            $galleriesData->property_id = $property->id;
            $galleriesData->images = '/'.$uploadPath.$gallerFullName;
            $galleriesData->featured = $key + 1;
            $galleriesData->save();
        }


        return redirect('/property-list');
    }

    public function editProperty(Request $request, $id)
    {
        $property = Property::with('type', 'features.ferature', 'user', 'image_galleries', 'location')->find($id);
        $types = Type::where('status', 1)->get();
        $features = Feature::where('status', 1)->get();

        //return $property;
        return Inertia::render("Dashboard/Property/Edit", [
            'properties' => $property,
            'locations' => Location::where('status', 1)->get()->transform(function ($location) {
                return [
                    'label' => $location->location_name,
                    'value' => $location->id
                ];
            }),
                'types' => $types,
                'features' => $features,
                'extraData'        => [
                    'locations' => PropertyLocation::where('property_id', $id)->get()->transform(function ($location) {
                        return [
                            'label' => $location->location->location_name,
                            'value' => $location->location_id
                        ];
                    })],
        ]);


    }

    public function updateProperty(Request $request)
    {


        $request->validate([
            'title'             => 'required',
            'price'             => 'required',
            'location_id'       => 'required',
            'type_id'           => 'required',
            'date'              => 'required',
            'publisher_status'  => 'required',
        ]);

        $property = Property::find($request->id);


        $property->update([
            'title'             => $request->title,
            'slug'              => Str::slug($request->title) ,
            'location_id'       => $request->location_id,
            'price'             => $request->price,
            'type_id'           => $request->type_id,
            'bed'               => $request->bed,
            'bath'              => $request->bath,
            'grage'             => $request->grage,
            'city'             => $request->city,
            'zip_code'             => $request->zip_code,
            'country'             => "Bangladesh",
            // 'user_id'            =>$request->user_id,
            'sqf'               => $request->sqf,
            'balcony'               => $request->balcony,
            'floor'               => $request->floor,
            'unit_no'               => $request->unit_no,
            'unit_per_floor'               => $request->unit_per_floor,
            'maid_room'               => $request->maid_room,
            'service_charge'               => $request->service_charge,
            'phone'             => $request->phone,
            'date'              => $request->date,
            // 'description'       =>$request->description,
            'address'           => $request->address,
            // 'details'           =>$request->details,
            'map_link'          => $request->map_link,
            'whatsapp_number'   => $request->whatsapp_number,
            'created_by'        => Auth::user()->id,
            'rating'            => 0, //$request->rating,
            // 'share_link'        =>$request->share_link,
            'share_count'       => 0, //$request->share_count,
            'call_count'        => 0, //$request->call_count,
            'visitor_count'     => 0, //$request->visitor_count,
            'status'            => 1, //$request->status,
            'publisher_status'  => $request->publisher_status,
            'recived_count'     => 0, //$request->recived_count,
            'video_link'        => $request->video_link,
            'meta_title'        => $request->meta_title,
            'meta_description'  => $request->meta_description,
            'meta_tag'          => '', //$request->meta_tag,
            'meta_keyward'      => $request->meta_keyword
        ]);
        if($request['image'] != null || $request['image'] != '') {

            $photo = (isset($request['image']) && $request['image'] != "") ? $request['image'] : "";
            if ($photo != "") {
                $ext                    = $photo->getClientOriginalExtension();
                $photoFullName          = time().$photo->getClientOriginalName();
                $uploadPath             = 'images/';
                $success                = $photo->move($uploadPath, $photoFullName);
            }
            $galleriesData = new PropertyImageGallery();
            $galleriesData->property_id = $request->id;
            $property->image = '/'.$uploadPath.$photoFullName;
            $property->save();
        }
        if(is_array($request->feature_id)) {
            FeatureProperty::where('property_id', $property->id)->delete();
            foreach ($request->feature_id as $feature) {
                $featureData                = new FeatureProperty();
                $featureData->property_id   = $property->id;
                $featureData->feature_id    = $feature;
                $featureData->save();
            }
        }
        if(is_array($request->image_gallery)) {
            PropertyImageGallery::where('property_id', $property->id)->delete();
            foreach ($request->image_gallery as $gallery) {
                $photo = (isset($gallery) && $gallery != "") ? $gallery : "";
                if ($photo != "") {
                    $ext                        = $photo->getClientOriginalExtension();
                    $gallerFullName             = time().$photo->getClientOriginalName();
                    $uploadPath                 = 'images/';
                    $success                    = $photo->move($uploadPath, $gallerFullName);
                }
                $galleriesData = new PropertyImageGallery();
                $galleriesData->property_id = $property->id;
                $galleriesData->images = '/'.$uploadPath.$gallerFullName;
                // $galleriesData->featured = 0;
                $galleriesData->save();
            }
        }
        return redirect('/property-list');
    }

    public function propertyListDetails($id)
    {

        $property = Property::with('type', 'features.ferature', 'user', 'image_galleries', 'location')->find($id);
        return Inertia::render("Dashboard/Property/PropertyListDetails", [
            'property' => $property,
        ]);
    }

    public function destroy($id)
    {
        $property = Property::find($id);
        $property->delete();
        return redirect('/property-list');
    }

    public function propertyLocation()
    {
        $properties = Property::all();
        foreach($properties as $property) {
            $propertyLocation = PropertyLocation::create([
                    'property_id' => $property->id,
                    'location_id' => $property->location_id,
            ]);
        }

        return redirect('/property-list');
    }
    public function propertyGallerydestroy($id)
    {
        $gallery = PropertyImageGallery::find($id);
        $gallery->delete();
        return redirect('/property-list');
    }

    public function propertyGalleryUpdate(Request $request, $id)
    {
        $request->validate([
            'featured' => 'numeric',
        ]);
        $propertyImage = PropertyImageGallery::find($id);
        $propertyImage->featured = $request->featured;
        $propertyImage->update();

        return redirect()->route('property.edit');

    }

}
