import { Sparkles, Mail, MapPin, Database, Heart, Brain, TrendingUp, Gamepad2, ShoppingBag, Bot, Stethoscope, Users, Headphones, BarChart3, Shield, Eye, Ear, FileText, Map, Clock, Languages, Building2, UsersRound, Zap, ArrowRight } from 'lucide-react'

export const researchAreas = [
    {
      icon: Database,
      title: 'Development of Multimodal AI Datasets',
      description:
        'Creating comprehensive datasets combining video, audio, EEG, and gesture data to fuel next-generation AI research and development.',
      tags: ['Video', 'Audio', 'EEG', 'Gestures'],
    },
    {
      icon: Heart,
      title: 'Emotion and Affect Recognition',
      description:
        'Developing advanced AI systems capable of understanding and interpreting human emotions and affective states across multiple modalities.',
      tags: ['Facial Analysis', 'Voice Tone', 'Physiological'],
    },
    {
      icon: Brain,
      title: 'Cross-Modal Learning',
      description:
        'Developing sophisticated data fusion techniques that enable AI systems to learn from multiple sensory inputs simultaneously.',
      tags: ['Data Fusion', 'Deep Learning', 'Neural Networks'],
    },
    {
      icon: TrendingUp,
      title: 'Behavioural Analysis',
      description:
        'Conducting in-depth analysis of human behavior patterns to improve AI systems\' understanding of human actions and intentions.',
      tags: ['Pattern Recognition', 'Predictive Models'],
    },
  ]
  
  // Static team members
  export  const staticTeamMembers=[
    {
      id: 1000,
      name: 'Prof. Shubhajit Roy Chowdhury',
      position: 'Project Director',
      image: 'assets/src.jpg',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    {
      id: 1001,
      name: 'Mr. Somjit Amrit',
      position: 'Chief Executive Officer',
      image: 'assets/co_sir-150x150.png',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    {
    
      id: 1002,
      name: 'Mr. Varuna Mohan',
      position: 'Head of Technology',
      image: 'assets/1703750420902.jpg',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    {
      id: 1003,
      name: 'Rahul Sharma',
      position: 'Assistant Manager - Technology',
      image: '/imgcopy/team/Rahul Sir.jpg',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    {
      id: 1004,
      name: 'Subhash Chandra Pal',
      position: 'Post - Doctoral Researcher',
      image: '/imgcopy/team/SP_P.png',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    {
      id: 1005,
      name: 'Anil Kumar',
      position: 'Network Engineer',
      image: '/imgcopy/team/Anil.png',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    
    {
      id: 1006,
      name: 'Srishti',
      position: 'Junior Software Developer',
      image: 'imgcopy/team/SR_P.png',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    {
      id: 1007,
      name: 'Ms. Volga Verma',
      position: 'General Manager',
      image: 'assets/volga.png',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    {
      id: 1008,
      name: 'Mr. Avnish Mishra',
      position: 'Manager - Finance, Procurement & Admin',
      image: 'assets/Avnish.jpg',
      linkedin_url: '',
      facebook_url: '',
      instagram_url: '',
      youtube_url: '',
    },
    
    // {
    //   id: 1005,
    //   name: 'RS',
    //   position: 'Team Member',
    //   image: '/imgcopy/team/RS.png',
    //   linkedin_url: '',
    //   facebook_url: '',
    //   instagram_url: '',
    //   youtube_url: '',
    // },
    // {
    //   id: 1006,
    //   name: 'SP',
    //   position: 'Team Member',
    //   image: '/imgcopy/team/SP copy.png',
    //   linkedin_url: '',
    //   facebook_url: '',
    //   instagram_url: '',
    //   youtube_url: '',
    // },
    // {
    //   id: 1007,
    //   name: 'SR',
    //   position: 'Team Member',
    //   image: '/imgcopy/team/SR.png',
    //   linkedin_url: '',
    //   facebook_url: '',
    //   instagram_url: '',
    //   youtube_url: '',
    // },
  ]
  
  export   const businessUseCases = [
    {
      icon: Bot,
      title: 'Robotics & Intelligent Automation',
      useCases: [
        '3D perception and scene understanding',
        'Human–object interaction modeling',
        'Robot learning through human demonstrations',
      ],
      businessValue: 'Improved robotic accuracy and safety, faster training of intelligent robots, and smarter manipulation and grasping systems',
      image: 'assets/freepik_change_the_ethnicity_to_north_indian_student_age_s_38986.png',
    },
    
    {
      icon: ShoppingBag,
      title: 'Product Visualization & Virtual Commerce',
      useCases: [
        'Novel view synthesis for products',
        '3D product rotation and visualization',
        'Virtual try-on and immersive product demos',
      ],
      businessValue: 'Enhanced customer engagement, lower return rates in e-commerce, and premium brand experiences through interactive 3D assets',
      image: '/assets/2-Improved-product-understanding.jpg.webp',
    },
    {
      icon: Gamepad2,
      title: 'Media, Entertainment & Digital Content',
      useCases: [
        '3D human reconstruction for animation and VFX',
        'Motion capture–driven character animation',
        'Photorealistic digital humans and avatars',
      ],
      businessValue: 'Faster content production pipelines, reduced manual animation costs, and high-fidelity virtual characters for films, games, and XR platforms',
      image: 'assets/Computer Science Behind Scenes.jpg',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare, Rehabilitation & Assistive Technologies',
      useCases: [
        'Motion tracking for physical rehabilitation',
        'Cognitive–motor behavior analysis using EEG',
        'Assistive AI systems for motor-impaired users',
      ],
      businessValue: 'Objective patient assessment, personalized therapy planning, and scalable AI-driven healthcare solutions',
      image: 'assets/Indian Medical Exoskeleton Team.png',
    },
    {
      icon: Users,
      title: 'Neurological Health & Cognitive Monitoring',
      useCases: [
        'Early detection of neurological disorders (Parkinson\'s, Alzheimer\'s)',
        'Speech, facial, and motor behavior analysis for cognitive assessment',
        'Multimodal biomarker discovery using synchronized signals',
      ],
      businessValue: 'Objective clinical insights, improved early diagnosis, and AI-powered healthcare assessment systems',
      image: 'assets/Indian Woman EEG Examination.png',
    },
    {
      icon: Headphones,
      title: 'AR/VR/XR & Metaverse Applications',
      useCases: [
        'Immersive interaction capture',
        'Real-time avatar embodiment',
        'Spatial mapping and localization',
      ],
      businessValue: 'Next-generation immersive experiences, enterprise training and simulation platforms, and scalable virtual collaboration environments',
      image: 'assets/In WwHS copy.jpg',
    },
    {
      icon: Shield,
      title: 'Surveillance & Security Intelligence',
      useCases: [
        'Detection of abnormal human behavior through multimodal analysis of movement, posture, and gestures',
        'Audio–visual threat assessment using voice stress, aggression cues, and activity recognition',
        'Face–voice association and identity-aware behavior analysis for enhanced situational awareness',
      ],
      businessValue: 'Improved threat detection accuracy, reduced false alarms, and robust AI-driven surveillance systems capable of understanding complex human behaviors in real-world security environments',
      image: 'assets/Indian Perspective Surveillance Security.jpg',
    },
    
  
    // {
    //   icon: BarChart3,
    //   title: 'AI Dataset Creation & Licensing',
    //   useCases: [
    //     'High-quality 3D/4D multimodal datasets',
    //     'Annotated motion, audio, and cognitive data',
    //     'Synthetic data generation',
    //   ],
    //   businessValue: 'Industry-grade datasets for AI companies, faster AI model training, and new revenue streams through dataset licensing',
    //   image: 'https://via.placeholder.com/400x300/14b8a6/ffffff?text=AI+Datasets',
    // },
  ]
  