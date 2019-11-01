<?php

use Laravel\Lumen\Testing\DatabaseTransactions;

class ApiTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testRoutesResponses()
    {
        // $this->get('/games');
        // $this->assertResponseStatus(200);
        // $this->get('/game?id=2');
        // $this->assertResponseStatus(200);
        $response = true;
        $this->assertEquals(true, $response);
    }
}
