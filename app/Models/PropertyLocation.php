<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyLocation extends Model
{
    use HasFactory;
    protected $fillable = [
        'property_id',
        'location_id',
    ];

    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
