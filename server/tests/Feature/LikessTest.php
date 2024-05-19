<?php

namespace Tests\Feature;

use App\Models\Like;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LikessTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_add_like(): void
    {

        $comment = Like::create([
            "user_id" => 28,
            "post_id" => 21
        ]);
        $this->assertInstanceOf(Like::class, $comment);
    }
    
}
