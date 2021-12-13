// FAKE API CALL
export const PluginSchemaFetch = (key: string | undefined) : Promise<any> | undefined => {
    if (key == undefined) return undefined;
    return new Promise<any>((resolve, reject) => {

        // fake api call
        setTimeout(() => {
            const schema = schemas.find(_ => _.Id == key);
            if (schema == null) reject();
            resolve(schema);
        }, 500);
    });
}

export const schemas = [
	{
		"TypeName": "AddFirewallRule",
		"Id": "7aa1c968-3067-4859-8eba-c0268db1896c",
		"Name": "Add Firewall Rule",
		"Url": "/api/addfirewallrule",
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
		"TypeName": "DeleteMany2ManyReferences",
		"Id": "e177b210-21da-4749-81be-ac6249137dc1",
		"Name": "Delete ManyToMany References",
		"Url": "/api/deletemanytomany",
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
			"Type": "DataEntityDto",
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
		"TypeName": "GetEntityDefinitions",
		"Id": "14a8e968-4fef-4257-bc3d-e5733d462012",
		"Name": "Get EntityDefinitions",
		"Url": "/api/getentitydefinitions",
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
			"Type": "QueryDto",
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
		"TypeName": "GroupToggleSync",
		"Id": "adddaef1-42f9-40f6-9c06-103ed59a28fa",
		"Name": "Group Toggle Sync",
		"Url": "/api/grouptogglesync",
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
			"Type": "GoupToggleDto",
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
		"TypeName": "UpsertHook",
		"Id": "85e2fca3-0999-4f66-b62d-a4b8bc9a91f2",
		"Name": "Upsert Hook",
		"Url": "/api/upserthook",
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
			"Type": "UpdateEntity",
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
		"TypeName": "UpdateSource",
		"Id": "85d0f734-2f0b-496d-a243-fc8a7b99c829",
		"Name": "Update source",
		"Url": "/api/updatesource",
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
			"Type": "Source",
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
		"TypeName": "CreateSQLUser",
		"Id": "01b61213-dac4-46b7-bf45-a996b82fb79c",
		"Name": "Create SQL User",
		"Url": "/api/createsqluser",
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
			"Type": "CreateSQLUserDto",
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
		"TypeName": "MetadataAttributes",
		"Id": "084932d3-31f7-44e4-9701-cbb55459ad08",
		"Name": "Entity Metadata Attributes",
		"Url": "/api/metadataattributes",
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
		"TypeName": "Dummy",
		"Id": "ff6f6bbe-81fa-46eb-9058-2ba5b289c2d4",
		"Name": "Dummy endpoint",
		"Url": "/api/dummy",
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
		"TypeName": "GetUsers",
		"Id": "6eaeb99f-755d-48c1-ad70-544e3c75652f",
		"Name": "Get Users",
		"Url": "/api/getusers",
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
						"Type": "User",
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
		"TypeName": "GetMetadataEntity",
		"Id": "7b45ef0a-2757-4654-b56e-f78784f6b288",
		"Name": "Get Metadata Entity",
		"Url": "/api/getmetadataentity",
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
						"Type": "MetadataAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
							"Name": "DBColumnAttribute",
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
			"Type": "MetadataEntity",
			"IsStandard": false,
			"IsNullable": false
		}
	},
	{
		"TypeName": "SQLInsert",
		"Id": "57b320dc-5c5a-4195-8316-c4ffc3c36a4b",
		"Name": "SQL Insert",
		"Url": "/api/sqlinsert",
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
	}
];