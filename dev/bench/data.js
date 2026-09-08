window.BENCHMARK_DATA = {
  "lastUpdate": 1788874722720,
  "repoUrl": "https://github.com/BlenderKit/bk_client",
  "entries": {
    "Performance Benchmarks - bk_client": [
      {
        "commit": {
          "author": {
            "email": "andreas@gajdosik.org",
            "name": "Andreas Gajdosik",
            "username": "agajdosi"
          },
          "committer": {
            "email": "andreas@gajdosik.org",
            "name": "Andreas Gajdosik",
            "username": "agajdosi"
          },
          "distinct": true,
          "id": "86f3ff1dab9c931304ebbdaf8d1b73217b5ea68b",
          "message": "feat(tests): Initiate performance benchmarks\n- add some initial benchmarks\n- add workflow to run benchmarks and save them in gh_pages branch\n- update .gitignore, update readme",
          "timestamp": "2026-09-08T15:36:34+02:00",
          "tree_id": "87da7b347c2b9126df17599352ebdda2df8f63e8",
          "url": "https://github.com/BlenderKit/bk_client/commit/86f3ff1dab9c931304ebbdaf8d1b73217b5ea68b"
        },
        "date": 1788874722029,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running",
            "value": 10.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - ns/op",
            "value": 10.14,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running",
            "value": 128.7,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "9433340 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - ns/op",
            "value": 128.7,
            "unit": "ns/op",
            "extra": "9433340 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "9433340 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9433340 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running",
            "value": 248.4,
            "unit": "ns/op\t     432 B/op\t       2 allocs/op",
            "extra": "5106956 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - ns/op",
            "value": 248.4,
            "unit": "ns/op",
            "extra": "5106956 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "5106956 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5106956 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running",
            "value": 449.6,
            "unit": "ns/op\t    1072 B/op\t       3 allocs/op",
            "extra": "2529494 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - ns/op",
            "value": 449.6,
            "unit": "ns/op",
            "extra": "2529494 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "2529494 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2529494 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running",
            "value": 961.5,
            "unit": "ns/op\t    2352 B/op\t       4 allocs/op",
            "extra": "1306522 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - ns/op",
            "value": 961.5,
            "unit": "ns/op",
            "extra": "1306522 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - B/op",
            "value": 2352,
            "unit": "B/op",
            "extra": "1306522 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1306522 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running",
            "value": 5573,
            "unit": "ns/op\t   21296 B/op\t       7 allocs/op",
            "extra": "214695 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - ns/op",
            "value": 5573,
            "unit": "ns/op",
            "extra": "214695 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - B/op",
            "value": 21296,
            "unit": "B/op",
            "extra": "214695 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "214695 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message",
            "value": 4.471,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "267725662 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - ns/op",
            "value": 4.471,
            "unit": "ns/op",
            "extra": "267725662 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "267725662 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "267725662 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task",
            "value": 4.519,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "264629740 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - ns/op",
            "value": 4.519,
            "unit": "ns/op",
            "extra": "264629740 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "264629740 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "264629740 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data",
            "value": 168.7,
            "unit": "ns/op\t     368 B/op\t       5 allocs/op",
            "extra": "6659968 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - ns/op",
            "value": 168.7,
            "unit": "ns/op",
            "extra": "6659968 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - B/op",
            "value": 368,
            "unit": "B/op",
            "extra": "6659968 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "6659968 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data",
            "value": 141.3,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "9023064 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - ns/op",
            "value": 141.3,
            "unit": "ns/op",
            "extra": "9023064 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "9023064 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9023064 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data",
            "value": 135.6,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "8647418 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - ns/op",
            "value": 135.6,
            "unit": "ns/op",
            "extra": "8647418 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "8647418 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "8647418 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams",
            "value": 3270,
            "unit": "ns/op\t    3118 B/op\t      31 allocs/op",
            "extra": "394952 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - ns/op",
            "value": 3270,
            "unit": "ns/op",
            "extra": "394952 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - B/op",
            "value": 3118,
            "unit": "B/op",
            "extra": "394952 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "394952 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams",
            "value": 3190,
            "unit": "ns/op\t    3134 B/op\t      32 allocs/op",
            "extra": "363717 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - ns/op",
            "value": 3190,
            "unit": "ns/op",
            "extra": "363717 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - B/op",
            "value": 3134,
            "unit": "B/op",
            "extra": "363717 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "363717 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams",
            "value": 3348,
            "unit": "ns/op\t    3134 B/op\t      33 allocs/op",
            "extra": "352138 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - ns/op",
            "value": 3348,
            "unit": "ns/op",
            "extra": "352138 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - B/op",
            "value": 3134,
            "unit": "B/op",
            "extra": "352138 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "352138 times\n4 procs"
          }
        ]
      }
    ]
  }
}