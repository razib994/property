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
        Schema::create('clietn_messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->date('date')->nullable();
            $table->foreignId('property_id')->nullable();
            $table->text('message')->nullable();
            $table->text('reply_answer')->nullable();
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
        Schema::dropIfExists('clietn_messages');
    }
};