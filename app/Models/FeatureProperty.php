<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeatureProperty extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id', 'feature_id'
    ];

    public function ferature()
    {
        return $this->belongsTo(Feature::class, 'feature_id', 'id');
    }
}
