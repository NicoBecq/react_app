<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends Fixture
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    /**
     * UserFixture constructor.
     * @param UserPasswordEncoderInterface $encoder
     */
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user
            ->setUsername('nico')
            ->setCreatedAt(new \DateTimeImmutable())
            ->setFirstname('Nicolas')
            ->setLastname('Becquerel')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword($this->encoder->encodePassword($user, 'azerty'))
        ;

        $manager->persist($user);
        $manager->flush();
    }
}
