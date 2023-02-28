<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [ 

        'title',             
                'slug'             ,
                'location_id'      ,
                'price'            ,
                'type_id'          ,
                'bed'             ,
                'bath'             ,
                'grage'            ,
                'sqf'             ,
                'phone'             ,
                'date'            ,
                'description'     ,
                'address'          ,
                'details'          ,
                'map_link'        ,
                'whatsapp_number'  ,
                'created_by'       ,
                'rating'         ,
                'share_link'        ,
                'share_count'       ,
                'call_count'        ,
                'visitor_count'     ,
                'status'            ,
                'publisher_status'  ,
                'recived_count'     ,
                'image',
                'video_link'       ,
                'meta_title'      ,
                'meta_description'  ,
                'meta_tag'          ,
                'meta_keyward'    ,
               
    ];



    public function type() {
        return $this->belongsTo(Type::class);
    }
    
    public function user() {
        return $this->belongsTo(User::class,'created_by', 'id');
    }

    public function image_galleries() {
        return $this->hasMany(PropertyImageGallery::class);
    }

    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function features() {
        return $this->hasMany(FeatureProperty::class);
    }
}
