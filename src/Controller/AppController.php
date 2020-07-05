<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="app")
     * @param SerializerInterface $serializer
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(SerializerInterface $serializer)
    {
        return $this->render('app/index.html.twig', [
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
