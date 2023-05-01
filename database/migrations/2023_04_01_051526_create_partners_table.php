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
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->integer('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('city')->nullable();
            $table->string('area')->nullable();
            $table->text('address')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('total_sqr')->nullable();
            $table->string('bed')->nullable();
            $table->string('bath')->nullable();
            $table->string('parking')->nullable();
            $table->string('rental_value')->nullable();
            $table->string('remarkes')->nullable();
            $table->tinyInteger('agree')->default(0);
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
        Schema::dropIfExists('partners');
    }
};
