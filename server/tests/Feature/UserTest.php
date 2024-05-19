<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $password = "123456222";
        $hashedPassword = Hash::make($password);
        $user = User::create([
            "name" => "manneessa",
            "email" => "maneessa@gmail.com",
            "password" => $hashedPassword
        ]);
        $this->assertInstanceOf(User::class, $user);
        $this->assertEquals("manneessa", $user->name);
        $this->assertEquals("maneessa@gmail.com", $user->email);
    }
    public function test_get_all(): void
    {
        User::factory()->count(3)->create(['role' => 'parent']);
        $response = $this->getJson('/api/get_parents');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'parents' => [
                '*' => [
                    "id",
                    "name",
                    "email",
                    "email_verified_at",
                    "phone",
                    "longitude",
                    "latitude",
                    "user_image",
                    "created_at",
                    "updated_at",
                    "address",
                ],
            ],
        ]);
    }
}
