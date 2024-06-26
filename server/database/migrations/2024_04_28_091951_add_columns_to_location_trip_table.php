<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('location_trip', function (Blueprint $table) {
            $table->time('arrival_time')->nullable()->after('location_id');
            $table->time('departure_time')->nullable()->after('arrival_time');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('location_trip', function (Blueprint $table) {
            $table->dropColumn('arrival_time');
            $table->dropColumn('departure_time');
        });
    }
};
