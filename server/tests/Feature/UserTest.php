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
            "name" => "mannessa",
            "email" => "manessa@gmail.com",
            "password" => $hashedPassword
        ]);
        $this->assertInstanceOf(User::class, $user);
        $this->assertEquals("mannessa", $user->name);
        $this->assertEquals("manessa@gmail.com", $user->email);
    }
    // public function test_examples(): void
    // {
    //     $response = $this->post(
    //         '/api/delete_user',
    //         [
    //             "id" => 64
    //         ]
    //     );

    //     $response->assertStatus(200);
    //     $response->assertJson([
    //         "message" => "deleted successfully"
    //     ]);
    //     $this->assertTrue(true);
    // }
}
