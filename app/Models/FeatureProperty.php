<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeatureProperty extends Model
{
    use HasFactory;
    public function ferature() {
        return $this->belongsTo(Feature::class, 'feature_id', 'id');
    }
}
