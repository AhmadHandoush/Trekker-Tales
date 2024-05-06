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
        Schema::table('bookings', function (Blueprint $table) {
            $table->dropColumn('paid');
            $table->dropColumn('card_number');
            $table->dropColumn('name_on_card');
            $table->dropColumn('expiry_date');
            $table->dropColumn('cvv');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
            $table->string('paid')->nullable();
            $table->string('card_number')->nullable();
            $table->string('name_on_card')->nullable();
            $table->string('expiry_date')->nullable();
            $table->string('cvv')->nullable();
        });
    }
};
