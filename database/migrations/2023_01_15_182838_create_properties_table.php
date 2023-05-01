<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->foreignId('location_id');
            $table->decimal('price', 12, 2);
            $table->foreignId('type_id');
            $table->string('bed');
            $table->string('bath');
            $table->string('grage');
            $table->string('sqf');
            $table->string('phone');
            $table->string('city')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('country')->nullable();
            $table->date('date');
            $table->text('description')->nullable();
            $table->text('address')->nullable();
            $table->text('details')->nullable();
            $table->string('map_link')->nullable();
            $table->string('whatsapp_number')->nullable();
            $table->integer('created_by')->nullable();
            $table->foreignId('user_id')->nullable();
            $table->string('rating')->nullable();
            $table->string('share_link')->nullable();
            $table->integer('share_count')->default('0');
            $table->integer('call_count')->default('0');
            $table->integer('visitor_count')->default('0');
            $table->tinyInteger('status')->default('1');
            $table->string('publisher_status')->default('1');
            $table->string('recived_count')->default('0');
            $table->text('image')->nullable();
            $table->text('video_link')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->text('meta_tag')->nullable();
            $table->text('meta_keyward')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
};
