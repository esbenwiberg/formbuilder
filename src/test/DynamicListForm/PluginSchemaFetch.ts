// FAKE API CALL
export const PluginSchemaFetch = (key: string | undefined) : Promise<any> | undefined => {
    if (key == undefined) return undefined;
    return new Promise<any>((resolve, reject) => {

        // fake api call
        setTimeout(() => {
            let schema = schemas.find(_ => _.Id == key);
            if (schema == null) reject();
            resolve(schema);
        }, 500);
    });
}

export const schemas = [
	{
		"TypeName": "AccessVerify",
		"Id": "fa664d40-5d0a-48bc-99da-854c3c85ade1",
		"Name": "PowerHub - Access Verify",
		"Url": "/api/plugin/powerhub/fa664d40-5d0a-48bc-99da-854c3c85ade1",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "AddAccessor",
		"Id": "dd94b337-2b42-4723-8da4-3e084acbe78e",
		"Name": "Add Accessor",
		"Url": "/api/plugin/powerhub/dd94b337-2b42-4723-8da4-3e084acbe78e",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "ExpandoObject",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "AddFirewallRule",
		"Id": "7aa1c968-3067-4859-8eba-c0268db1896c",
		"Name": "Add Firewall Rule",
		"Url": "/api/plugin/powerhub/7aa1c968-3067-4859-8eba-c0268db1896c",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Id",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RangeFrom",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RangeTo",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "FirewallRuleDto",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "Availability",
		"Id": "ef6f6bbe-81fa-46eb-9058-2ba5b289c2d4",
		"Name": "Dummy plugin - used for checking app service availabilty",
		"Url": "/api/plugin/powerhub/ef6f6bbe-81fa-46eb-9058-2ba5b289c2d4",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "AzureManagementInvoke",
		"Id": "7fe5e33e-8a3b-4def-aa95-7991bb327d2e",
		"Name": "Azure Management - Invoker - Used for invoking azure management methods for generel use.",
		"Url": "/api/plugin/powerhub/7fe5e33e-8a3b-4def-aa95-7991bb327d2e",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Method",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"KeyType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Parameters",
						"Type": "String",
						"IsStandard": true,
						"IsNullable": false
					},
					"ValueType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Parameters",
						"Type": "Object",
						"IsStandard": true,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Parameters",
					"Type": "Dictionary",
					"IsStandard": false,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "AzureManagementDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "AzureManagementSchema",
		"Id": "da744643-8244-403a-826b-19f80f7fa09e",
		"Name": "Azure Management - Schema - JSON Schema for Azure Management.",
		"Url": "/api/plugin/powerhub/da744643-8244-403a-826b-19f80f7fa09e",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSAccessVerify",
		"Id": "2b033d87-6f33-415e-8f92-cd2bd2798c99",
		"Name": "CDS - Access Verify",
		"Url": "/api/plugin/powerhub/2b033d87-6f33-415e-8f92-cd2bd2798c99",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSAddDefaultSchedules",
		"Id": "2cd6c29d-9588-44f3-b831-fc105191e6a3",
		"Name": "CDS - Schedules - Add Defaults",
		"Url": "/api/plugin/powerhub/2cd6c29d-9588-44f3-b831-fc105191e6a3",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": true
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSAddPublishAllSBStep",
		"Id": "3b1dd79b-033f-49c0-a0f1-6055aa640006",
		"Name": "CDS - SB - Add PublishAll",
		"Url": "/api/plugin/powerhub/3b1dd79b-033f-49c0-a0f1-6055aa640006",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSAddSBServiceEndpoint",
		"Id": "0181ad3d-8092-4602-ad91-facfa85e8f21",
		"Name": "CDS - SB - Add Service Endpoint",
		"Url": "/api/plugin/powerhub/0181ad3d-8092-4602-ad91-facfa85e8f21",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSAddSBServiceEndpointStep",
		"Id": "92d75b38-df3f-46d8-8f20-8f18c4ecbb50",
		"Name": "CDS - SB - Add Step",
		"Url": "/api/plugin/powerhub/92d75b38-df3f-46d8-8f20-8f18c4ecbb50",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSDeleteMany2ManyReferences",
		"Id": "e177b210-21da-4749-81be-ac6249137dc1",
		"Name": "CDS - Delete ManyToMany references",
		"Url": "/api/plugin/powerhub/e177b210-21da-4749-81be-ac6249137dc1",
		"Request": {
			"Properties": [
				{
					"ElementType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Items",
						"Type": "ExpandoObject",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Items",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSDataEntityDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSDeleteSBServiceEndpoint",
		"Id": "67cc8c33-5143-412f-94ef-e4da8e9e6d84",
		"Name": "CDS - SB - Delete Service Endpoint",
		"Url": "/api/plugin/powerhub/67cc8c33-5143-412f-94ef-e4da8e9e6d84",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSGetData",
		"Id": "23e2e08d-bdcc-4956-8a2a-b424b7f64376",
		"Name": "CDS - Get Data (Single)",
		"Url": "/api/plugin/powerhub/23e2e08d-bdcc-4956-8a2a-b424b7f64376",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSQueryDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSGetEntityDefinitions",
		"Id": "14a8e968-4fef-4257-bc3d-e5733d462012",
		"Name": "CDS - Get EntityDefinitions",
		"Url": "/api/plugin/powerhub/14a8e968-4fef-4257-bc3d-e5733d462012",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSQueryDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSGetGlobalOptionSets",
		"Id": "d8384fad-865f-4220-b3e3-1e5a2a752713",
		"Name": "CDS - Get Global Option Sets",
		"Url": "/api/plugin/powerhub/d8384fad-865f-4220-b3e3-1e5a2a752713",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSQueryDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSGetMetadata",
		"Id": "1c556bf2-89c5-452d-b7f4-ce75a807fb74",
		"Name": "CDS - Get Metadata",
		"Url": "/api/plugin/powerhub/1c556bf2-89c5-452d-b7f4-ce75a807fb74",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSQueryDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSGetOptionSets",
		"Id": "f7845afa-c9fe-49a2-8ad4-1c88caa07c50",
		"Name": "CDS - Get Option Sets",
		"Url": "/api/plugin/powerhub/f7845afa-c9fe-49a2-8ad4-1c88caa07c50",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSQueryDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSGetSolutions",
		"Id": "ece6ac1c-042a-4a0d-99e8-72b6aa0e2f9e",
		"Name": "CDS - Get Solutions",
		"Url": "/api/plugin/powerhub/ece6ac1c-042a-4a0d-99e8-72b6aa0e2f9e",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSSourceDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSGroupToggleSync",
		"Id": "adddaef1-42f9-40f6-9c06-103ed59a28fa",
		"Name": "CDS - Group toggle sync",
		"Url": "/api/plugin/powerhub/adddaef1-42f9-40f6-9c06-103ed59a28fa",
		"Request": {
			"Properties": [
				{
					"ElementType": {
						"MemberType": "TypeInfo",
						"Name": "Entities",
						"Type": "String",
						"IsStandard": true,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Entities",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"ElementType": {
						"MemberType": "TypeInfo",
						"Name": "ManyToMany",
						"Type": "String",
						"IsStandard": true,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "ManyToMany",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Toggle",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "GoupToggleDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSHook",
		"Id": "a32770b5-113e-436e-889d-f240a4b62fce",
		"Name": "CDS Webhook",
		"Url": "/api/plugin/powerhub/a32770b5-113e-436e-889d-f240a4b62fce",
		"Request": {
			"Properties": [
				{
					"ElementType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Items",
						"Type": "ExpandoObject",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Items",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubRequest",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSHookUpsert",
		"Id": "85e2fca3-0999-4f66-b62d-a4b8bc9a91f2",
		"Name": "CDS - Hook Upsert",
		"Url": "/api/plugin/powerhub/85e2fca3-0999-4f66-b62d-a4b8bc9a91f2",
		"Request": {
			"Properties": [
				{
					"ElementType": {
						"Properties": [
							{
								"MemberType": "Property",
								"Name": "key",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": []
							},
							{
								"Properties": [
									{
										"ElementType": {
											"Properties": [
												{
													"MemberType": "Property",
													"Name": "key",
													"Type": "String",
													"IsStandard": true,
													"IsNullable": false,
													"DataAnnotations": []
												},
												{
													"MemberType": "Property",
													"Name": "value",
													"Type": "Object",
													"IsStandard": true,
													"IsNullable": false,
													"DataAnnotations": [
														{
															"Name": "DynamicAttribute",
															"Properties": {
																"TransformFlags": [
																	true
																]
															}
														}
													]
												}
											],
											"MemberType": "TypeInfo",
											"Name": "Attributes",
											"Type": "Attributes",
											"IsStandard": false,
											"IsNullable": false
										},
										"MemberType": "Property",
										"Name": "Attributes",
										"Type": "List",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									}
								],
								"MemberType": "TypeInfo",
								"Name": "value",
								"Type": "InputTarget",
								"IsStandard": false,
								"IsNullable": false
							}
						],
						"MemberType": "TypeInfo",
						"Name": "InputParameters",
						"Type": "InputParameter",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "InputParameters",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "MessageName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PrimaryEntityName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PrimaryEntityId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSUpdateEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSManyToManyUpdate",
		"Id": "0ec9718d-8566-4ffe-929a-7b9c91da9479",
		"Name": "CDS Many To Many Update",
		"Url": "/api/plugin/powerhub/0ec9718d-8566-4ffe-929a-7b9c91da9479",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"KeyType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Item",
						"Type": "String",
						"IsStandard": true,
						"IsNullable": false
					},
					"ValueType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Item",
						"Type": "Object",
						"IsStandard": true,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Item",
					"Type": "Dictionary",
					"IsStandard": false,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "MessageName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSManyToManyUpdateDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSMetdataUpdateOptionSets",
		"Id": "70ad40e6-c689-4d9d-b1b1-a16e3da47b26",
		"Name": "CDS - Metadata Update OptionSets",
		"Url": "/api/plugin/powerhub/70ad40e6-c689-4d9d-b1b1-a16e3da47b26",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSQueryDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSPostAddSource",
		"Id": "55f43d00-7777-4530-a3b0-a4d0fdc23025",
		"Name": "CDS - Post - Add Source",
		"Url": "/api/plugin/powerhub/55f43d00-7777-4530-a3b0-a4d0fdc23025",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSPostDeleteSource",
		"Id": "095cfded-e1e5-4e4b-84d5-4920316e4185",
		"Name": "CDS - Post - Delete Source",
		"Url": "/api/plugin/powerhub/095cfded-e1e5-4e4b-84d5-4920316e4185",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSRefreshData",
		"Id": "a341a836-3624-4fea-bfa9-03c763caf19f",
		"Name": "CDS - Refresh Data",
		"Url": "/api/plugin/powerhub/a341a836-3624-4fea-bfa9-03c763caf19f",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSRefreshMetadata",
		"Id": "6eec5176-0deb-446b-93e2-6a8fdcb091ad",
		"Name": "CDS - Refresh Metadata",
		"Url": "/api/plugin/powerhub/6eec5176-0deb-446b-93e2-6a8fdcb091ad",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshData",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSRefreshMetadataDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSRemoveSBServiceEndpointStep",
		"Id": "c28f9f49-1df2-4d33-8dbb-085f197b2513",
		"Name": "CDS - SB - Remove Steps",
		"Url": "/api/plugin/powerhub/c28f9f49-1df2-4d33-8dbb-085f197b2513",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSSBAddBaseSteps",
		"Id": "cb31d806-0018-4b60-8ddf-0703fc1d5c69",
		"Name": "CDS - SB - Add Base Steps",
		"Url": "/api/plugin/powerhub/cb31d806-0018-4b60-8ddf-0703fc1d5c69",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSSBEnsureWhitelist",
		"Id": "ad904a6c-e21e-4b9d-a7e9-23603d01e6bd",
		"Name": "CDS - SB - Ensure Whitelist",
		"Url": "/api/plugin/powerhub/ad904a6c-e21e-4b9d-a7e9-23603d01e6bd",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSSBGetAllSteps",
		"Id": "e4a39c17-b176-4511-9da3-bfa638606fd0",
		"Name": "CDS - SB - Get All Steps",
		"Url": "/api/plugin/powerhub/e4a39c17-b176-4511-9da3-bfa638606fd0",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSSBManyToManySteps",
		"Id": "a6ec65a5-4c45-4d3d-a6b7-867c9d14dff1",
		"Name": "CDS - SB - Many To Many Steps",
		"Url": "/api/plugin/powerhub/a6ec65a5-4c45-4d3d-a6b7-867c9d14dff1",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSSBMessageFilters",
		"Id": "293dc6ed-607d-4f17-9e79-7543c277dbc0",
		"Name": "CDS - SB - Message Filters",
		"Url": "/api/plugin/powerhub/293dc6ed-607d-4f17-9e79-7543c277dbc0",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSSourceDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSSBRemoveAllSteps",
		"Id": "ccd13ad8-03d3-4305-a976-a7349603f48a",
		"Name": "CDS - SB - Remove All Steps",
		"Url": "/api/plugin/powerhub/ccd13ad8-03d3-4305-a976-a7349603f48a",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSTest",
		"Id": "8113df78-3ea7-4479-91b4-937a74abf0e4",
		"Name": "CDS - Test plugin",
		"Url": "/api/plugin/powerhub/8113df78-3ea7-4479-91b4-937a74abf0e4",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSToggleSync",
		"Id": "19be38ef-cc20-420f-9110-6243541a62d3",
		"Name": "CDS - Toggle Sync",
		"Url": "/api/plugin/powerhub/19be38ef-cc20-420f-9110-6243541a62d3",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "AttributeSystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Toggle",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "ToggleSyncDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSUpdateData",
		"Id": "2dd6b3be-9312-49f7-8ee5-e55d617e3f28",
		"Name": "CDS - Refresh Data",
		"Url": "/api/plugin/powerhub/2dd6b3be-9312-49f7-8ee5-e55d617e3f28",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSQueryDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSUpdateGroups",
		"Id": "50f2b145-16d2-4bd6-9096-78f2952cc2f3",
		"Name": "CDS - Refresh Groups",
		"Url": "/api/plugin/powerhub/50f2b145-16d2-4bd6-9096-78f2952cc2f3",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSSourceDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSUpdateMetadata",
		"Id": "d6916711-9c02-439c-b60c-4220f5961728",
		"Name": "CDS - Metadata Update",
		"Url": "/api/plugin/powerhub/d6916711-9c02-439c-b60c-4220f5961728",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CDSQueryDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CDSUpdateSource",
		"Id": "85d0f734-2f0b-496d-a243-fc8a7b99c829",
		"Name": "CDS - Update source",
		"Url": "/api/plugin/powerhub/85d0f734-2f0b-496d-a243-fc8a7b99c829",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Description",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Type",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "PHSource",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "ClearTempMetadataTables",
		"Id": "68287e0f-5ca6-4596-abad-a8c61be0016d",
		"Name": "Clear Temp Metadata Tables",
		"Url": "/api/plugin/powerhub/68287e0f-5ca6-4596-abad-a8c61be0016d",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CreateAlterTableView",
		"Id": "488ea653-64c3-4d8c-98de-aba4fdfb13af",
		"Name": "Create Alter Table Vieew",
		"Url": "/api/plugin/powerhub/488ea653-64c3-4d8c-98de-aba4fdfb13af",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CreateAlterTableViewWhiteList",
		"Id": "2461fcfe-7138-4570-a7b0-45ca7f14f00d",
		"Name": "Create Alter Table Vieew - White List",
		"Url": "/api/plugin/powerhub/2461fcfe-7138-4570-a7b0-45ca7f14f00d",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CreateHubUser",
		"Id": "470485c9-c5be-49c7-9fa2-33268edb8285",
		"Name": "Create Hub User",
		"Url": "/api/plugin/powerhub/470485c9-c5be-49c7-9fa2-33268edb8285",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserPrincipalName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Email",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CreateHubUserDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CreateSQLUser",
		"Id": "01b61213-dac4-46b7-bf45-a996b82fb79c",
		"Name": "Create SQL User",
		"Url": "/api/plugin/powerhub/01b61213-dac4-46b7-bf45-a996b82fb79c",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserPrincipalName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "UserName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Password",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "CreateSQLUserDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "CronValidator",
		"Id": "0d10b89f-9a29-4f77-87fe-9aa607fc0c77",
		"Name": "Schedules - Cron Validator (Used to test your cron expressions)",
		"Url": "/api/plugin/powerhub/0d10b89f-9a29-4f77-87fe-9aa607fc0c77",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DeleteFirewallRule",
		"Id": "c4988546-a6ca-4ffc-8c2d-15d0c1a701b1",
		"Name": "Delete Firewall Rule",
		"Url": "/api/plugin/powerhub/c4988546-a6ca-4ffc-8c2d-15d0c1a701b1",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Id",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RangeFrom",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RangeTo",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "FirewallRuleDto",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DeleteHubSQLUser",
		"Id": "6bad1c07-3484-4ae7-8f42-43aa14a3cc2e",
		"Name": "Delete Hub SQL User",
		"Url": "/api/plugin/powerhub/6bad1c07-3484-4ae7-8f42-43aa14a3cc2e",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DeleteScheduleJob",
		"Id": "92af9f22-c45e-431c-a685-95ad89f0f310",
		"Name": "Schedules - Schedule Delete (Deletes a job from a schedule)",
		"Url": "/api/plugin/powerhub/92af9f22-c45e-431c-a685-95ad89f0f310",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Id",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "CronExpression",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PluginId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PluginName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Body",
					"Type": "Object",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"KeyType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Properties",
						"Type": "String",
						"IsStandard": true,
						"IsNullable": false
					},
					"ValueType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Properties",
						"Type": "Object",
						"IsStandard": true,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Properties",
					"Type": "Dictionary",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "LastOccurrence",
					"Type": "DateTime",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "NextOccurrence",
					"Type": "DateTime",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"Properties": [],
					"MemberType": "TypeInfo",
					"Name": "LastRuns",
					"Type": "Queue`1",
					"IsStandard": false,
					"IsNullable": false
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "IScheduleJob",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DeleteSource",
		"Id": "2faac5ac-99e9-4c35-8eeb-ac3e05c136da",
		"Name": "Delete Source",
		"Url": "/api/plugin/powerhub/2faac5ac-99e9-4c35-8eeb-ac3e05c136da",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DeleteSQLUser",
		"Id": "454c0182-2f52-46d7-b0ff-8e765a256ccf",
		"Name": "Delete SQL User",
		"Url": "/api/plugin/powerhub/454c0182-2f52-46d7-b0ff-8e765a256ccf",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DeploymentSteps",
		"Id": "1d4c7f31-6430-475d-8161-2b759da54d0d",
		"Name": "Get Deployment Steps",
		"Url": "/api/plugin/powerhub/1d4c7f31-6430-475d-8161-2b759da54d0d",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsAccessVerify",
		"Id": "00f75ead-3771-44c0-a68f-67e94f5c7517",
		"Name": "DevOps - Access Verify",
		"Url": "/api/plugin/powerhub/00f75ead-3771-44c0-a68f-67e94f5c7517",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsAddServicehook",
		"Id": "0e94cf62-fc3c-48d3-b7e1-b444df3b1e34",
		"Name": "DevOps - Add servicehook for specific teamproject",
		"Url": "/api/plugin/powerhub/0e94cf62-fc3c-48d3-b7e1-b444df3b1e34",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TeamProjectUid",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "WorkItemTypeName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EventType",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsGlobalDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsAddServicehooks",
		"Id": "faa6e1ab-ac16-4bbf-b550-28fb3affc550",
		"Name": "DevOps - Add servicehooks for all teamprojects",
		"Url": "/api/plugin/powerhub/faa6e1ab-ac16-4bbf-b550-28fb3affc550",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsAddSource",
		"Id": "cc628b69-3abf-4326-a452-6e9857d68339",
		"Name": "DevOps - Add Source",
		"Url": "/api/plugin/powerhub/cc628b69-3abf-4326-a452-6e9857d68339",
		"Request": {
			"Properties": [
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "Url",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "PersonalAccessToken",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Name",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "Connection",
					"Type": "DevOpsConnection",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Description",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Type",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsSource",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsFields",
		"Id": "07963883-6e39-4e26-b57f-e24f2ceca12c",
		"Name": "DevOps - Fields",
		"Url": "/api/plugin/powerhub/07963883-6e39-4e26-b57f-e24f2ceca12c",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsGetServicehooks",
		"Id": "92d90f28-afbf-4ba3-bb0c-7c9de96df8fa",
		"Name": "DevOps - Get servicehooks for teamproject",
		"Url": "/api/plugin/powerhub/92d90f28-afbf-4ba3-bb0c-7c9de96df8fa",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TeamProjectUid",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "WorkItemTypeName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EventType",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsGlobalDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsGetWorkItem",
		"Id": "0897aade-ec57-4736-8f08-db45e5007da7",
		"Name": "DevOps - WorkItem by WorkItemId",
		"Url": "/api/plugin/powerhub/0897aade-ec57-4736-8f08-db45e5007da7",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "WorkItemId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsWitGetDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsMetadataAttributes",
		"Id": "084932d3-31f7-44e4-9701-cbb55459ad08",
		"Name": "DevOps - Ebtity Metadata Attributes",
		"Url": "/api/plugin/powerhub/084932d3-31f7-44e4-9701-cbb55459ad08",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "TableName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Schema",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "PrimaryKey",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "LogicName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "FilterKey",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"ElementType": {
								"Properties": [
									{
										"MemberType": "Property",
										"Name": "Name",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "ColumnName",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "SQLType",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "SourceDataType",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "CLSType",
										"Type": "Type",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "MaxLength",
										"Type": "Int32",
										"IsStandard": true,
										"IsNullable": true,
										"DataAnnotations": []
									}
								],
								"MemberType": "TypeInfo",
								"Name": "Columns",
								"Type": "DBColumn",
								"IsStandard": false,
								"IsNullable": false
							},
							"MemberType": "Property",
							"Name": "Columns",
							"Type": "List",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "Table",
					"Type": "DBTable",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"Values": {
						"Insert": 1,
						"Update": 3,
						"Delete": 5,
						"Read": 7,
						"NoAction": 8
					},
					"MemberType": "Property",
					"Name": "State",
					"Type": "Enum",
					"IsStandard": false,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"ElementType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Items",
						"Type": "ExpandoObject",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Items",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TotalRefresh",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DBEntity",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsMetadataEntities",
		"Id": "7ad7691c-b0a5-411f-a1b9-7d200e7f1088",
		"Name": "DevOps - Entity Metadata",
		"Url": "/api/plugin/powerhub/7ad7691c-b0a5-411f-a1b9-7d200e7f1088",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "TableName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Schema",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "PrimaryKey",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "LogicName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "FilterKey",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"ElementType": {
								"Properties": [
									{
										"MemberType": "Property",
										"Name": "Name",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "ColumnName",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "SQLType",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "SourceDataType",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "CLSType",
										"Type": "Type",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "MaxLength",
										"Type": "Int32",
										"IsStandard": true,
										"IsNullable": true,
										"DataAnnotations": []
									}
								],
								"MemberType": "TypeInfo",
								"Name": "Columns",
								"Type": "DBColumn",
								"IsStandard": false,
								"IsNullable": false
							},
							"MemberType": "Property",
							"Name": "Columns",
							"Type": "List",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "Table",
					"Type": "DBTable",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"Values": {
						"Insert": 1,
						"Update": 3,
						"Delete": 5,
						"Read": 7,
						"NoAction": 8
					},
					"MemberType": "Property",
					"Name": "State",
					"Type": "Enum",
					"IsStandard": false,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"ElementType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Items",
						"Type": "ExpandoObject",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Items",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TotalRefresh",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DBEntity",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsPostAddSource",
		"Id": "5a7f37a0-a4ad-4a8a-98d9-9732dbc5adda",
		"Name": "DevOps - Post - Add Source",
		"Url": "/api/plugin/powerhub/5a7f37a0-a4ad-4a8a-98d9-9732dbc5adda",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsPostDeleteSource",
		"Id": "a7f1627c-148b-4e6e-bd68-d4e35c05d6a7",
		"Name": "DevOps - Post - Delete Source",
		"Url": "/api/plugin/powerhub/a7f1627c-148b-4e6e-bd68-d4e35c05d6a7",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsProcesses",
		"Id": "ac6c5ae2-6166-4d1f-9f9e-e90995aa11d0",
		"Name": "DevOps - Processes",
		"Url": "/api/plugin/powerhub/ac6c5ae2-6166-4d1f-9f9e-e90995aa11d0",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsProjects",
		"Id": "bc5d4350-281c-475d-86f7-8daa0474fac4",
		"Name": "DevOps - Projects",
		"Url": "/api/plugin/powerhub/bc5d4350-281c-475d-86f7-8daa0474fac4",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsRefreshData",
		"Id": "20b4b61d-5099-423e-a8d6-00777e260b8f",
		"Name": "DevOps - Refresh Data",
		"Url": "/api/plugin/powerhub/20b4b61d-5099-423e-a8d6-00777e260b8f",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsRefreshDataProcesses",
		"Id": "2d41c636-2fc0-44c1-95fa-2f748bf9d210",
		"Name": "DevOps - Refresh data (Processes)",
		"Url": "/api/plugin/powerhub/2d41c636-2fc0-44c1-95fa-2f748bf9d210",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsRefreshDataProjects",
		"Id": "63ad8589-0d0c-4969-b7b1-57af6135d006",
		"Name": "DevOps - Refresh data (Projects)",
		"Url": "/api/plugin/powerhub/63ad8589-0d0c-4969-b7b1-57af6135d006",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsRefreshDataWorkitems",
		"Id": "b3b6ab76-25d8-463e-aa51-7a14bd9db712",
		"Name": "DevOps - Refresh data (Workitems)",
		"Url": "/api/plugin/powerhub/b3b6ab76-25d8-463e-aa51-7a14bd9db712",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsRefreshMetadata",
		"Id": "e6e6ed25-fd63-4d97-a1d4-3b50df024fac",
		"Name": "DevOps - Refresh Metadata",
		"Url": "/api/plugin/powerhub/e6e6ed25-fd63-4d97-a1d4-3b50df024fac",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshData",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshHooks",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsRefreshMetadataDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsRemoveServicehook",
		"Id": "8491d844-60fc-4c10-88ac-82ce25e4c0ae",
		"Name": "DevOps - Remove servicehooks from teamproject",
		"Url": "/api/plugin/powerhub/8491d844-60fc-4c10-88ac-82ce25e4c0ae",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TeamProjectUid",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "WorkItemTypeName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EventType",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsGlobalDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsRemoveServicehooks",
		"Id": "92820b15-1082-4c84-a13c-3245577dd1f8",
		"Name": "DevOps - Remove all service hooks",
		"Url": "/api/plugin/powerhub/92820b15-1082-4c84-a13c-3245577dd1f8",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsSBDataHandler",
		"Id": "04130fd8-dd68-4422-af8b-26ba8a742a1b",
		"Name": "DevOps - SB - Data Handler",
		"Url": "/api/plugin/powerhub/04130fd8-dd68-4422-af8b-26ba8a742a1b",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EventType",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Id",
					"Type": "Int64",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "OrgUrl",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TeamProjectId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Fields",
					"Type": "IDictionary`2",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "NewOldFields",
					"Type": "IDictionary`2",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsWorkItem",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "TableName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Schema",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "PrimaryKey",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "LogicName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "FilterKey",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"ElementType": {
								"Properties": [
									{
										"MemberType": "Property",
										"Name": "Name",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "ColumnName",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "SQLType",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "SourceDataType",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "CLSType",
										"Type": "Type",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "MaxLength",
										"Type": "Int32",
										"IsStandard": true,
										"IsNullable": true,
										"DataAnnotations": []
									}
								],
								"MemberType": "TypeInfo",
								"Name": "Columns",
								"Type": "DBColumn",
								"IsStandard": false,
								"IsNullable": false
							},
							"MemberType": "Property",
							"Name": "Columns",
							"Type": "List",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "Table",
					"Type": "DBTable",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"Values": {
						"Insert": 1,
						"Update": 3,
						"Delete": 5,
						"Read": 7,
						"NoAction": 8
					},
					"MemberType": "Property",
					"Name": "State",
					"Type": "Enum",
					"IsStandard": false,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"ElementType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Items",
						"Type": "ExpandoObject",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Items",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TotalRefresh",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DBEntity",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsSBHookHandler",
		"Id": "f2876f4e-ed45-4453-93b6-5327099570ab",
		"Name": "DevOps - SB - Web Hook Handler",
		"Url": "/api/plugin/powerhub/f2876f4e-ed45-4453-93b6-5327099570ab",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserProperties",
					"Type": "IDictionary`2",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Body",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "ServiceBusMessage",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsSBRefresh",
		"Id": "4ae99c86-9b72-450c-a9a9-3df45983c0c1",
		"Name": "DevOps - SB - Refresh",
		"Url": "/api/plugin/powerhub/4ae99c86-9b72-450c-a9a9-3df45983c0c1",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshData",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshHooks",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsSBRefreshDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsSBRefreshData",
		"Id": "fc462930-0f16-41fb-9677-189bd326104f",
		"Name": "DevOps - SB - Refresh Data",
		"Url": "/api/plugin/powerhub/fc462930-0f16-41fb-9677-189bd326104f",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshData",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshHooks",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsSBRefreshDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsSBRefreshMetadata",
		"Id": "90171eed-0b90-44cf-825d-f573b3d5652b",
		"Name": "DevOps - SB - Refresh Metadata",
		"Url": "/api/plugin/powerhub/90171eed-0b90-44cf-825d-f573b3d5652b",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshData",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "RefreshHooks",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsSBRefreshDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsSBTypeChange",
		"Id": "88afb929-ecb7-4de2-81cd-a38a7e0aab93",
		"Name": "DevOps - SB - SystemType Changed",
		"Url": "/api/plugin/powerhub/88afb929-ecb7-4de2-81cd-a38a7e0aab93",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EventType",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Id",
					"Type": "Int64",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "OrgUrl",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TeamProjectId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Fields",
					"Type": "IDictionary`2",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "NewOldFields",
					"Type": "IDictionary`2",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsWorkItem",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsUpdateSource",
		"Id": "c1124941-5fb0-4d08-b5ce-4aa8b627e147",
		"Name": "DevOps - Update source",
		"Url": "/api/plugin/powerhub/c1124941-5fb0-4d08-b5ce-4aa8b627e147",
		"Request": {
			"Properties": [
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "Url",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "PersonalAccessToken",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Name",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "Connection",
					"Type": "DevOpsConnection",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Description",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Type",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsSource",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsWorkItems",
		"Id": "e4cf70ce-f846-42c8-adf5-86c14eaa3da2",
		"Name": "DevOps - WorkItems by WorkItemType",
		"Url": "/api/plugin/powerhub/e4cf70ce-f846-42c8-adf5-86c14eaa3da2",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TeamProjectUid",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "WorkItemTypeName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EventType",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DevOpsGlobalDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DevOpsWorkItemTypes",
		"Id": "e22082bf-c870-4ee1-b94f-881cd5696937",
		"Name": "DevOps - WorkItemTypes",
		"Url": "/api/plugin/powerhub/e22082bf-c870-4ee1-b94f-881cd5696937",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "DisableScheduleWebJob",
		"Id": "94bed61d-f62a-4275-a0a4-1c126a99fd41",
		"Name": "Schedules - Disable (Webjob)",
		"Url": "/api/plugin/powerhub/94bed61d-f62a-4275-a0a4-1c126a99fd41",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "Dummy",
		"Id": "ff6f6bbe-81fa-46eb-9058-2ba5b289c2d4",
		"Name": "Dummy plugin - used for checking app service availabilty",
		"Url": "/api/plugin/powerhub/ff6f6bbe-81fa-46eb-9058-2ba5b289c2d4",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "EmptyDataTempTable",
		"Id": "534c0be9-b1d3-4e1e-8435-17068acff19e",
		"Name": "Empty Date Temp Table",
		"Url": "/api/plugin/powerhub/534c0be9-b1d3-4e1e-8435-17068acff19e",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "EmptyGroupMappingsTempTable",
		"Id": "9bf2a8bf-65ab-4ae9-b121-a2d450965f77",
		"Name": "Powerhub - Empty group mappings temp table",
		"Url": "/api/plugin/powerhub/9bf2a8bf-65ab-4ae9-b121-a2d450965f77",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "EmptyGroupsTempTable",
		"Id": "7aa6397c-5ccc-4e29-89ce-fdf281ba64fd",
		"Name": "Powerhub - Empty Groups Temp Table",
		"Url": "/api/plugin/powerhub/7aa6397c-5ccc-4e29-89ce-fdf281ba64fd",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "EmptyOptionSetsTempTable",
		"Id": "d711de01-9d90-4193-a3e0-4ac0725cf5ca",
		"Name": "Empty OptionSets Date Temp Table",
		"Url": "/api/plugin/powerhub/d711de01-9d90-4193-a3e0-4ac0725cf5ca",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "EnableScheduleWebJob",
		"Id": "d120d5dc-0035-481d-bb4c-19a7bc7dfdc1",
		"Name": "Schedules - Enable (Webjob)",
		"Url": "/api/plugin/powerhub/d120d5dc-0035-481d-bb4c-19a7bc7dfdc1",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "EnsureApplicationAppKey",
		"Id": "d7bb8e69-9912-4e2f-a52e-48a6c908d7e4",
		"Name": "Ensure - Application App Key",
		"Url": "/api/plugin/powerhub/d7bb8e69-9912-4e2f-a52e-48a6c908d7e4",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "ExecuteStoredProcedure",
		"Id": "1e292042-9972-4185-919e-65765b2d7edb",
		"Name": "Execute Stored Procedure",
		"Url": "/api/plugin/powerhub/1e292042-9972-4185-919e-65765b2d7edb",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Parameters",
					"Type": "IDictionary`2",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "ExecuteStoredProcedureDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "FunctionsAppStop",
		"Id": "5dfe324a-ae89-4a3a-928f-2ea80bc8684d",
		"Name": "Powerhub - Azure functions app stop",
		"Url": "/api/plugin/powerhub/5dfe324a-ae89-4a3a-928f-2ea80bc8684d",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GenerateAppSettingsFile",
		"Id": "f2446d5e-3a79-4654-8596-1c943dd31716",
		"Name": "Generate AppSettings Files",
		"Url": "/api/plugin/powerhub/f2446d5e-3a79-4654-8596-1c943dd31716",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GenerateEndpoints",
		"Id": "1c74dbc6-742b-4d8b-ae42-ae1625f895c0",
		"Name": "Only test (do not execute)",
		"Url": "/api/plugin/powerhub/1c74dbc6-742b-4d8b-ae42-ae1625f895c0",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GenerateEndpointsFull",
		"Id": "cc50597c-b9b6-4872-8096-e80b1052c768",
		"Name": "Only test (do not execute)",
		"Url": "/api/plugin/powerhub/cc50597c-b9b6-4872-8096-e80b1052c768",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GenerateTypescriptsClasses",
		"Id": "70ed5293-0474-4149-a39c-104ef8ecc5f8",
		"Name": "Powerhub - Generate Typescript Classes",
		"Url": "/api/plugin/powerhub/70ed5293-0474-4149-a39c-104ef8ecc5f8",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetAADUsers",
		"Id": "6eaeb99f-755d-48c1-ad70-544e3c75652f",
		"Name": "Get AAD Users",
		"Url": "/api/plugin/powerhub/6eaeb99f-755d-48c1-ad70-544e3c75652f",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"ElementType": {
						"Properties": [
							{
								"MemberType": "Property",
								"Name": "DisplayName",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "displayName",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "GivenName",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "givenName",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "JobTitle",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "jobTitle",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "Email",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "mail",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "MobilePhone",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "mobilePhone",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "OfficeLocation",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "officeLocation",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "PreferredLanguage",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "preferredLanguage",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "Surname",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "surname",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "UserPrincipalName",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "JsonPropertyAttribute",
										"Properties": {
											"ItemConverterType": null,
											"ItemConverterParameters": null,
											"NamingStrategyType": null,
											"NamingStrategyParameters": null,
											"NullValueHandling": 0,
											"DefaultValueHandling": 0,
											"ReferenceLoopHandling": 0,
											"ObjectCreationHandling": 0,
											"TypeNameHandling": 0,
											"IsReference": false,
											"Order": 0,
											"Required": 0,
											"PropertyName": "userPrincipalName",
											"ItemReferenceLoopHandling": 0,
											"ItemTypeNameHandling": 0,
											"ItemIsReference": false
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "Id",
								"Type": "Guid",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": []
							}
						],
						"MemberType": "TypeInfo",
						"Name": "Users",
						"Type": "GraphUser",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Users",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "IsMore",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "GetAADUsersDto",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetAppSettings",
		"Id": "eb531187-16f0-4a02-8ca8-be828bff77c5",
		"Name": "Get App Settings",
		"Url": "/api/plugin/powerhub/eb531187-16f0-4a02-8ca8-be828bff77c5",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Customer",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "Url",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Name",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "WebApp",
					"Type": "WebApp",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "Url",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Name",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "MaxThreads",
							"Type": "Int32",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "AuthenticationValue",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "FunctionsApp",
					"Type": "FunctionsApp",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "RootSAS",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "QueueSAS",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "QueueName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "ServiceBus",
					"Type": "ServiceBusConnection",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"MemberType": "Property",
					"Name": "Logging",
					"Type": "Object",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "DynamicAttribute",
							"Properties": {
								"TransformFlags": [
									true
								]
							}
						}
					]
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "PowerHubConfigurations",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetCache",
		"Id": "fe443979-26f7-4ad2-aa27-d65fcd23d1bb",
		"Name": "Powerhub - Get cache data",
		"Url": "/api/plugin/powerhub/fe443979-26f7-4ad2-aa27-d65fcd23d1bb",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetClientId",
		"Id": "37629efa-69d7-423d-ac12-a6d3f7ab307d",
		"Name": "Powerhub - Client Id",
		"Url": "/api/plugin/powerhub/37629efa-69d7-423d-ac12-a6d3f7ab307d",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetCurrentAppPackages",
		"Id": "8298ccf2-0819-4464-9457-9046e0a5888f",
		"Name": "Upgrade - Get Current AppPackages",
		"Url": "/api/plugin/powerhub/8298ccf2-0819-4464-9457-9046e0a5888f",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetCurrentDeployments",
		"Id": "8adbff14-1e78-4bcb-ab47-55463cf33f54",
		"Name": "Get Deployments Scripts",
		"Url": "/api/plugin/powerhub/8adbff14-1e78-4bcb-ab47-55463cf33f54",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetDBConnectionstring",
		"Id": "af5d4916-77c8-4788-b8bf-506bb1a7c5e2",
		"Name": "Common - Get DB Connectionstring",
		"Url": "/api/plugin/powerhub/af5d4916-77c8-4788-b8bf-506bb1a7c5e2",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetDeploymentOptions",
		"Id": "82b7ba2c-532f-4c17-a297-ad9c88eee09e",
		"Name": "Get Deployment Options",
		"Url": "/api/plugin/powerhub/82b7ba2c-532f-4c17-a297-ad9c88eee09e",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "ProductName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "ExitDeploymentPluginId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "HubRelativeUrl",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DeploymentServiceOptions",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetEntities",
		"Id": "b611f508-4462-4629-a1ea-4f1286b57ec4",
		"Name": "Powerhub - Get Entities",
		"Url": "/api/plugin/powerhub/b611f508-4462-4629-a1ea-4f1286b57ec4",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetFirewallRules",
		"Id": "42f21f26-1253-497a-a180-e0ccc032f598",
		"Name": "Get Firewall Rules",
		"Url": "/api/plugin/powerhub/42f21f26-1253-497a-a180-e0ccc032f598",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetGroups",
		"Id": "f99c30fc-9fe2-486a-8139-7086c58085a4",
		"Name": "Powerhub - Get groups",
		"Url": "/api/plugin/powerhub/f99c30fc-9fe2-486a-8139-7086c58085a4",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetMetadataEntity",
		"Id": "7b45ef0a-2757-4654-b56e-f78784f6b288",
		"Name": "Powerhub - Get Metadata Entity",
		"Url": "/api/plugin/powerhub/7b45ef0a-2757-4654-b56e-f78784f6b288",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "GetMetadataEntityDto",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"ElementType": {
						"Properties": [
							{
								"MemberType": "Property",
								"Name": "SourceId",
								"Type": "Int32",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "SourceId",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "EntitySystemName",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "EntitySystemName",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeSystemName",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeSystemName",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeSystemLabel",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeSystemLabel",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeDisplayName",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeDisplayName",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeDataType",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeDataType",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeStringLength",
								"Type": "Int32",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeStringLength",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeDecimalPrecision",
								"Type": "Int32",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeDecimalPrecision",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeIsCustom",
								"Type": "Boolean",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeIsCustom",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeIsPrimaryId",
								"Type": "Boolean",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeIsPrimaryId",
											"CLSType": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeColumnNumber",
								"Type": "Int32",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeColumnNumber",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "GlobalOptionSet",
								"Type": "Boolean",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "GlobalOptionSet",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "ReferenceSystemName",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "ReferenceSystemName",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeIsPrimaryName",
								"Type": "Boolean",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeIsPrimaryName",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeDescription",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeDescription",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeIsRequired",
								"Type": "Boolean",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeIsRequired",
											"CLSType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeSystemId",
								"Type": "Guid",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeSystemId",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "EntitySystemId",
								"Type": "Guid",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "EntitySystemId",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "AttributeOrigin",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": [
									{
										"Name": "PHDBColumnAttribute",
										"Properties": {
											"Name": "AttributeOrigin",
											"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
										}
									}
								]
							},
							{
								"MemberType": "Property",
								"Name": "IncludeInFullSync",
								"Type": "Boolean",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": []
							}
						],
						"MemberType": "TypeInfo",
						"Name": "Attributes",
						"Type": "PHMetadataAttribute",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Attributes",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "SourceId",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntitySystemName",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntityDisplayName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityDisplayName",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntityDescription",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityDescription",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntityIsCustom",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityIsCustom",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntityIsManaged",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityIsManaged",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntitySyncEnabled",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EntityViewsEnabled",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EntityPrimaryNameAttribute",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityPrimaryNameAttribute",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntityIsLogical",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityIsLogical",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntityPrimaryIdAttribute",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityPrimaryIdAttribute",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntitySystemLabel",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntitySystemLabel",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntitySystemId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntitySystemId",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntityAPIName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityAPIName",
								"CLSType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntityIsManyToMany",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": [
						{
							"Name": "PHDBColumnAttribute",
							"Properties": {
								"Name": "EntityIsManyToMany",
								"CLSType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"
							}
						}
					]
				},
				{
					"MemberType": "Property",
					"Name": "EntitySyncLocked",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "PHMetadataEntity",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetPlugins",
		"Id": "c6490a5b-e872-4752-ade1-b9133e77eeab",
		"Name": "Get Plugins",
		"Url": "/api/plugin/powerhub/c6490a5b-e872-4752-ade1-b9133e77eeab",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetPlugins1",
		"Id": "22d4642b-d66e-4519-9483-702a5c06927c",
		"Name": "Get Plugins",
		"Url": "/api/plugin/powerhub/22d4642b-d66e-4519-9483-702a5c06927c",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetPluginSchemas",
		"Id": "0a66dbc8-d8b2-44ad-9bd2-cdc36f69d933",
		"Name": "Forms - Get plugin schemas",
		"Url": "/api/plugin/powerhub/0a66dbc8-d8b2-44ad-9bd2-cdc36f69d933",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetScheduleJob",
		"Id": "ad2b496a-28c1-4c7d-b125-9f6d03a0c6fc",
		"Name": "Schedules - Schedule Get (Gets all scheduled jobs)",
		"Url": "/api/plugin/powerhub/ad2b496a-28c1-4c7d-b125-9f6d03a0c6fc",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Guid",
			"IsStandard": true,
			"IsNullable": true
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetSchemaBlackList",
		"Id": "30442ba3-cb91-415d-926c-9c6c69466175",
		"Name": "Get Schema Blacklist",
		"Url": "/api/plugin/powerhub/30442ba3-cb91-415d-926c-9c6c69466175",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetSource",
		"Id": "e27db8f9-2592-4755-9315-e9f8dad5493a",
		"Name": "Get Source",
		"Url": "/api/plugin/powerhub/e27db8f9-2592-4755-9315-e9f8dad5493a",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceDescription",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceType",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceUrl",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TableSchema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "PHSourceInformation",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetSqlUsers",
		"Id": "7fc9cfea-74d6-44fa-9198-b0bb3bcf0673",
		"Name": "Get Sql Users",
		"Url": "/api/plugin/powerhub/7fc9cfea-74d6-44fa-9198-b0bb3bcf0673",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetTableInfo",
		"Id": "74824683-e4f1-4223-ba71-b4b28afdedef",
		"Name": "SQL - Get Table Information",
		"Url": "/api/plugin/powerhub/74824683-e4f1-4223-ba71-b4b28afdedef",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "GetTableInfoDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "TableName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PrimaryKey",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "LogicName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "FilterKey",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"ElementType": {
						"Properties": [
							{
								"MemberType": "Property",
								"Name": "Name",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": []
							},
							{
								"MemberType": "Property",
								"Name": "ColumnName",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": []
							},
							{
								"MemberType": "Property",
								"Name": "SQLType",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": []
							},
							{
								"MemberType": "Property",
								"Name": "SourceDataType",
								"Type": "String",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": []
							},
							{
								"MemberType": "Property",
								"Name": "CLSType",
								"Type": "Type",
								"IsStandard": true,
								"IsNullable": false,
								"DataAnnotations": []
							},
							{
								"MemberType": "Property",
								"Name": "MaxLength",
								"Type": "Int32",
								"IsStandard": true,
								"IsNullable": true,
								"DataAnnotations": []
							}
						],
						"MemberType": "TypeInfo",
						"Name": "Columns",
						"Type": "DBColumn",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Columns",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DBTable",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetUpgradeControllers",
		"Id": "e6937cee-1255-408e-9b4b-181db102a69a",
		"Name": "Upgrade - Get Controllers",
		"Url": "/api/plugin/powerhub/e6937cee-1255-408e-9b4b-181db102a69a",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "IEnumerable`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetUpgradePackages",
		"Id": "61a357dd-27bc-4d67-a5fb-999684b596e3",
		"Name": "Upgrade - Get Packages",
		"Url": "/api/plugin/powerhub/61a357dd-27bc-4d67-a5fb-999684b596e3",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "UpgradeCycle",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetWebAppMetrics",
		"Id": "319734da-428f-4671-9602-0768e7a9b5ba",
		"Name": "Powerhub - Get Azure Metrics",
		"Url": "/api/plugin/powerhub/319734da-428f-4671-9602-0768e7a9b5ba",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetWhiteList",
		"Id": "89923037-597e-496e-954e-8e5ed0ce9a40",
		"Name": "Get White List",
		"Url": "/api/plugin/powerhub/89923037-597e-496e-954e-8e5ed0ce9a40",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GetWhiteListExcludeManyToMany",
		"Id": "f2659962-0e7d-4685-84aa-8f3f2d8a5a4c",
		"Name": "Get White List Exclude Many to Many",
		"Url": "/api/plugin/powerhub/f2659962-0e7d-4685-84aa-8f3f2d8a5a4c",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "GroupToggleSync",
		"Id": "2d95c96c-ea0a-4a25-b89f-579de74eab78",
		"Name": "Powerhub - Group toggle sync",
		"Url": "/api/plugin/powerhub/2d95c96c-ea0a-4a25-b89f-579de74eab78",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "GroupSystemId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Toggle",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "ToggleGroupDto",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "HubMaintenance",
		"Id": "fdc2956a-dfbd-4792-9e35-e1d9649e634a",
		"Name": "PowerHub - Hub Maintenance",
		"Url": "/api/plugin/powerhub/fdc2956a-dfbd-4792-9e35-e1d9649e634a",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "InitializeCDSSource",
		"Id": "1a50da9f-b37f-4170-92b8-fa1c6b06fc50",
		"Name": "CDS - Add source",
		"Url": "/api/plugin/powerhub/1a50da9f-b37f-4170-92b8-fa1c6b06fc50",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Description",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Type",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "PHSource",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "IsServiceBusRunning",
		"Id": "e9d6a0ee-0ee3-47f4-b993-357d55bc5327",
		"Name": "Powerhub - Is Servicebus Running",
		"Url": "/api/plugin/powerhub/e9d6a0ee-0ee3-47f4-b993-357d55bc5327",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "LogPlugin",
		"Id": "63bd21df-4c47-4b09-bb14-77bc144239e6",
		"Name": "Log",
		"Url": "/api/plugin/powerhub/63bd21df-4c47-4b09-bb14-77bc144239e6",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "MergeAttributes",
		"Id": "1f6e86ef-fa9d-4361-81dd-c0d3fd09e4eb",
		"Name": "Merge Attributes",
		"Url": "/api/plugin/powerhub/1f6e86ef-fa9d-4361-81dd-c0d3fd09e4eb",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "MergeDataTable",
		"Id": "2cf23fee-ebb1-47ba-a442-d04f96fee97b",
		"Name": "Merge Data Table",
		"Url": "/api/plugin/powerhub/2cf23fee-ebb1-47ba-a442-d04f96fee97b",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "MergeEntities",
		"Id": "6d7ba26d-e9ae-446a-98b5-47db834cedbf",
		"Name": "Merge Entities",
		"Url": "/api/plugin/powerhub/6d7ba26d-e9ae-446a-98b5-47db834cedbf",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "MergeGroupMappings",
		"Id": "dd151d9f-27fd-4d49-b3a4-96e840d59ab3",
		"Name": "Powerhub - Merge group mappings",
		"Url": "/api/plugin/powerhub/dd151d9f-27fd-4d49-b3a4-96e840d59ab3",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "MergeGroups",
		"Id": "98ad4124-c1fa-4b06-89b1-9eed30d61292",
		"Name": "Powerhub - Merge Groups",
		"Url": "/api/plugin/powerhub/98ad4124-c1fa-4b06-89b1-9eed30d61292",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "MergeOptionsSets",
		"Id": "0f82581b-c5ba-4e43-9d5b-fa4084262769",
		"Name": "Merge Options Sets",
		"Url": "/api/plugin/powerhub/0f82581b-c5ba-4e43-9d5b-fa4084262769",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "NotUsedPlugin",
		"Id": "da208318-1d1c-47db-a81b-80a50f19fe98",
		"Name": "Only test (do not execute)",
		"Url": "/api/plugin/powerhub/da208318-1d1c-47db-a81b-80a50f19fe98",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "PortalAttributes",
		"Id": "ebd5c47f-6f75-4c3e-9727-a5007817980d",
		"Name": "PowerHub - Portal Attributes",
		"Url": "/api/plugin/powerhub/ebd5c47f-6f75-4c3e-9727-a5007817980d",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "PortalEntitiesPlugin",
		"Id": "68fcfdc1-024e-45a9-8a16-21646d8097e9",
		"Name": "Portal Entities",
		"Url": "/api/plugin/powerhub/68fcfdc1-024e-45a9-8a16-21646d8097e9",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "HubEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "PortalSources",
		"Id": "f1ef29bb-213d-4828-9158-6b855aa12036",
		"Name": "Portal Sources",
		"Url": "/api/plugin/powerhub/f1ef29bb-213d-4828-9158-6b855aa12036",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "PortalToggleAttributeSync",
		"Id": "2d746b88-085f-400d-b5a6-2c3e051b3133",
		"Name": "PowerHub - Portal Toggle Attribute Sync",
		"Url": "/api/plugin/powerhub/2d746b88-085f-400d-b5a6-2c3e051b3133",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "AttributeSystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Toggle",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "ToggleSyncDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "PortalToggleSync",
		"Id": "4d040269-ab19-4ddb-9542-4092c3630ef1",
		"Name": "Portal Toggle Sync",
		"Url": "/api/plugin/powerhub/4d040269-ab19-4ddb-9542-4092c3630ef1",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "AttributeSystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Toggle",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "ToggleSyncDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "PortalToggleViews",
		"Id": "4931d87b-c3e1-4275-8fec-ed2a3490257e",
		"Name": "Portal Toggle Views",
		"Url": "/api/plugin/powerhub/4931d87b-c3e1-4275-8fec-ed2a3490257e",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "EntitySystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "AttributeSystemName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Toggle",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "ToggleSyncDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "RemoveAccessor",
		"Id": "c39c56ae-35c5-4f43-8304-751101f223c0",
		"Name": "Remove Accessor",
		"Url": "/api/plugin/powerhub/c39c56ae-35c5-4f43-8304-751101f223c0",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "RenewCache",
		"Id": "cacce2bc-cb56-4eab-b215-5280912f32d6",
		"Name": "Powerhub - Renews cached data",
		"Url": "/api/plugin/powerhub/cacce2bc-cb56-4eab-b215-5280912f32d6",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "ResetDeployment",
		"Id": "a4dac6b4-14c7-458b-95fc-013f531ad92b",
		"Name": "Reset Deployment",
		"Url": "/api/plugin/powerhub/a4dac6b4-14c7-458b-95fc-013f531ad92b",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "ScheduleJobExecutor",
		"Id": "878714c8-408e-4cf7-a7d0-6a520a411153",
		"Name": "Schedules - Executor (Finds out by each schedule - needs to be executed)",
		"Url": "/api/plugin/powerhub/878714c8-408e-4cf7-a7d0-6a520a411153",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "ServiceBusClearDeadletter",
		"Id": "ec8de337-803d-434a-ab45-965ef4a1ff03",
		"Name": "Powerhub - Servicebus clear deadletter",
		"Url": "/api/plugin/powerhub/ec8de337-803d-434a-ab45-965ef4a1ff03",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "ServiceBusMessages",
		"Id": "81d2b9b4-703e-4917-8f07-4a191c593993",
		"Name": "Powerhub - Servicebus Messages",
		"Url": "/api/plugin/powerhub/81d2b9b4-703e-4917-8f07-4a191c593993",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "SetAppSettings",
		"Id": "ff899ff9-e95f-4105-b693-e5db6946beb2",
		"Name": "Set App Settings",
		"Url": "/api/plugin/powerhub/ff899ff9-e95f-4105-b693-e5db6946beb2",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Customer",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "Url",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Name",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "WebApp",
					"Type": "WebApp",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "Url",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Name",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "MaxThreads",
							"Type": "Int32",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "AuthenticationValue",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "FunctionsApp",
					"Type": "FunctionsApp",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "RootSAS",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "QueueSAS",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "QueueName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "ServiceBus",
					"Type": "ServiceBusConnection",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"MemberType": "Property",
					"Name": "Logging",
					"Type": "Object",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": [
						{
							"Name": "DynamicAttribute",
							"Properties": {
								"TransformFlags": [
									true
								]
							}
						}
					]
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "PowerHubConfigurations",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "SetCustomerName",
		"Id": "7389c238-a67e-4348-9dea-d1f440c25597",
		"Name": "Powerhub - Set Customer Name",
		"Url": "/api/plugin/powerhub/7389c238-a67e-4348-9dea-d1f440c25597",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "SignalRRandomMessages",
		"Id": "ba78edc9-762e-4cff-89df-48bc2a5ff5e3",
		"Name": "SignalR Random Messages",
		"Url": "/api/plugin/powerhub/ba78edc9-762e-4cff-89df-48bc2a5ff5e3",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "SQLCurrentQueries",
		"Id": "159594f1-9035-458a-ac8a-3341ebf427bf",
		"Name": "Powerhub - SQL - Current Queries",
		"Url": "/api/plugin/powerhub/159594f1-9035-458a-ac8a-3341ebf427bf",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "SQLInsertPlugin",
		"Id": "57b320dc-5c5a-4195-8316-c4ffc3c36a4b",
		"Name": "SQL Insert",
		"Url": "/api/plugin/powerhub/57b320dc-5c5a-4195-8316-c4ffc3c36a4b",
		"Request": {
			"Properties": [
				{
					"Properties": [
						{
							"MemberType": "Property",
							"Name": "TableName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "Schema",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "PrimaryKey",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "LogicName",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"MemberType": "Property",
							"Name": "FilterKey",
							"Type": "String",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						},
						{
							"ElementType": {
								"Properties": [
									{
										"MemberType": "Property",
										"Name": "Name",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "ColumnName",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "SQLType",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "SourceDataType",
										"Type": "String",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "CLSType",
										"Type": "Type",
										"IsStandard": true,
										"IsNullable": false,
										"DataAnnotations": []
									},
									{
										"MemberType": "Property",
										"Name": "MaxLength",
										"Type": "Int32",
										"IsStandard": true,
										"IsNullable": true,
										"DataAnnotations": []
									}
								],
								"MemberType": "TypeInfo",
								"Name": "Columns",
								"Type": "DBColumn",
								"IsStandard": false,
								"IsNullable": false
							},
							"MemberType": "Property",
							"Name": "Columns",
							"Type": "List",
							"IsStandard": true,
							"IsNullable": false,
							"DataAnnotations": []
						}
					],
					"MemberType": "TypeInfo",
					"Name": "Table",
					"Type": "DBTable",
					"IsStandard": false,
					"IsNullable": false
				},
				{
					"Values": {
						"Insert": 1,
						"Update": 3,
						"Delete": 5,
						"Read": 7,
						"NoAction": 8
					},
					"MemberType": "Property",
					"Name": "State",
					"Type": "Enum",
					"IsStandard": false,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"ElementType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Items",
						"Type": "ExpandoObject",
						"IsStandard": false,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Items",
					"Type": "List",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TotalRefresh",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "DBEntity",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "SQLResourceConsumption",
		"Id": "f0863c18-166d-47af-acf2-95f0392f557f",
		"Name": "Powerhub - SQL - Current Consumptions",
		"Url": "/api/plugin/powerhub/f0863c18-166d-47af-acf2-95f0392f557f",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "List`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TestMyConfiguration",
		"Id": "b2540c19-9f1b-431f-858d-4ae7b434290a",
		"Name": "Only test my configuration (do not execute)",
		"Url": "/api/plugin/powerhub/b2540c19-9f1b-431f-858d-4ae7b434290a",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TestPlugin",
		"Id": "b75f4440-bc2f-46f0-96a3-391e6c6bec0d",
		"Name": "Only test (do not execute)",
		"Url": "/api/plugin/powerhub/b75f4440-bc2f-46f0-96a3-391e6c6bec0d",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TestUserToken",
		"Id": "3b00d57c-d1fb-46ea-8563-b5adb76e79e2",
		"Name": "Powerhub - Azure functions app stop",
		"Url": "/api/plugin/powerhub/3b00d57c-d1fb-46ea-8563-b5adb76e79e2",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPAddSource",
		"Id": "3d552a63-a8e6-42b2-9a55-8838048e5392",
		"Name": "TP - Add Source",
		"Url": "/api/plugin/powerhub/3d552a63-a8e6-42b2-9a55-8838048e5392",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "PPMSourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PPMProjectEntity",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "ClientId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "ClientSecret",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TenantId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Description",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Type",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "TPSource",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPDisableIntegration",
		"Id": "c49c36c6-c7e1-40a5-a8f1-b72e868c8298",
		"Name": "TP - Disable Powerhub Integration",
		"Url": "/api/plugin/powerhub/c49c36c6-c7e1-40a5-a8f1-b72e868c8298",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPGetTableNames",
		"Id": "72e73439-b365-462f-93c3-ba84a70b8dd7",
		"Name": "TP - Get table names",
		"Url": "/api/plugin/powerhub/72e73439-b365-462f-93c3-ba84a70b8dd7",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPIntegrationConfiguration",
		"Id": "06c1e10c-f08c-41c1-9660-2ead17baf705",
		"Name": "TP - Integration Configuration",
		"Url": "/api/plugin/powerhub/06c1e10c-f08c-41c1-9660-2ead17baf705",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Disable",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "TPIntegrationConfigurationDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPPostAddSource",
		"Id": "e2f65341-6ede-4031-a60f-b1669f1b88e2",
		"Name": "TP - Post - Add Source",
		"Url": "/api/plugin/powerhub/e2f65341-6ede-4031-a60f-b1669f1b88e2",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPPostDeleteSource",
		"Id": "963f5271-6e0a-4583-90fd-2d493f4d20c5",
		"Name": "TP - Post - Delete Source",
		"Url": "/api/plugin/powerhub/963f5271-6e0a-4583-90fd-2d493f4d20c5",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPRefreshMetadata",
		"Id": "115e661b-8927-4d39-9908-9de7e54ab007",
		"Name": "TP - Refresh Metadata",
		"Url": "/api/plugin/powerhub/115e661b-8927-4d39-9908-9de7e54ab007",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPRefreshViews",
		"Id": "ecdd382e-deee-4422-a6e4-f7282949115c",
		"Name": "TP - Refresh views",
		"Url": "/api/plugin/powerhub/ecdd382e-deee-4422-a6e4-f7282949115c",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPSetConnectionString",
		"Id": "309fa529-3b9b-45e6-86ee-3dc7b4b0eede",
		"Name": "TP - Set TeamPlanner ConnectionString",
		"Url": "/api/plugin/powerhub/309fa529-3b9b-45e6-86ee-3dc7b4b0eede",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Int32",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "TPUpdateSource",
		"Id": "85d0f734-2f0b-496d-a243-fc8a7b99c829",
		"Name": "TP - Update source",
		"Url": "/api/plugin/powerhub/85d0f734-2f0b-496d-a243-fc8a7b99c829",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "PPMSourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PPMProjectEntity",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "ClientId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "ClientSecret",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TenantId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Description",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Type",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "TPSource",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpdateDacPac",
		"Id": "6afbb946-962d-42d0-a8cf-d11879a96b77",
		"Name": "Update DacPac",
		"Url": "/api/plugin/powerhub/6afbb946-962d-42d0-a8cf-d11879a96b77",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "UpdateDacPacDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpdateHubUserIsAdmin",
		"Id": "d22a3aa4-b63e-4c57-969d-dc9985d712e0",
		"Name": "Update Hub User Is Admin",
		"Url": "/api/plugin/powerhub/d22a3aa4-b63e-4c57-969d-dc9985d712e0",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserPrincipalName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "IsAdmin",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "UpdateHubUserIsAdminDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpdateHubUserIsReader",
		"Id": "4fd9ed2b-6fe1-4654-859c-7d012865da0d",
		"Name": "Update Hub User Is Reader",
		"Url": "/api/plugin/powerhub/4fd9ed2b-6fe1-4654-859c-7d012865da0d",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserPrincipalName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "IsReader",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "UpdateHubUserIsReaderDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpdateHubUsernote",
		"Id": "e814e1a0-2036-449b-8186-ab79cada8058",
		"Name": "SQL - Update Hub Note",
		"Url": "/api/plugin/powerhub/e814e1a0-2036-449b-8186-ab79cada8058",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserPrincipalName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Note",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "UpdateHubUsernoteDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpdateSource",
		"Id": "9daf5f61-f6c6-444a-a0cc-663b2936aad3",
		"Name": "PowerHub - Update source",
		"Url": "/api/plugin/powerhub/9daf5f61-f6c6-444a-a0cc-663b2936aad3",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Description",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Type",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "PHSource",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "SourceId",
					"Type": "Int32",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Description",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Type",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Url",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Schema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "URLLinkId",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Name",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "PHSource",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpdateSQLSchemaPermissions",
		"Id": "81450730-0cfe-4332-9305-2e9182b57664",
		"Name": "Update SQL Schema Permissions",
		"Url": "/api/plugin/powerhub/81450730-0cfe-4332-9305-2e9182b57664",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserPrincipalName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "TableSchema",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Action",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "UpdateSQLSchemaPermissionDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Boolean",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpdateSQLUserIsDBOwner",
		"Id": "ab8bf399-20d0-4d93-8b15-c95bc9a3d434",
		"Name": "Update SQL User Is DB Owner",
		"Url": "/api/plugin/powerhub/ab8bf399-20d0-4d93-8b15-c95bc9a3d434",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserPrincipalName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "IsOwner",
					"Type": "Boolean",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "UpdateSQLUserIsDBOwnerDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpdateSQLUserPassword",
		"Id": "09bb693e-8567-4826-bc7e-ef6a254330db",
		"Name": "Update SQL User Password",
		"Url": "/api/plugin/powerhub/09bb693e-8567-4826-bc7e-ef6a254330db",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "UserPrincipalName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "UserSQLPassword",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "UpdateSQLUserPasswordDTO",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpgradePackages",
		"Id": "8c12555d-6d5a-4105-a816-9ac91969f727",
		"Name": "Upgrade - Packages",
		"Url": "/api/plugin/powerhub/8c12555d-6d5a-4105-a816-9ac91969f727",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "IEnumerable`1",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpgradeToModernAuthentication",
		"Id": "896d9c26-afb0-40ea-a9c3-4d1ad501bd66",
		"Name": "Azure - Upgrade to modern authentication",
		"Url": "/api/plugin/powerhub/896d9c26-afb0-40ea-a9c3-4d1ad501bd66",
		"Request": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "String",
			"IsStandard": true,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Task`1",
			"IsStandard": true,
			"IsNullable": false
		}
	},
	{
		"TypeName": "UpsertScheduleJob",
		"Id": "6a3bc01c-e31f-4f05-994a-a9405141d03b",
		"Name": "Schedules - Schedule Upsert (Creates or Update a scheduled job)",
		"Url": "/api/plugin/powerhub/6a3bc01c-e31f-4f05-994a-a9405141d03b",
		"Request": {
			"Properties": [
				{
					"MemberType": "Property",
					"Name": "Id",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "CronExpression",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PluginId",
					"Type": "Guid",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "PluginName",
					"Type": "String",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "Body",
					"Type": "Object",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"KeyType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Properties",
						"Type": "String",
						"IsStandard": true,
						"IsNullable": false
					},
					"ValueType": {
						"Properties": [],
						"MemberType": "TypeInfo",
						"Name": "Properties",
						"Type": "Object",
						"IsStandard": true,
						"IsNullable": false
					},
					"MemberType": "Property",
					"Name": "Properties",
					"Type": "Dictionary",
					"IsStandard": true,
					"IsNullable": false,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "LastOccurrence",
					"Type": "DateTime",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"MemberType": "Property",
					"Name": "NextOccurrence",
					"Type": "DateTime",
					"IsStandard": true,
					"IsNullable": true,
					"DataAnnotations": []
				},
				{
					"Properties": [],
					"MemberType": "TypeInfo",
					"Name": "LastRuns",
					"Type": "Queue`1",
					"IsStandard": false,
					"IsNullable": false
				}
			],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "IScheduleJob",
			"IsStandard": false,
			"IsNullable": false
		},
		"Response": {
			"Properties": [],
			"MemberType": "TypeInfo",
			"Name": "",
			"Type": "Object",
			"IsStandard": true,
			"IsNullable": false
		}
	}
];