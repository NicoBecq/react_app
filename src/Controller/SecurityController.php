<?php

namespace App\Controller;

use ApiPlatform\Core\Api\IriConverterInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login", methods={"POST"})
     * @param IriConverterInterface $iriConverter
     * @return JsonResponse|Response
     */
    public function login(IriConverterInterface $iriConverter)
    {
        if (!$this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->json([
                'error' => 'Invalid login request: check that the Content-Type header is "application/json".'
            ], 400);
        }

        return new Response(null, 204, [
            'Location' => $iriConverter->getIriFromItem($this->getUser())
        ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('should not be reached');
    }

//    /**
//     * @Route("/logout", name="logout")
//     */
//    public function logout()
//    {
////        dump($this->getUser());die;
//        $yesterday = new \DateTime();
//        $yesterday->modify('- 1 days');
//
//        $response = new JsonResponse();
//        $response->headers->setCookie(
//            new Cookie(
//                '__Host-JWT', // Cookie name, should be the same as in config/packages/lexik_jwt_authentication.yaml.
//                null, // cookie value
//                $yesterday->getTimestamp(), // expiration
//                '/', // path
//                null, // domain, null means that Symfony will generate it on its own.
//                true, // secure
//                true, // httpOnly
//                false, // raw
//                'lax' // same-site parameter, can be 'lax' or 'strict'.
//            )
//        );
//        return $response;
//    }
}
