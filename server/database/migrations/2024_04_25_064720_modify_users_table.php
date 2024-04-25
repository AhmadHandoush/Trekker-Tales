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
        Schema::table('users',function(Blueprint $table){
            $table->decimal('longitude',10,8)->nullable()->change();
            $table->decimal('latitude',10,8)->nullable()->change();
            $table->integer('phone')->nullable()->change();
            $table->string('user_image')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
    Schema::table('users', function (Blueprint $table) {
     $table->integer('longitude')->change();
     $table->integer('latitude')->change();
     $table->integer('phone')->change();
    });
}
};
