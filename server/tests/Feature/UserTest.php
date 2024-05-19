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
        $password = "1234562222";
        $hashedPassword = Hash::make($password);
        $user = User::create([
            "name" => "omar122",
            "email" => "omar122@gmail.com",
            "password" => $hashedPassword
        ]);
        $this->assertInstanceOf(User::class, $user);
        $this->assertEquals("omar122", $user->name);
        $this->assertEquals("omar122@gmail.com", $user->email);
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
