import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  outerFun = [];

  objData = [
    {
      "bookingRequestId": "123",
      "LiqBusinessObject": [
        {
          "@name": "deal",
          "groups": [
            {
              "@name": "heading",
              "items": [
                {
                  "@value": "IE151a",
                  "@valueType": "String",
                  "@attribute": "dealTrackingNumber"
                },
                {
                  "@value": "Smith Foods Credit Agreement452a",
                  "@valueType": "String",
                  "@attribute": "creditAgreementName"
                },
                {
                  "@value": "00005",
                  "@valueType": "String",
                  "@attribute": "branch"
                },
                {
                  "@value": "FRONL",
                  "@valueType": "String",
                  "@attribute": "department"
                },
                {
                  "@value": "CLDA",
                  "@valueType": "String",
                  "@attribute": "processingArea"
                },
                {
                  "@value": "TREE",
                  "@valueType": "String",
                  "@attribute": "dealClassification"
                },
                {
                  "@value": "LIBOR",
                  "@valueType": "String",
                  "@attribute": "interestPricingRules"
                },
                {
                  "@value": "UNUT",
                  "@valueType": "String",
                  "@attribute": "feePricingRules"
                },
                {
                  "@value": "2021-11-02",
                  "@valueType": "String",
                  "@attribute": "agreementDate"
                },
                {
                  "@value": "In Progress",
                  "@valueType": "String",
                  "@attribute": "creditDocumentationStatus"
                },
                {
                  "@value": "2021-11-02",
                  "@valueType": "String",
                  "@attribute": "targetFundingDate"
                },
                {
                  "@value": "USD",
                  "@valueType": "String",
                  "@attribute": "currency"
                },
                {
                  "@value": "John Smith",
                  "@valueType": "String",
                  "@attribute": "relationshipManagerName"
                },
                {
                  "@value": "ABC Corp",
                  "@valueType": "String",
                  "@attribute": "primaryBorrower"
                }
              ]
            }
          ],
          "@objectType": "",
          "@objectId": "",
          "LiqBusinessObject": [
            {
              "@name": "borrowers",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "CUST100123",
                      "@valueType": "String",
                      "@attribute": "cifNumber"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            },
            {
              "@name": "facilities",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "2021-11-01",
                      "@valueType": "String",
                      "@attribute": "agreementDate"
                    },
                    {
                      "@value": "USD",
                      "@valueType": "String",
                      "@attribute": "currency"
                    },
                    {
                      "@value": "2021-11-02",
                      "@valueType": "String",
                      "@attribute": "effectiveDate"
                    },
                    {
                      "@value": "2023-11-02",
                      "@valueType": "String",
                      "@attribute": "expiryDate"
                    },
                    {
                      "@value": "IE151a",
                      "@valueType": "String",
                      "@attribute": "facilityName"
                    },
                    {
                      "@value": "RST",
                      "@valueType": "String",
                      "@attribute": "facilityType"
                    },
                    {
                      "@value": "2023-11-02",
                      "@valueType": "String",
                      "@attribute": "finalMaturityDate"
                    },
                    {
                      "@value": "ABC Corporation",
                      "@valueType": "String",
                      "@attribute": "borrowerLegalName"
                    },
                    {
                      "@value": "LIBOR",
                      "@valueType": "String",
                      "@attribute": "modifyInterestPricingOption"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": "",
              "LiqBusinessObject": [
                {
                  "@name": "outstandings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "PRIME",
                          "@valueType": "String",
                          "@attribute": "baseRate"
                        },
                        {
                          "@value": "John Smith",
                          "@valueType": "String",
                          "@attribute": "beneficiaries"
                        },
                        {
                          "@value": "John Smith",
                          "@valueType": "String",
                          "@attribute": "borrowerName"
                        },
                        {
                          "@value": "USD",
                          "@valueType": "String",
                          "@attribute": "currency"
                        },
                        {
                          "@value": "2021-11-02",
                          "@valueType": "String",
                          "@attribute": "effectiveDate"
                        },
                        {
                          "@value": "2023-11-02",
                          "@valueType": "String",
                          "@attribute": "expiryDate"
                        },
                        {
                          "@value": "SBLC",
                          "@valueType": "String",
                          "@attribute": "outstandingType"
                        },
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "pricingOption"
                        },
                        {
                          "@value": "ACQ",
                          "@valueType": "String",
                          "@attribute": "purpose"
                        },
                        {
                          "@value": "3M",
                          "@valueType": "String",
                          "@attribute": "repricingFrequency"
                        },
                        {
                          "@value": "LOANS",
                          "@valueType": "String",
                          "@attribute": "riskType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "interestPricings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LIBO,FIX",
                          "@valueType": "String",
                          "@attribute": "baseRate"
                        },
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "option"
                        },
                        {
                          "@value": "BANK",
                          "@valueType": "String",
                          "@attribute": "rateBasis"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "feePricings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "option"
                        },
                        {
                          "@value": "BANK",
                          "@valueType": "String",
                          "@attribute": "rateBasis"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "riskTypes",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LOANS",
                          "@valueType": "String",
                          "@attribute": "riskType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "purposes",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "ACQ",
                          "@valueType": "String",
                          "@attribute": "loanPurposeType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "supportedCurrencies",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "USD",
                          "@valueType": "String",
                          "@attribute": "currencyLimit"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                }
              ]
            },
            {
              "@name": "pricingOptions",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "LIBOR",
                      "@valueType": "String",
                      "@attribute": "option"
                    },
                    {
                      "@value": "USD",
                      "@valueType": "String",
                      "@attribute": "currency"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            },
            {
              "@name": "originationPrimaries",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "HB Americas",
                      "@valueType": "String",
                      "@attribute": "lenderName"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            }
          ]
        }
      ]
    },
    {
      "bookingRequestId": "124",
      "LiqBusinessObject": [
        {
          "@name": "deal",
          "groups": [
            {
              "@name": "heading",
              "items": [
                {
                  "@value": "IE21",
                  "@valueType": "String",
                  "@attribute": "dealTrackingNumber"
                },
                {
                  "@value": "Smith Foods Credit Agreement4561",
                  "@valueType": "String",
                  "@attribute": "creditAgreementName"
                },
                {
                  "@value": "00002",
                  "@valueType": "String",
                  "@attribute": "branch"
                },
                {
                  "@value": "FRONA",
                  "@valueType": "String",
                  "@attribute": "department"
                },
                {
                  "@value": "CLDA",
                  "@valueType": "String",
                  "@attribute": "processingArea"
                },
                {
                  "@value": "ACQ",
                  "@valueType": "String",
                  "@attribute": "dealClassification"
                },
                {
                  "@value": "LIBOR",
                  "@valueType": "String",
                  "@attribute": "interestPricingRules"
                },
                {
                  "@value": "UNUT",
                  "@valueType": "String",
                  "@attribute": "feePricingRules"
                },
                {
                  "@value": "2021-11-02",
                  "@valueType": "String",
                  "@attribute": "agreementDate"
                },
                {
                  "@value": "In Progress",
                  "@valueType": "String",
                  "@attribute": "creditDocumentationStatus"
                },
                {
                  "@value": "2021-11-02",
                  "@valueType": "String",
                  "@attribute": "targetFundingDate"
                },
                {
                  "@value": "USD",
                  "@valueType": "String",
                  "@attribute": "currency"
                },
                {
                  "@value": "John Smith",
                  "@valueType": "String",
                  "@attribute": "relationshipManagerName"
                },
                {
                  "@value": "ABC Corp",
                  "@valueType": "String",
                  "@attribute": "primaryBorrower"
                }
              ]
            }
          ],
          "@objectType": "",
          "@objectId": "",
          "LiqBusinessObject": [
            {
              "@name": "borrowers",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "CUST100123",
                      "@valueType": "String",
                      "@attribute": "cifNumber"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            },
            {
              "@name": "facilities",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "2021-11-01",
                      "@valueType": "String",
                      "@attribute": "agreementDate"
                    },
                    {
                      "@value": "USD",
                      "@valueType": "String",
                      "@attribute": "currency"
                    },
                    {
                      "@value": "2021-11-02",
                      "@valueType": "String",
                      "@attribute": "effectiveDate"
                    },
                    {
                      "@value": "2023-11-02",
                      "@valueType": "String",
                      "@attribute": "expiryDate"
                    },
                    {
                      "@value": "IE21",
                      "@valueType": "String",
                      "@attribute": "facilityName"
                    },
                    {
                      "@value": "RST",
                      "@valueType": "String",
                      "@attribute": "facilityType"
                    },
                    {
                      "@value": "2023-11-02",
                      "@valueType": "String",
                      "@attribute": "finalMaturityDate"
                    },
                    {
                      "@value": "ABC Corporation",
                      "@valueType": "String",
                      "@attribute": "borrowerLegalName"
                    },
                    {
                      "@value": "LIBOR",
                      "@valueType": "String",
                      "@attribute": "modifyInterestPricingOption"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": "",
              "LiqBusinessObject": [
                {
                  "@name": "outstandings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "PRIME",
                          "@valueType": "String",
                          "@attribute": "baseRate"
                        },
                        {
                          "@value": "John Smith",
                          "@valueType": "String",
                          "@attribute": "beneficiaries"
                        },
                        {
                          "@value": "John Smith",
                          "@valueType": "String",
                          "@attribute": "borrowerName"
                        },
                        {
                          "@value": "USD",
                          "@valueType": "String",
                          "@attribute": "currency"
                        },
                        {
                          "@value": "2021-11-02",
                          "@valueType": "String",
                          "@attribute": "effectiveDate"
                        },
                        {
                          "@value": "2023-11-02",
                          "@valueType": "String",
                          "@attribute": "expiryDate"
                        },
                        {
                          "@value": "SBLC",
                          "@valueType": "String",
                          "@attribute": "outstandingType"
                        },
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "pricingOption"
                        },
                        {
                          "@value": "ACQ",
                          "@valueType": "String",
                          "@attribute": "purpose"
                        },
                        {
                          "@value": "3M",
                          "@valueType": "String",
                          "@attribute": "repricingFrequency"
                        },
                        {
                          "@value": "LOANS",
                          "@valueType": "String",
                          "@attribute": "riskType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "interestPricings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LIBO,FIX",
                          "@valueType": "String",
                          "@attribute": "baseRate"
                        },
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "option"
                        },
                        {
                          "@value": "BANK",
                          "@valueType": "String",
                          "@attribute": "rateBasis"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "feePricings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "option"
                        },
                        {
                          "@value": "BANK",
                          "@valueType": "String",
                          "@attribute": "rateBasis"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "riskTypes",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LOANS",
                          "@valueType": "String",
                          "@attribute": "riskType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "supportedCurrencies",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "USD",
                          "@valueType": "String",
                          "@attribute": "currencyLimit"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "purposes",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "ACQ",
                          "@valueType": "String",
                          "@attribute": "loanPurposeType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                }
              ]
            },
            {
              "@name": "pricingOptions",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "LIBOR",
                      "@valueType": "String",
                      "@attribute": "option"
                    },
                    {
                      "@value": "USD",
                      "@valueType": "String",
                      "@attribute": "currency"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            },
            {
              "@name": "originationPrimaries",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "HB Americas",
                      "@valueType": "String",
                      "@attribute": "lenderName"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            }
          ]
        }
      ]
    },
    {
      "bookingRequestId": "125",
      "LiqBusinessObject": [
        {
          "@name": "deal",
          "groups": [
            {
              "@name": "heading",
              "items": [
                {
                  "@value": "book212",
                  "@valueType": "String",
                  "@attribute": "dealTrackingNumber"
                },
                {
                  "@value": "Smith Foods Credit Agreement212",
                  "@valueType": "String",
                  "@attribute": "creditAgreementName"
                },
                {
                  "@value": "00005",
                  "@valueType": "String",
                  "@attribute": "branch"
                },
                {
                  "@value": "FRONL",
                  "@valueType": "String",
                  "@attribute": "department"
                },
                {
                  "@value": "CLDA",
                  "@valueType": "String",
                  "@attribute": "processingArea"
                },
                {
                  "@value": "ACQ",
                  "@valueType": "String",
                  "@attribute": "dealClassification"
                },
                {
                  "@value": "LIBOR",
                  "@valueType": "String",
                  "@attribute": "interestPricingRules"
                },
                {
                  "@value": "UNUT",
                  "@valueType": "String",
                  "@attribute": "feePricingRules"
                },
                {
                  "@value": "2021-11-09",
                  "@valueType": "String",
                  "@attribute": "agreementDate"
                },
                {
                  "@value": "In Progress",
                  "@valueType": "String",
                  "@attribute": "creditDocumentationStatus"
                },
                {
                  "@value": "2021-11-02",
                  "@valueType": "String",
                  "@attribute": "targetFundingDate"
                },
                {
                  "@value": "USD",
                  "@valueType": "String",
                  "@attribute": "currency"
                },
                {
                  "@value": "John Smith",
                  "@valueType": "String",
                  "@attribute": "relationshipManagerName"
                },
                {
                  "@value": "ABC Corp",
                  "@valueType": "String",
                  "@attribute": "primaryBorrower"
                }
              ]
            }
          ],
          "@objectType": "",
          "@objectId": "",
          "LiqBusinessObject": [
            {
              "@name": "borrowers",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "CUST111023",
                      "@valueType": "String",
                      "@attribute": "cifNumber"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            },
            {
              "@name": "facilities",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "2021-11-09",
                      "@valueType": "String",
                      "@attribute": "agreementDate"
                    },
                    {
                      "@value": "USD",
                      "@valueType": "String",
                      "@attribute": "currency"
                    },
                    {
                      "@value": "2021-11-10",
                      "@valueType": "String",
                      "@attribute": "effectiveDate"
                    },
                    {
                      "@value": "2023-11-02",
                      "@valueType": "String",
                      "@attribute": "expiryDate"
                    },
                    {
                      "@value": "Smith Foods Term212",
                      "@valueType": "String",
                      "@attribute": "facilityName"
                    },
                    {
                      "@value": "RST",
                      "@valueType": "String",
                      "@attribute": "facilityType"
                    },
                    {
                      "@value": "2023-11-02",
                      "@valueType": "String",
                      "@attribute": "finalMaturityDate"
                    },
                    {
                      "@value": "ABC Corporation",
                      "@valueType": "String",
                      "@attribute": "borrowerLegalName"
                    },
                    {
                      "@value": "LIBOR",
                      "@valueType": "String",
                      "@attribute": "modifyInterestPricingOption"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": "",
              "LiqBusinessObject": [
                {
                  "@name": "outstandings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "PRIME",
                          "@valueType": "String",
                          "@attribute": "baseRate"
                        },
                        {
                          "@value": "John Smith",
                          "@valueType": "String",
                          "@attribute": "beneficiaries"
                        },
                        {
                          "@value": "John Smith",
                          "@valueType": "String",
                          "@attribute": "borrowerName"
                        },
                        {
                          "@value": "USD",
                          "@valueType": "String",
                          "@attribute": "currency"
                        },
                        {
                          "@value": "2021-11-10",
                          "@valueType": "String",
                          "@attribute": "effectiveDate"
                        },
                        {
                          "@value": "2023-11-02",
                          "@valueType": "String",
                          "@attribute": "expiryDate"
                        },
                        {
                          "@value": "SBLC",
                          "@valueType": "String",
                          "@attribute": "outstandingType"
                        },
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "pricingOption"
                        },
                        {
                          "@value": "ACQ",
                          "@valueType": "String",
                          "@attribute": "purpose"
                        },
                        {
                          "@value": "3M",
                          "@valueType": "String",
                          "@attribute": "repricingFrequency"
                        },
                        {
                          "@value": "LOANS",
                          "@valueType": "String",
                          "@attribute": "riskType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "interestPricings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LIBO,FIX",
                          "@valueType": "String",
                          "@attribute": "baseRate"
                        },
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "option"
                        },
                        {
                          "@value": "BANK",
                          "@valueType": "String",
                          "@attribute": "rateBasis"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "feePricings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "option"
                        },
                        {
                          "@value": "BANK",
                          "@valueType": "String",
                          "@attribute": "rateBasis"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "riskTypes",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LOANS",
                          "@valueType": "String",
                          "@attribute": "riskType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "supportedCurrencies",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "USD",
                          "@valueType": "String",
                          "@attribute": "currencyLimit"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "purposes",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "ACQ",
                          "@valueType": "String",
                          "@attribute": "loanPurposeType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                }
              ]
            },
            {
              "@name": "pricingOptions",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "LIBOR",
                      "@valueType": "String",
                      "@attribute": "option"
                    },
                    {
                      "@value": "USD",
                      "@valueType": "String",
                      "@attribute": "currency"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            },
            {
              "@name": "originationPrimaries",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "HB Americas",
                      "@valueType": "String",
                      "@attribute": "lenderName"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            }
          ]
        }
      ]
    },
    {
      "bookingRequestId": "126",
      "LiqBusinessObject": [
        {
          "@name": "deal",
          "groups": [
            {
              "@name": "heading",
              "items": [
                {
                  "@value": "book2003",
                  "@valueType": "String",
                  "@attribute": "dealTrackingNumber"
                },
                {
                  "@value": "Smith Foods Credit Agreement456",
                  "@valueType": "String",
                  "@attribute": "creditAgreementName"
                },
                {
                  "@value": "12345",
                  "@valueType": "String",
                  "@attribute": "branch"
                },
                {
                  "@value": "FRONL",
                  "@valueType": "String",
                  "@attribute": "department"
                },
                {
                  "@value": "CLDA",
                  "@valueType": "String",
                  "@attribute": "processingArea"
                },
                {
                  "@value": "ACQ",
                  "@valueType": "String",
                  "@attribute": "dealClassification"
                },
                {
                  "@value": "LIBOR",
                  "@valueType": "String",
                  "@attribute": "interestPricingRules"
                },
                {
                  "@value": "UNUT",
                  "@valueType": "String",
                  "@attribute": "feePricingRules"
                },
                {
                  "@value": "2021-11-02",
                  "@valueType": "String",
                  "@attribute": "agreementDate"
                },
                {
                  "@value": "In Progress",
                  "@valueType": "String",
                  "@attribute": "creditDocumentationStatus"
                },
                {
                  "@value": "2021-11-02",
                  "@valueType": "String",
                  "@attribute": "targetFundingDate"
                },
                {
                  "@value": "USD",
                  "@valueType": "String",
                  "@attribute": "currency"
                },
                {
                  "@value": "John Smith",
                  "@valueType": "String",
                  "@attribute": "relationshipManagerName"
                },
                {
                  "@value": "ABC Corp",
                  "@valueType": "String",
                  "@attribute": "primaryBorrower"
                }
              ]
            }
          ],
          "@objectType": "",
          "@objectId": "",
          "LiqBusinessObject": [
            {
              "@name": "borrowers",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "CUST100123",
                      "@valueType": "String",
                      "@attribute": "cifNumber"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            },
            {
              "@name": "facilities",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "2021-11-01",
                      "@valueType": "String",
                      "@attribute": "agreementDate"
                    },
                    {
                      "@value": "USD",
                      "@valueType": "String",
                      "@attribute": "currency"
                    },
                    {
                      "@value": "2021-11-02",
                      "@valueType": "String",
                      "@attribute": "effectiveDate"
                    },
                    {
                      "@value": "2023-11-02",
                      "@valueType": "String",
                      "@attribute": "expiryDate"
                    },
                    {
                      "@value": "Smith Foods Term2003",
                      "@valueType": "String",
                      "@attribute": "facilityName"
                    },
                    {
                      "@value": "RST",
                      "@valueType": "String",
                      "@attribute": "facilityType"
                    },
                    {
                      "@value": "2023-11-02",
                      "@valueType": "String",
                      "@attribute": "finalMaturityDate"
                    },
                    {
                      "@value": "ABC Corporation",
                      "@valueType": "String",
                      "@attribute": "borrowerLegalName"
                    },
                    {
                      "@value": "LIBOR",
                      "@valueType": "String",
                      "@attribute": "modifyInterestPricingOption"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": "",
              "LiqBusinessObject": [
                {
                  "@name": "outstandings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "PRIME",
                          "@valueType": "String",
                          "@attribute": "baseRate"
                        },
                        {
                          "@value": "John Smith",
                          "@valueType": "String",
                          "@attribute": "beneficiaries"
                        },
                        {
                          "@value": "John Smith",
                          "@valueType": "String",
                          "@attribute": "borrowerName"
                        },
                        {
                          "@value": "USD",
                          "@valueType": "String",
                          "@attribute": "currency"
                        },
                        {
                          "@value": "2021-11-02",
                          "@valueType": "String",
                          "@attribute": "effectiveDate"
                        },
                        {
                          "@value": "2023-11-02",
                          "@valueType": "String",
                          "@attribute": "expiryDate"
                        },
                        {
                          "@value": "SBLC",
                          "@valueType": "String",
                          "@attribute": "outstandingType"
                        },
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "pricingOption"
                        },
                        {
                          "@value": "ACQ",
                          "@valueType": "String",
                          "@attribute": "purpose"
                        },
                        {
                          "@value": "3M",
                          "@valueType": "String",
                          "@attribute": "repricingFrequency"
                        },
                        {
                          "@value": "LOANS",
                          "@valueType": "String",
                          "@attribute": "riskType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "interestPricings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LIBO,FIX",
                          "@valueType": "String",
                          "@attribute": "baseRate"
                        },
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "option"
                        },
                        {
                          "@value": "BANK",
                          "@valueType": "String",
                          "@attribute": "rateBasis"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "feePricings",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LIBOR",
                          "@valueType": "String",
                          "@attribute": "option"
                        },
                        {
                          "@value": "BANK",
                          "@valueType": "String",
                          "@attribute": "rateBasis"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "riskTypes",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "LOANS",
                          "@valueType": "String",
                          "@attribute": "riskType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "purposes",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "ACQ",
                          "@valueType": "String",
                          "@attribute": "loanPurposeType"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                },
                {
                  "@name": "supportedCurrencies",
                  "groups": [
                    {
                      "@name": "heading",
                      "items": [
                        {
                          "@value": "USD",
                          "@valueType": "String",
                          "@attribute": "currencyLimit"
                        }
                      ]
                    }
                  ],
                  "@objectType": "",
                  "@objectId": ""
                }
              ]
            },
            {
              "@name": "pricingOptions",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "LIBOR",
                      "@valueType": "String",
                      "@attribute": "option"
                    },
                    {
                      "@value": "USD",
                      "@valueType": "String",
                      "@attribute": "currency"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            },
            {
              "@name": "originationPrimaries",
              "groups": [
                {
                  "@name": "heading",
                  "items": [
                    {
                      "@value": "HB Americas",
                      "@valueType": "String",
                      "@attribute": "lenderName"
                    }
                  ]
                }
              ],
              "@objectType": "",
              "@objectId": ""
            }
          ]
        }
      ]
    }
  ]
  
  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.objData.forEach(row => {
      let a = this.createDataContainer(this.objData, true);
      console.log(a);
    })
    

  }
  createDataContainer(data, isLiqChildObj?, liqChildObj?) {
    let hashMapObject = [];
    let liqObject = data;
    let eachLiqObj = data;
    let tempObject = {};
    //liqObject.forEach(eachLiqObj => {
    eachLiqObj = isLiqChildObj ? eachLiqObj : eachLiqObj['LiqBusinessObject'];
    if (eachLiqObj instanceof Array) {
      eachLiqObj.forEach((eachObj) => {
        let childObject = {};
        if (
          eachObj['LiqBusinessObject'] &&
          eachObj['LiqBusinessObject'].length > 0
        ) {
          childObject = this.createDataContainer(
            eachObj['LiqBusinessObject'],
            true,
            eachObj
          );
        }
        tempObject[eachObj['@name']] = this.parseGroupArray(
          eachObj['groups'],
          childObject
        );
      });
    } else {
      let childObject = {};
      if (
        eachLiqObj['LiqBusinessObject'] &&
        eachLiqObj['LiqBusinessObject'].length > 0
      ) {
        childObject = this.createDataContainer(
          eachLiqObj['LiqBusinessObject'],
          true,
          eachLiqObj
        );
      }
      if (eachLiqObj['groups'] !== undefined) {
        tempObject[eachLiqObj['@name']] = this.parseGroupArray(
          eachLiqObj['groups'],
          childObject
        );
        // tempObject[eachLiqObj['@name']] = this.parseGroupArray(eachLiqObj['groups'], childObject) ;
      }
      //tempObject[eachLiqObj['@name']] = this.parseGroupArray(eachLiqObj['groups'], childObject);
    }
    //});
    if (liqObject[0] && liqObject[0]['@name'] === 'deal') {
      hashMapObject.push(tempObject['deal'][0]);
    } else if (liqObject['@name']) {
      hashMapObject[liqObject['@name']] = tempObject;
    } else if (isLiqChildObj) {
      this.outerFun.push(tempObject);
      return tempObject;
    }
    return hashMapObject;
  }

  parseGroupArray(groupDataArray, childObject?) {
    let groupArray = [];
    if (groupDataArray.length > 0) {
      groupDataArray.forEach((eachGroup) => {
        let groupObject = {};
        eachGroup['items'].forEach((eachAttribute) => {
          groupObject[eachAttribute['@attribute']] =
            this.getAttributeValue(eachAttribute);
        });
        if (childObject) {
          Object.entries(childObject).forEach(([key, value]) => {
            groupObject[key] = value;
          });
        }
        groupArray.push(groupObject);
      });
    }
    return groupArray;
  }

  getAttributeValue(attribute) {
    return attribute['@value'] ? attribute['@value'] : '';
  }
}
