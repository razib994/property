<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->date('contact_start_date')->nullable();
            $table->date('contact_end_date')->nullable();
            $table->foreignId('property_id')->nullable();
            $table->decimal('amount', 10,2)->nullable();
            $table->text('address')->nullable();
            $table->string('phone');
            $table->text('image')->nullable();
            $table->text('documents')->nullable();
            $table->decimal('increase_amount')->nullable();
            $table->tinyInteger('status')->default(1);
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
        Schema::dropIfExists('clients');
    }
};