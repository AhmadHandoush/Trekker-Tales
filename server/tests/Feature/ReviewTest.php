<?php

namespace Tests\Feature;

use App\Models\Review;
use App\Models\Trip;
use App\Models\User;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ReviewTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $review = Review::create([
            "user_id" => 28,
            "trip_id" =>25 ,
            "content" => "perfects",
            "rating" => 5,
        ]);
        $this->assertInstanceOf(Review::class, $review);
        $this->assertEquals("perfects", $review->content);
        $this->assertEquals(5, $review->rating);
    }

}
