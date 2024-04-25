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
       Schema::table('posts',function(Blueprint $table){
        $table->string('image')->nullable()->change();
        $table->string('caption')->nullable()->change();
        $table->string('content')->nullable()->change();
       });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts',function(Blueprint $table){
            $table->string('image')->change();
            $table->string('caption')->change();
            $table->string('content')->change();
        });
    }
};
