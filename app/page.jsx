import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  FolderOpen,
  Layers,
  Mail,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const features = [
    {
      icon: <FolderOpen className="h-6 w-6" />,
      title: "Icon Library",
      description:
        "Browse and download hundreds of icons organized by category",
      href: "/icons",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient:
        "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Templates",
      description: "Access email templates and Figma links for quick reference",
      href: "/emails",
      gradient: "from-violet-500 to-purple-500",
      bgGradient:
        "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure Access",
      description: "Protected by authentication to keep your assets safe",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Search",
      description: "Quickly find what you need with powerful search filters",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Organized Categories",
      description: "Everything neatly organized for easy navigation",
    },
  ];

  return (
    <section className="main-wrapper">
      <Navbar />

      <div className="relative min-h-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        {/* Hero Section */}
        <div className="relative px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            {/* Badge */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm border-slate-200 bg-white/50 backdrop-blur-sm"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                ShareTrip Assets
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center animate-slide-up">
              Your Design Assets,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                One Place
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-100">
              Access icons, email templates, and design resources all in one
              secure location. Streamline your workflow with ShareTrip's
              comprehensive asset library.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
              <Button
                render={<Link href="/icons" />}
                nativeButton={false}
                size="lg"
                className="text-base h-12 px-8 bg-slate-900 hover:bg-slate-800"
              >
                Browse Icons
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                render={<Link href="/emails" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="text-base h-12 px-8 border-2"
              >
                View Emails
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                What's Available
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Explore our curated collection of design assets
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Link key={feature.title} href={feature.href}>
                  <Card
                    className={`group relative overflow-hidden border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 ${feature.bgGradient} hover:shadow-xl`}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <CardHeader className="relative">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 shadow-lg`}
                      >
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <CardTitle className="text-2xl mb-3">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="flex items-center font-semibold text-slate-900 dark:text-slate-100 group-hover:gap-3 transition-all">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="px-6 py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 md:p-16 shadow-sm">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
                Why Use Our Asset Library?
              </h3>

              <div className="grid md:grid-cols-3 gap-10">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="text-center group">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-slate-900 dark:text-slate-100">
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />

              {/* Content */}
              <div className="relative px-12 py-16 md:py-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  Sign in to access all the design assets and resources you
                  need.
                </p>
                <Button
                  render={<Link href="/signin" />}
                  nativeButton={false}
                  size="lg"
                  variant="secondary"
                  className="text-base h-12 px-8 bg-white hover:bg-slate-50 text-slate-900 font-semibold"
                >
                  Sign In Now
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
