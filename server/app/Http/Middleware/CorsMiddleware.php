<?php

// namespace App\Http\Middleware;

// use Closure;
// use Illuminate\Http\Request;
// use Symfony\Component\HttpFoundation\Response;

// class CorsMiddleware
// {
//     /**
//      * Handle an incoming request.
//      *
//      * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
//      */
//     public function handle($request, Closure $next)
//     {
//         // Allow from any origin
//         if (isset($request->server()['HTTP_ORIGIN'])) {
//             $origin = $request->server()['HTTP_ORIGIN'];
//             header("Access-Control-Allow-Origin: $origin");
//             header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
//             header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');
//         }

//         // Handle preflight OPTIONS request
//         if ($request->isMethod('OPTIONS')) {
//             return response()->json('', 200);
//         }

//         return $next($request);
//     }
// }
