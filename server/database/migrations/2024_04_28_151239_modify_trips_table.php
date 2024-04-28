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
       Schema::table('trips',function(Blueprint $table){
        $table->string('name')->nullable()->change();
        $table->string('destination')->nullable()->change();
        $table->date('date')->nullable()->change();
        $table->time('start_time')->nullable()->change();
        $table->time('end_time')->nullable()->change();
        $table->integer('total_seats')->nullable()->change();
        $table->integer('available_seats')->nullable()->change();
        $table->decimal('fees')->nullable()->change();
        $table->text('description')->nullable()->change();
        $table->string('trip_image')->nullable()->change();

       });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
