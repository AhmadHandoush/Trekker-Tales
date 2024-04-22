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
        Schema::table('users', function (Blueprint $table) {
            $table->integer('phone')->after('password');
            $table->integer('longitude')->after('phone');
            $table->integer('latitude')->after('longitude');
            $table->string('user_image')->after('latitude');
            $table->enum('role', ['admin', 'teacher', 'parent'])->default('parent');




        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('phone');
            $table->dropColumn('longitude');
            $table->dropColumn('latitude');
            $table->dropColumn('user_image');
            $table->dropColumn('role');
        });
    }
};
