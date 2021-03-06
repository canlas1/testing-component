let data = {
	userObj : {
		username: 'john',
		pass: '123456789',
		projects: [
			{
				"project_id": 1,
				"project_name": "161 Newkirk",
				"customer": "Rutgers University",
				"address": "161 Newkirk, Jersey City, NJ",
				"contact_name": "John Doe",
				"contact_number": "2015555555",
				"account_number": "101000123",
				"kwh_rate": 0.1,
				"floors": "Basement, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15",
				"scheduled_date": "2017-06-01T00:00:00.000Z",
				"comments": null,
				"createdAt": "2017-06-17T01:24:13.000Z",
				"updatedAt": "2017-06-17T01:24:13.000Z"
			},
			{
				"project_id": 2,
				"project_name": "101 Easy Street",
				"customer": "Wall Street Inc.",
				"address": "101 Easy Street, NY",
				"contact_name": "Jack Moneybags",
				"contact_number": "2127777777",
				"account_number": "201000777",
				"kwh_rate": 0.1,
				"floors": "10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30",
				"scheduled_date": "2017-07-11T00:00:00.000Z",
				"comments": null,
				"createdAt": "2017-06-17T01:24:13.000Z",
				"updatedAt": "2017-07-21T20:09:23.000Z"
			},
			{
				"project_id": 3,
				"project_name": "Cruise Plaza",
				"customer": "My Caribbean Cruises",
				"address": "555 Carribean Way, Miami, FL",
				"contact_name": "Jack Sparrow",
				"contact_number": "8351234567",
				"account_number": "107000333",
				"kwh_rate": 0.1,
				"floors": "3,5,7, 9, Boiler Room",
				"scheduled_date": "2017-06-29T00:00:00.000Z",
				"comments": null,
				"createdAt": "2017-06-17T01:24:13.000Z",
				"updatedAt": "2017-07-21T20:09:23.000Z"
			},
			{
				"project_id": 4,
				"project_name": "Bettina Appartments",
				"customer": "Bettina Properties",
				"address": "77 5th Avenue",
				"contact_name": "Alexander Simons",
				"contact_number": "2123289870",
				"account_number": "219827663778735",
				"kwh_rate": 0.1,
				"floors": "Elevators, Hallways, Stair B, Lower Level, Laundry Room",
				"scheduled_date": "2017-06-29T00:00:00.000Z",
				"comments": "Awesome Project",
				"createdAt": "2017-06-17T01:24:13.000Z",
				"updatedAt": "2017-07-21T20:09:23.000Z"
			}
		]
	},
	projects: {
		1: [
					{
						"survey_id": 33,
						"floor_number": 1,
						"room": "Hallway",
						"quantity": 200,
						"fixture": "Compact Fluorescent lamp",
						"pre_watts": 26,
						"post_quantity": 200,
						"post_fixture": "LED PL Lamp",
						"post_watts": 5,
						"post_price": 15.95,
						"incentive_fix": 5,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 1,
						"ProjectProjectId": 1
					},
					{
						"survey_id": 34,
						"floor_number": 1,
						"room": "Room 1",
						"quantity": 4,
						"fixture": "T8 Lamp Standard Ballast",
						"pre_watts": 24,
						"post_quantity": 4,
						"post_fixture": "LED T8 Lamp",
						"post_watts": 15,
						"post_price": 9.15,
						"incentive_fix": 2,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 1,
						"ProjectProjectId": 1
					},
					{
						"survey_id": 35,
						"floor_number": 2,
						"room": "Room 1",
						"quantity": 10,
						"fixture": "CFL Downlight screw-in",
						"pre_watts": 60,
						"post_quantity": 10,
						"post_fixture": "LED Downlight",
						"post_watts": 18,
						"post_price": 36,
						"incentive_fix": 25,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 2,
						"ProjectProjectId": 1
					},
					{
						"survey_id": 36,
						"floor_number": 3,
						"room": "Hallway",
						"quantity": 200,
						"fixture": "Compact Fluorescent lamp",
						"pre_watts": 26,
						"post_quantity": 200,
						"post_fixture": "LED PL Lamp",
						"post_watts": 5,
						"post_price": 15.95,
						"incentive_fix": 5,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 3,
						"ProjectProjectId": 1
					},
					{
						"survey_id": 37,
						"floor_number": 3,
						"room": "Bathrooms",
						"quantity": 30,
						"fixture": "Incandescent Screw-in lights",
						"pre_watts": 60,
						"post_quantity": 30,
						"post_fixture": "LED A-lamp Omni",
						"post_watts": 8,
						"post_price": 6.77,
						"incentive_fix": 5,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 3,
						"ProjectProjectId": 1
					},
					{
						"survey_id": 38,
						"floor_number": 4,
						"room": "Hallway",
						"quantity": 50,
						"fixture": "Compact Fluorescent lamp",
						"pre_watts": 26,
						"post_quantity": 50,
						"post_fixture": "LED PL Lamp",
						"post_watts": 5,
						"post_price": 15.95,
						"incentive_fix": 5,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 4,
						"ProjectProjectId": 1
					},
					{
						"survey_id": 39,
						"floor_number": 4,
						"room": "Room 1",
						"quantity": 10,
						"fixture": "CFL Downlight screw-in",
						"pre_watts": 60,
						"post_quantity": 10,
						"post_fixture": "LED Downlight",
						"post_watts": 18,
						"post_price": 36,
						"incentive_fix": 25,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 4,
						"ProjectProjectId": 1
					},
					{
						"survey_id": 40,
						"floor_number": 4,
						"room": "Room 2",
						"quantity": 55,
						"fixture": "CFL Downlight screw-in",
						"pre_watts": 60,
						"post_quantity": 55,
						"post_fixture": "LED Downlight",
						"post_watts": 18,
						"post_price": 36,
						"incentive_fix": 25,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 4,
						"ProjectProjectId": 1
					},
					{
					"survey_id": 41,
					"floor_number": 4,
					"room": "Room 3",
					"quantity": 150,
					"fixture": "CFL Downlight screw-in",
					"pre_watts": 60,
					"post_quantity": 150,
					"post_fixture": "LED Downlight",
					"post_watts": 18,
					"post_price": 36,
					"incentive_fix": 25,
					"hours_operation": 8760,
					"createdAt": "2017-07-21T20:13:06.000Z",
					"updatedAt": "2017-07-21T20:13:06.000Z",
					"FloorFloorId": 4,
					"ProjectProjectId": 1
					}
		],
		2: [
			{
				"survey_id": 42,
				"floor_number": 6,
				"room": "Lobby",
				"quantity": 30,
				"fixture": "Fluorescent Linear Ambient",
				"pre_watts": 156,
				"post_quantity": 30,
				"post_fixture": "LED Surface Ambient",
				"post_watts": 88,
				"post_price": 126,
				"incentive_fix": 15,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 8,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 43,
				"floor_number": 2,
				"room": "Room 1",
				"quantity": 4,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 4,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 5,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 44,
				"floor_number": 2,
				"room": "Room 2",
				"quantity": 10,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 10,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 5,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 45,
				"floor_number": 3,
				"room": "Hallway",
				"quantity": 200,
				"fixture": "Compact Fluorescent lamp",
				"pre_watts": 26,
				"post_quantity": 200,
				"post_fixture": "LED PL Lamp",
				"post_watts": 5,
				"post_price": 15.95,
				"incentive_fix": 5,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 6,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 46,
				"floor_number": 4,
				"room": "Hallway",
				"quantity": 50,
				"fixture": "Compact Fluorescent lamp",
				"pre_watts": 26,
				"post_quantity": 50,
				"post_fixture": "LED PL Lamp",
				"post_watts": 5,
				"post_price": 15.95,
				"incentive_fix": 5,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 7,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 47,
				"floor_number": 4,
				"room": "Room 1",
				"quantity": 10,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 10,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 7,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 48,
				"floor_number": 4,
				"room": "Room 2",
				"quantity": 55,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 55,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 7,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 49,
				"floor_number": 4,
				"room": "Room 3",
				"quantity": 150,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 150,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 7,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 50,
				"floor_number": 4,
				"room": "Room 4",
				"quantity": 10,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 10,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 7,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 51,
				"floor_number": 4,
				"room": "Room 5",
				"quantity": 55,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 55,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 7,
				"ProjectProjectId": 2
			},
			{
				"survey_id": 52,
				"floor_number": 4,
				"room": "Room 6",
				"quantity": 150,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 150,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 7,
				"ProjectProjectId": 2
			}
		],
		3: [
			{
				"survey_id": 53,
				"floor_number": 1,
				"room": "Lobby",
				"quantity": 20,
				"fixture": "Fluorescent Linear Ambient",
				"pre_watts": 156,
				"post_quantity": 20,
				"post_fixture": "LED Surface Ambient",
				"post_watts": 88,
				"post_price": 126,
				"incentive_fix": 15,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 9,
				"ProjectProjectId": 3
			},
			{
				"survey_id": 54,
				"floor_number": 1,
				"room": "Bathrooms",
				"quantity": 4,
				"fixture": "Incandescent Screw-in lights",
				"pre_watts": 60,
				"post_quantity": 4,
				"post_fixture": "LED A-lamp Omni",
				"post_watts": 8,
				"post_price": 6.77,
				"incentive_fix": 5,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 9,
				"ProjectProjectId": 3
			},
			{
				"survey_id": 55,
				"floor_number": 7,
				"room": "Room 1",
				"quantity": 10,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 10,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 12,
				"ProjectProjectId": 3
			},
			{
				"survey_id": 56,
				"floor_number": 3,
				"room": "Hallway",
				"quantity": 200,
				"fixture": "Compact Fluorescent lamp",
				"pre_watts": 26,
				"post_quantity": 200,
				"post_fixture": "LED PL Lamp",
				"post_watts": 5,
				"post_price": 15.95,
				"incentive_fix": 5,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 10,
				"ProjectProjectId": 3
			},
			{
				"survey_id": 57,
				"floor_number": 3,
				"room": "Bathrooms",
				"quantity": 30,
				"fixture": "Incandescent Screw-in lights",
				"pre_watts": 60,
				"post_quantity": 30,
				"post_fixture": "LED A-lamp Omni",
				"post_watts": 8,
				"post_price": 6.77,
				"incentive_fix": 5,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 10,
				"ProjectProjectId": 3
			},
			{
				"survey_id": 58,
				"floor_number": 4,
				"room": "Hallway",
				"quantity": 50,
				"fixture": "Compact Fluorescent lamp",
				"pre_watts": 26,
				"post_quantity": 50,
				"post_fixture": "LED PL Lamp",
				"post_watts": 5,
				"post_price": 15.95,
				"incentive_fix": 5,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 11,
				"ProjectProjectId": 3
			},
			{
				"survey_id": 59,
				"floor_number": 4,
				"room": "Room 1",
				"quantity": 10,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 10,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 11,
				"ProjectProjectId": 3
			},
			{
				"survey_id": 60,
				"floor_number": 4,
				"room": "Room 2",
				"quantity": 55,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 55,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 11,
				"ProjectProjectId": 3
			},
			{
				"survey_id": 61,
				"floor_number": 4,
				"room": "Room 3",
				"quantity": 150,
				"fixture": "CFL Downlight screw-in",
				"pre_watts": 60,
				"post_quantity": 150,
				"post_fixture": "LED Downlight",
				"post_watts": 18,
				"post_price": 36,
				"incentive_fix": 25,
				"hours_operation": 8760,
				"createdAt": "2017-07-21T20:13:06.000Z",
				"updatedAt": "2017-07-21T20:13:06.000Z",
				"FloorFloorId": 11,
				"ProjectProjectId": 3
			}
		],
		4: [
					{
						"survey_id": 62,
						"floor_number": 1,
						"room": "Elevator",
						"quantity": 4,
						"fixture": "CFL 4Pin Plug",
						"pre_watts": 32,
						"post_quantity": 4,
						"post_fixture": "LED Plug in",
						"post_watts": 6,
						"post_price": 15,
						"incentive_fix": 0,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 12,
						"ProjectProjectId": 4
					},
					{
						"survey_id": 63,
						"floor_number": 2,
						"room": "Hallways",
						"quantity": 32,
						"fixture": "Cloud Fixtures",
						"pre_watts": 90,
						"post_quantity": 32,
						"post_fixture": "18in Surface Mount Fixture",
						"post_watts": 32,
						"post_price": 198,
						"incentive_fix": 70,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 13,
						"ProjectProjectId": 4
					},
					{
						"survey_id": 64,
						"floor_number": 3,
						"room": "Hallways",
						"quantity": 16,
						"fixture": "Cloud Fixtures + EM",
						"pre_watts": 90,
						"post_quantity": 16,
						"post_fixture": "18in Surface Mount Fixture + EM",
						"post_watts": 32,
						"post_price": 335,
						"incentive_fix": 70,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 13,
						"ProjectProjectId": 4
					},
					{
						"survey_id": 65,
						"floor_number": 4,
						"room": "Stair B",
						"quantity": 40,
						"fixture": "1L 2FT T12",
						"pre_watts": 27,
						"post_quantity": 40,
						"post_fixture": "LAMAR DLLT LED + EMG",
						"post_watts": 10,
						"post_price": 265,
						"incentive_fix": 70,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 14,
						"ProjectProjectId": 4
					},
					{
						"survey_id": 66,
						"floor_number": 5,
						"room": "Lower Level",
						"quantity": 10,
						"fixture": "1L 2FT T12",
						"pre_watts": 27,
						"post_quantity": 10,
						"post_fixture": "LAMAR DLLT LED",
						"post_watts": 10,
						"post_price": 265,
						"incentive_fix": 70,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 15,
						"ProjectProjectId": 4
					},	
						{
						"survey_id": 67,
						"floor_number": 6,
						"room": "Laundry Room",
						"quantity": 2,
						"fixture": "2L 4FT T8",
						"pre_watts": 64,
						"post_quantity": 2,
						"post_fixture": "LED (2) 48in 18 w T8 Lamp",
						"post_watts": 36,
						"post_price": 56,
						"incentive_fix": 40,
						"hours_operation": 8760,
						"createdAt": "2017-07-21T20:13:06.000Z",
						"updatedAt": "2017-07-21T20:13:06.000Z",
						"FloorFloorId": 16,
						"ProjectProjectId": 4
					}						
		]
	}
} // end of data

export default data