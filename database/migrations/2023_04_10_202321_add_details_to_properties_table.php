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
        Schema::table('properties', function (Blueprint $table) {
            $table->string('balcony')->nullable()->after('sqf');
            $table->string('floor')->nullable()->after('balcony');
            $table->string('unit_no')->nullable()->after('floor');
            $table->string('unit_per_floor')->nullable()->after('unit_no');
            $table->string('maid_room')->nullable()->after('unit_per_floor');
            $table->string('service_charge')->nullable()->after('maid_room');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('properties', function (Blueprint $table) {
            $table->dropColumn('balcony');
            $table->dropColumn('floor');
            $table->dropColumn('unit_no');
            $table->dropColumn('unit_per_floor');
            $table->dropColumn('maid_room');
            $table->dropColumn('service_charge');
        });
    }
};
