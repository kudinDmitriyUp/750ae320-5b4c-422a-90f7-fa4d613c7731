"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Crown, Dumbbell, Heart, MessageCircle, Sparkles, Star, TrendingUp, Trophy, Users, Zap, Instagram, Facebook, Globe, Linkedin } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Memberships", id: "pricing" },
            { name: "Trainers", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="FitZone Kolkata"
          button={{
            text: "Join Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Transform Your Body, Transform Your Life"
          description="Join Kolkata's premier fitness center with state-of-the-art equipment, expert trainers, and a community that motivates you to achieve your fitness goals"
          tag="Kolkata's Best Gym"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g3e259d9e200366e47f898e802510c6a676b0a93773eb246b6fe77dd34044556a7a4bfb03c300e1c5960fd508484fec92989d275e98d3d377eb70c372b5dabcdc_1280.jpg",
              imageAlt: "Modern gym equipment"
            },
            {
              imageSrc: "https://pixabay.com/get/gf467c9e3dd68960d00b05a66096464e32d54e2a1b17451f92721f7ae22318f4d11f9b23f23a402ae41fc7243a2c2f60078199090bc86a94fe148f0e80251d536_1280.jpg",
              imageAlt: "Cardio equipment area"
            },
            {
              imageSrc: "https://pixabay.com/get/gefdfcae1ee83b2315166cc35d2a30b9ebc706cfe22b41cc04d163ce45b13f752748d8b0efd95313aacbc71d3e9cc5f7570a41ea47fdecdb355ae0ffce8bee82a_1280.jpg",
              imageAlt: "Group fitness classes"
            },
            {
              imageSrc: "https://pixabay.com/get/gdce03950bd4bc8ce93949fe9490cb309c0821fdeeb205272986e27b6e03fd1c19aeaf273b0c816e983d35e8ec532351d01e717bf3e9294c9c62be33ba0c9f809_1280.jpg",
              imageAlt: "Personal training session"
            }
          ]}
          buttons={[
            {
              text: "Start Your Journey",
              href: "contact"
            },
            {
              text: "View Memberships",
              href: "pricing"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="At FitZone Kolkata, we believe fitness is not just about working out - it's about building a lifestyle that empowers you to be your best self every day"
          features={[
            {
              icon: Dumbbell,
              title: "Expert Training",
              description: "Our certified trainers provide personalized guidance to help you reach your fitness goals safely and effectively"
            },
            {
              icon: Users,
              title: "Community Spirit",
              description: "Join a supportive community of fitness enthusiasts who motivate and inspire each other every day"
            },
            {
              icon: Award,
              title: "Premium Equipment",
              description: "Train with the latest fitness equipment and technology in our spacious, well-ventilated facility"
            },
            {
              icon: Heart,
              title: "Holistic Wellness",
              description: "We focus on complete wellness including fitness, nutrition guidance, and mental well-being support"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Our Services"
          description="Comprehensive fitness solutions designed to meet your unique goals and preferences"
          tag="What We Offer"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Cardio & Strength Training",
              description: "Access to premium cardio machines, free weights, and strength training equipment with expert supervision",
              imageSrc: "https://pixabay.com/get/gf467c9e3dd68960d00b05a66096464e32d54e2a1b17451f92721f7ae22318f4d11f9b23f23a402ae41fc7243a2c2f60078199090bc86a94fe148f0e80251d536_1280.jpg"
            },
            {
              id: 2,
              title: "Personal Training",
              description: "One-on-one sessions with certified trainers who create customized workout plans for your specific goals",
              imageSrc: "https://pixabay.com/get/g0cac5a43ae266474301e079c79cf945206cdd08c09fcd4d5e6c38c2745491e08cf258d6d0b884c4a3aaa35e5d7c3e97bebc97f74b376aa36772eae26664ed994_1280.jpg"
            },
            {
              id: 3,
              title: "Group Fitness Classes",
              description: "Join energizing group classes including yoga, pilates, HIIT, and dance fitness for all skill levels",
              imageSrc: "https://pixabay.com/get/gefdfcae1ee83b2315166cc35d2a30b9ebc706cfe22b41cc04d163ce45b13f752748d8b0efd95313aacbc71d3e9cc5f7570a41ea47fdecdb355ae0ffce8bee82a_1280.jpg"
            },
            {
              id: 4,
              title: "Nutrition Counseling",
              description: "Professional nutrition guidance and meal planning to complement your fitness journey and maximize results",
              imageSrc: "https://pixabay.com/get/g17a7e14f0928c0dcbb9ec36cfde21b623c7fbdf0353755534b29c5f3731f2e3395860a61aa3af391f8229965b3e4c05e51075aeecaf4e79b48aa5922be3c1831_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Plans"
          description="Choose the perfect membership plan that fits your lifestyle and fitness goals"
          tag="Join Today"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Basic Plan",
              badgeIcon: Dumbbell,
              price: "₹2,000/month",
              subtitle: "Perfect for fitness beginners",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Access to gym equipment",
                "Locker facility",
                "Basic fitness assessment",
                "Shower facilities"
              ]
            },
            {
              id: "premium",
              badge: "Premium Plan",
              badgeIcon: Crown,
              price: "₹4,000/month",
              subtitle: "Most popular choice",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "All Basic features",
                "Group fitness classes",
                "Personal trainer consultation",
                "Nutrition guidance",
                "Extended hours access"
              ]
            },
            {
              id: "elite",
              badge: "Elite Plan",
              badgeIcon: Trophy,
              price: "₹6,500/month",
              subtitle: "For serious fitness enthusiasts",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "All Premium features",
                "Unlimited personal training",
                "Advanced body analysis",
                "Guest passes (2/month)",
                "Priority class booking",
                "Massage therapy sessions"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Impact"
          description="Numbers that showcase our commitment to your fitness journey"
          tag="Proven Results"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Active Members"
            },
            {
              id: "2",
              value: "5+",
              description: "Years Experience"
            },
            {
              id: "3",
              value: "15+",
              description: "Expert Trainers"
            },
            {
              id: "4",
              value: "95%",
              description: "Member Satisfaction"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Trainers"
          description="Professional certified trainers dedicated to helping you achieve your fitness goals"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Rajesh Kumar",
              role: "Senior Trainer",
              description: "Certified fitness trainer with 8+ years experience in strength training and body building. Specializes in weight loss and muscle building programs.",
              imageSrc: "https://pixabay.com/get/gc8339166d94b89c4bd79ed600f0dc2b66eb89df63ebe3cf9e9465c15f80adb465aaea77c3d323999cec65c49348efb2316c2e6b390e4c3490ca92367dfcc9105_1280.jpg",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/rajesh_fitness"
                },
                {
                  icon: Facebook,
                  url: "https://facebook.com/rajeshtrainer"
                }
              ]
            },
            {
              id: "2",
              name: "Priya Sharma",
              role: "Yoga Instructor",
              description: "Certified yoga instructor and wellness coach with expertise in hatha yoga, vinyasa flow, and meditation practices for holistic health.",
              imageSrc: "https://pixabay.com/get/g493a3383519afee7224a66d840c4a728825e6daec57588cae0ce20ba97a3fce3a807df3a2f102d201b5af023f203ad7143d56730b419e7b2fbd2af3dcf6a7ae1_1280.jpg",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/priya_yoga"
                },
                {
                  icon: Globe,
                  url: "https://priyayoga.com"
                }
              ]
            },
            {
              id: "3",
              name: "Amit Ghosh",
              role: "Fitness Coach",
              description: "Sports science graduate specializing in functional training, HIIT workouts, and athletic performance enhancement for all fitness levels.",
              imageSrc: "https://pixabay.com/get/g309cbe36b7c43ae8ea073309f4fa337af86b5c917ea106240ef4eb2b5e2329f1aade6f9389f22c977a30eab7769639287a32d09b85eb848ef20800b5fe98f12d_1280.jpg",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/amit_fitness"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/amitghosh"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Members Say"
          description="Real stories from real people who transformed their lives at FitZone"
          tag="Success Stories"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="opacity"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sneha Roy",
              role: "Software Engineer",
              company: "TCS",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g519f098da1d545ebb276626a293977992af50c9b2e9165f96a2cdab6445c8e750cc1c3e97b057d99e0c1ed5b26c0f7e59f66d0ac154dc3f7dbffec7954b69f09_1280.jpg"
            },
            {
              id: "2",
              name: "Arjun Das",
              role: "Marketing Manager",
              company: "ITC Limited",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g6d7a68c7c7fa9f2b631f9da1d543591ef3b694bab089ba556e604eba44083c364c1fefc04d57b8453b22b9b4cdce12bc2febd88bf24d00ff27026bc023aedb07_1280.jpg"
            },
            {
              id: "3",
              name: "Ritu Banerjee",
              role: "Doctor",
              company: "Apollo Hospital",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gcd2f7f47ca92c526a4a875d55f1826e513eb398de701e9f76bfd1698c16d6f27c30486797ec2944624e1fe54e026bd6b81d9cc29f4d88a6ee19a21693503ed6d_1280.jpg"
            },
            {
              id: "4",
              name: "Vikash Singh",
              role: "Business Owner",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g336d65aa3a6b8d9be2aadc0e46665d5b1e121d3f2bb3c5a45b077975d5084c7211c3be2c54a01ac4550c8d9341c28dc4b53ab01355f4569b78210d64efb66073_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Fitness Journey?"
          description="Contact us today for a free consultation and tour of our facilities. Let's discuss your fitness goals and find the perfect membership plan for you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Full Name",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your fitness goals and any questions you have...",
            rows: 4,
            required: false
          }}
          buttonText="Get Started"
          imageSrc="https://pixabay.com/get/g9ace6165593b2c61ded3276813ebd6b3b390e3d086398c361457039c5b0434830fa6255125559b866335341357faa174f271cc2f1d00bc428477a16ef2158c71_1280.jpg"
          imageAlt="FitZone Kolkata gym interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="FitZone Kolkata"
          copyrightText="© 2025 FitZone Kolkata. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Personal Training",
                  href: "feature"
                },
                {
                  label: "Group Classes",
                  href: "feature"
                },
                {
                  label: "Nutrition Counseling",
                  href: "feature"
                },
                {
                  label: "Membership Plans",
                  href: "pricing"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Our Trainers",
                  href: "team"
                },
                {
                  label: "Facilities",
                  href: "feature"
                },
                {
                  label: "Success Stories",
                  href: "testimonial"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Join Now",
                  href: "contact"
                },
                {
                  label: "Visit Us",
                  href: "contact"
                },
                {
                  label: "Call Us",
                  href: "tel:+919876543210"
                },
                {
                  label: "Email",
                  href: "mailto:info@fitzonekolkata.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}