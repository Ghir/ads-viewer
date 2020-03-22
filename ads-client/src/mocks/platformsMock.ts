import { Platforms } from './../app/interfaces/interfaces';

export const platformsMock: Platforms = {
  facebook: {
    status: 'Delivering',
    total_budget: 40,
    remaining_budget: 12,
    start_date: 1530568800000,
    end_date: 1532901600000,
    target_audience: {
      languages: [
        'FR',
        'EN',
        'DE'
      ],
      genders: [
        'M',
        'F'
      ],
      age_range: [
        20,
        66
      ],
      locations: [
        'France',
        'Germany',
        'Switzerland'
      ],
      interests: [
        'Docker',
        'Kubernetes',
        'DevOps',
        'AWS',
        'Google Cloud Platform',
        'Ubuntu'
      ]
    },
    creatives: {
      header: 'DevOps Made Easy, We Take care of the heavy lifting for you',
      description: 'DOP SuperHero is where all DevOps is going to happen in the future, join the revolution today!',
      url: 'https://example.io',
      image: 'img1.jpg'
    },
    insights: {
      impressions: 4503,
      clicks: 328,
      nanos_score: 5.7,
      cost_per_click: 0.88,
      click_through_rate: 0.09,
      advanced_kpi_1: 44.5,
      advanced_kpi_2: 0.0023
    }
  },
  instagram: {
    status: 'Delivering',
    total_budget: 44,
    remaining_budget: 14,
    start_date: 1530568800000,
    end_date: 1532901600000,
    target_audience: {
      languages: [
        'FR',
        'EN',
        'DE'
      ],
      genders: [
        'M',
        'F'
      ],
      age_range: [
        20,
        66
      ],
      locations: [
        'France',
        'Germany',
        'Switzerland'
      ],
      interests: [
        'Docker',
        'Kubernetes',
        'DevOps',
        'AWS',
        'Google Cloud Platform',
        'Ubuntu'
      ]
    },
    creatives: {
      header: 'DevOps Made Easy, We Take care of the heavy lifting for you',
      description: 'DOP SuperHero is where all DevOps is going to happen in the future, join the revolution today!',
      url: 'https://example.io',
      image: 'img1.jpg'
    },
    insights: {
      impressions: 436,
      clicks: 220,
      website_visits: 178,
      nanos_score: 5.2,
      cost_per_click: 1.28,
      click_through_rate: 0.43,
      advanced_kpi_1: 39,
      advanced_kpi_2: 0.00143
    }
  },
  google: {
    status: 'Delivering',
    total_budget: 36,
    remaining_budget: 24,
    start_date: 1530568800000,
    end_date: 1532901600000,
    target_audience: {
      languages: [
        'FR',
        'EN',
        'DE'
      ],
      genders: [
        'M',
        'F'
      ],
      age_range: [
        20,
        66
      ],
      locations: [
        'France',
        'Germany',
        'Switzerland',
        'Italy',
        'Spain',
        'Belgium',
        'United Kingdom',
        'Poland'
      ],
      keywords: [
        'Easy DevOps',
        'DevOps As A Service',
        'DevOps',
        'AWS',
        'Google Cloud Platform',
        'DevOps Automation',
        'One Click DevOps',
        'NoOps'
      ]
    },
    creatives: {
      header_1: 'DevOps Made Easy',
      header_2: 'We Take care of the heavy lifting for you',
      description: 'DOP SuperHero is where all DevOps is going to happen in the future, join the revolution today!',
      url: 'https://example.io',
      image: 'img2.jpg'
    },
    insights: {
      impressions: 20436,
      clicks: 420,
      website_visits: 378,
      cost_per_click: 0.99,
      click_through_rate: 0.013,
      advanced_kpi_1: 3.9
    }
  }
};