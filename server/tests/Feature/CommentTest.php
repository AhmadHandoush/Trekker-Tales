<?php

namespace Tests\Feature;

use App\Models\Comment;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CommentTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {

        $comment = Comment::create([
            "user_id" => 28,
            "comment" => "hiii",
            "post_id" => 21
        ]);
        $this->assertInstanceOf(Comment::class, $comment);
        $this->assertEquals("hiii", $comment->comment);
    }
    // public function test_delete(): void
    // {
    //     $response = $this->post(
    //         '/api/delete_comment',
    //         [
    //             "id" => 14
    //         ]
    //     );

    //     $response->assertStatus(200);
    //     $response->assertJson([
    //         "message" => "deleted successfully"
    //     ]);
    //     $this->assertTrue(true);
    // }

}
