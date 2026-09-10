window.BENCHMARK_DATA = {
  "lastUpdate": 1789054323256,
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
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "andreas@gajdosik.org",
            "name": "Andy Gajdosik",
            "username": "agajdosi"
          },
          "distinct": true,
          "id": "aeccbd4efc81ea0fd1ac86050d3ca0c9b6423218",
          "message": "ci: bump version to 1.12.16",
          "timestamp": "2026-09-09T08:41:14+02:00",
          "tree_id": "fba191550baa1f26c951b82813969fd3f6261e8d",
          "url": "https://github.com/BlenderKit/bk_client/commit/aeccbd4efc81ea0fd1ac86050d3ca0c9b6423218"
        },
        "date": 1788936131376,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running",
            "value": 7.892,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "151930260 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - ns/op",
            "value": 7.892,
            "unit": "ns/op",
            "extra": "151930260 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "151930260 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "151930260 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running",
            "value": 100.6,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "11885002 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11885002 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "11885002 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11885002 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running",
            "value": 195.6,
            "unit": "ns/op\t     432 B/op\t       2 allocs/op",
            "extra": "6409999 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - ns/op",
            "value": 195.6,
            "unit": "ns/op",
            "extra": "6409999 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "6409999 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6409999 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running",
            "value": 354.7,
            "unit": "ns/op\t    1072 B/op\t       3 allocs/op",
            "extra": "3015378 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - ns/op",
            "value": 354.7,
            "unit": "ns/op",
            "extra": "3015378 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "3015378 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3015378 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running",
            "value": 599.9,
            "unit": "ns/op\t    2352 B/op\t       4 allocs/op",
            "extra": "2008274 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - ns/op",
            "value": 599.9,
            "unit": "ns/op",
            "extra": "2008274 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - B/op",
            "value": 2352,
            "unit": "B/op",
            "extra": "2008274 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "2008274 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running",
            "value": 4434,
            "unit": "ns/op\t   21296 B/op\t       7 allocs/op",
            "extra": "285283 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - ns/op",
            "value": 4434,
            "unit": "ns/op",
            "extra": "285283 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - B/op",
            "value": 21296,
            "unit": "B/op",
            "extra": "285283 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "285283 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message",
            "value": 3.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "346497193 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - ns/op",
            "value": 3.46,
            "unit": "ns/op",
            "extra": "346497193 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "346497193 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "346497193 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task",
            "value": 3.467,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "344621832 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - ns/op",
            "value": 3.467,
            "unit": "ns/op",
            "extra": "344621832 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "344621832 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "344621832 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data",
            "value": 126.7,
            "unit": "ns/op\t     368 B/op\t       5 allocs/op",
            "extra": "9265482 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - ns/op",
            "value": 126.7,
            "unit": "ns/op",
            "extra": "9265482 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - B/op",
            "value": 368,
            "unit": "B/op",
            "extra": "9265482 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9265482 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data",
            "value": 104,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "12028072 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - ns/op",
            "value": 104,
            "unit": "ns/op",
            "extra": "12028072 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "12028072 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12028072 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data",
            "value": 104,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "11669461 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - ns/op",
            "value": 104,
            "unit": "ns/op",
            "extra": "11669461 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "11669461 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11669461 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams",
            "value": 2653,
            "unit": "ns/op\t    3119 B/op\t      31 allocs/op",
            "extra": "448524 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - ns/op",
            "value": 2653,
            "unit": "ns/op",
            "extra": "448524 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - B/op",
            "value": 3119,
            "unit": "B/op",
            "extra": "448524 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "448524 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams",
            "value": 2708,
            "unit": "ns/op\t    3135 B/op\t      32 allocs/op",
            "extra": "476470 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - ns/op",
            "value": 2708,
            "unit": "ns/op",
            "extra": "476470 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - B/op",
            "value": 3135,
            "unit": "B/op",
            "extra": "476470 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "476470 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams",
            "value": 2739,
            "unit": "ns/op\t    3135 B/op\t      33 allocs/op",
            "extra": "407092 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - ns/op",
            "value": 2739,
            "unit": "ns/op",
            "extra": "407092 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - B/op",
            "value": 3135,
            "unit": "B/op",
            "extra": "407092 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "407092 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "petr.dlouhy@email.cz",
            "name": "Petr Dlouhý",
            "username": "PetrDlouhy"
          },
          "committer": {
            "email": "petr.dlouhy@email.cz",
            "name": "Petr Dlouhý",
            "username": "PetrDlouhy"
          },
          "distinct": true,
          "id": "2b244a80329cb425af7ef295b5f2d6731780e121",
          "message": "Merge the PR version-bump commit into feature/system-id-shared-file\n\nKeeps the 1.12.16 version and docs from main; the bump bot re-bumps on push.",
          "timestamp": "2026-09-09T13:58:04+02:00",
          "tree_id": "2ae3447ce0a6a61229345803c0c1c95d8ad713f3",
          "url": "https://github.com/BlenderKit/bk_client/commit/2b244a80329cb425af7ef295b5f2d6731780e121"
        },
        "date": 1788955152086,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running",
            "value": 12.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "95845480 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - ns/op",
            "value": 12.84,
            "unit": "ns/op",
            "extra": "95845480 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "95845480 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "95845480 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running",
            "value": 73.13,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "16912460 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - ns/op",
            "value": 73.13,
            "unit": "ns/op",
            "extra": "16912460 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "16912460 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16912460 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running",
            "value": 151.1,
            "unit": "ns/op\t     432 B/op\t       2 allocs/op",
            "extra": "7852375 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - ns/op",
            "value": 151.1,
            "unit": "ns/op",
            "extra": "7852375 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "7852375 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7852375 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running",
            "value": 266.5,
            "unit": "ns/op\t    1072 B/op\t       3 allocs/op",
            "extra": "4476888 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - ns/op",
            "value": 266.5,
            "unit": "ns/op",
            "extra": "4476888 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "4476888 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4476888 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running",
            "value": 460,
            "unit": "ns/op\t    2352 B/op\t       4 allocs/op",
            "extra": "2567006 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - ns/op",
            "value": 460,
            "unit": "ns/op",
            "extra": "2567006 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - B/op",
            "value": 2352,
            "unit": "B/op",
            "extra": "2567006 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "2567006 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running",
            "value": 3273,
            "unit": "ns/op\t   21296 B/op\t       7 allocs/op",
            "extra": "344227 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - ns/op",
            "value": 3273,
            "unit": "ns/op",
            "extra": "344227 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - B/op",
            "value": 21296,
            "unit": "B/op",
            "extra": "344227 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "344227 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message",
            "value": 2.379,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "510461397 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - ns/op",
            "value": 2.379,
            "unit": "ns/op",
            "extra": "510461397 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "510461397 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "510461397 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task",
            "value": 2.367,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "501462640 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - ns/op",
            "value": 2.367,
            "unit": "ns/op",
            "extra": "501462640 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "501462640 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "501462640 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data",
            "value": 96.59,
            "unit": "ns/op\t     368 B/op\t       5 allocs/op",
            "extra": "11846478 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - ns/op",
            "value": 96.59,
            "unit": "ns/op",
            "extra": "11846478 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - B/op",
            "value": 368,
            "unit": "B/op",
            "extra": "11846478 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "11846478 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data",
            "value": 83.66,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "14172394 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - ns/op",
            "value": 83.66,
            "unit": "ns/op",
            "extra": "14172394 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "14172394 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14172394 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data",
            "value": 77.59,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "15638080 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - ns/op",
            "value": 77.59,
            "unit": "ns/op",
            "extra": "15638080 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "15638080 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15638080 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams",
            "value": 2037,
            "unit": "ns/op\t    3119 B/op\t      31 allocs/op",
            "extra": "565178 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - ns/op",
            "value": 2037,
            "unit": "ns/op",
            "extra": "565178 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - B/op",
            "value": 3119,
            "unit": "B/op",
            "extra": "565178 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "565178 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams",
            "value": 2051,
            "unit": "ns/op\t    3135 B/op\t      32 allocs/op",
            "extra": "590104 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - ns/op",
            "value": 2051,
            "unit": "ns/op",
            "extra": "590104 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - B/op",
            "value": 3135,
            "unit": "B/op",
            "extra": "590104 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "590104 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams",
            "value": 2098,
            "unit": "ns/op\t    3135 B/op\t      33 allocs/op",
            "extra": "531501 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - ns/op",
            "value": 2098,
            "unit": "ns/op",
            "extra": "531501 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - B/op",
            "value": 3135,
            "unit": "B/op",
            "extra": "531501 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "531501 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "petr.dlouhy@email.cz",
            "name": "Petr Dlouhý",
            "username": "PetrDlouhy"
          },
          "committer": {
            "email": "petr.dlouhy@email.cz",
            "name": "Petr Dlouhý",
            "username": "PetrDlouhy"
          },
          "distinct": true,
          "id": "1dd35e0a1f153e27992469da0750d8c85cfd82ff",
          "message": "feat: the Client owns the machine ID and seeds it from its own MAC value\n\nPrecedence stays --system_id > persisted file > MAC-derived, but the Client\nnow writes the file itself on first use instead of waiting for the add-on\nto create it. The add-on becomes a reader only.\n\nWhy the seed must be the Client's value, not the add-on's: the server has\nonly ever stored the ID this Client sends in its System-Id header. Joining\nthe add-on's uuid.getnode() from the authorize URL with the header ID of\nthe token exchanged seconds later (7 days of production logins, 3,629\npairs) shows the two pick a different adapter on 79% of Windows machines,\n36% of macOS and 13% of Linux. An add-on-written seed would therefore have\nrenamed most Windows machines at release; seeding from the Client's own\nvalue keeps every machine on the ID the server already knows and only\nstops the churn.\n\nWriting is atomic (temp file + rename) and best effort: an unwritable data\ndirectory logs a warning and the MAC-derived ID is reported as before.\n--system_id is kept as an override for tests and other add-ons and is\nnever persisted.\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>",
          "timestamp": "2026-09-10T09:10:45+02:00",
          "tree_id": "2ae3447ce0a6a61229345803c0c1c95d8ad713f3",
          "url": "https://github.com/BlenderKit/bk_client/commit/1dd35e0a1f153e27992469da0750d8c85cfd82ff"
        },
        "date": 1789024316165,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running",
            "value": 17.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "73207746 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - ns/op",
            "value": 17.16,
            "unit": "ns/op",
            "extra": "73207746 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "73207746 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "73207746 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running",
            "value": 111.3,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "10993740 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - ns/op",
            "value": 111.3,
            "unit": "ns/op",
            "extra": "10993740 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "10993740 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10993740 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running",
            "value": 216.3,
            "unit": "ns/op\t     432 B/op\t       2 allocs/op",
            "extra": "5611779 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - ns/op",
            "value": 216.3,
            "unit": "ns/op",
            "extra": "5611779 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "5611779 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5611779 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running",
            "value": 417.4,
            "unit": "ns/op\t    1072 B/op\t       3 allocs/op",
            "extra": "2942588 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - ns/op",
            "value": 417.4,
            "unit": "ns/op",
            "extra": "2942588 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "2942588 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2942588 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running",
            "value": 735.1,
            "unit": "ns/op\t    2352 B/op\t       4 allocs/op",
            "extra": "1635314 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - ns/op",
            "value": 735.1,
            "unit": "ns/op",
            "extra": "1635314 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - B/op",
            "value": 2352,
            "unit": "B/op",
            "extra": "1635314 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1635314 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running",
            "value": 5908,
            "unit": "ns/op\t   21296 B/op\t       7 allocs/op",
            "extra": "208357 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - ns/op",
            "value": 5908,
            "unit": "ns/op",
            "extra": "208357 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - B/op",
            "value": 21296,
            "unit": "B/op",
            "extra": "208357 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "208357 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message",
            "value": 3.652,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336289363 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - ns/op",
            "value": 3.652,
            "unit": "ns/op",
            "extra": "336289363 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336289363 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336289363 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task",
            "value": 3.726,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "323397055 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - ns/op",
            "value": 3.726,
            "unit": "ns/op",
            "extra": "323397055 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "323397055 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "323397055 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data",
            "value": 156.5,
            "unit": "ns/op\t     368 B/op\t       5 allocs/op",
            "extra": "7740212 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - ns/op",
            "value": 156.5,
            "unit": "ns/op",
            "extra": "7740212 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - B/op",
            "value": 368,
            "unit": "B/op",
            "extra": "7740212 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "7740212 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data",
            "value": 127.6,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "8999940 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - ns/op",
            "value": 127.6,
            "unit": "ns/op",
            "extra": "8999940 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "8999940 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "8999940 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data",
            "value": 126.1,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "9434700 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - ns/op",
            "value": 126.1,
            "unit": "ns/op",
            "extra": "9434700 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "9434700 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9434700 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams",
            "value": 2845,
            "unit": "ns/op\t    3119 B/op\t      31 allocs/op",
            "extra": "408414 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - ns/op",
            "value": 2845,
            "unit": "ns/op",
            "extra": "408414 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - B/op",
            "value": 3119,
            "unit": "B/op",
            "extra": "408414 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "408414 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams",
            "value": 2826,
            "unit": "ns/op\t    3134 B/op\t      32 allocs/op",
            "extra": "455595 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - ns/op",
            "value": 2826,
            "unit": "ns/op",
            "extra": "455595 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - B/op",
            "value": 3134,
            "unit": "B/op",
            "extra": "455595 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "455595 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams",
            "value": 2755,
            "unit": "ns/op\t    3134 B/op\t      33 allocs/op",
            "extra": "381426 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - ns/op",
            "value": 2755,
            "unit": "ns/op",
            "extra": "381426 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - B/op",
            "value": 3134,
            "unit": "B/op",
            "extra": "381426 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "381426 times\n4 procs"
          }
        ]
      },
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
          "id": "97ccfdef577c94949c64a84d44319771cfdb089f",
          "message": "Refactor parseThumbnails() into smaller parts",
          "timestamp": "2026-09-10T13:12:46+02:00",
          "tree_id": "fc35c6049442e62c92ee08b4199062da0449150b",
          "url": "https://github.com/BlenderKit/bk_client/commit/97ccfdef577c94949c64a84d44319771cfdb089f"
        },
        "date": 1789038805914,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running",
            "value": 7.791,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "153959152 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - ns/op",
            "value": 7.791,
            "unit": "ns/op",
            "extra": "153959152 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "153959152 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "153959152 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running",
            "value": 100.2,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "12144982 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - ns/op",
            "value": 100.2,
            "unit": "ns/op",
            "extra": "12144982 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "12144982 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12144982 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running",
            "value": 188,
            "unit": "ns/op\t     432 B/op\t       2 allocs/op",
            "extra": "6410718 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - ns/op",
            "value": 188,
            "unit": "ns/op",
            "extra": "6410718 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "6410718 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6410718 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running",
            "value": 341.2,
            "unit": "ns/op\t    1072 B/op\t       3 allocs/op",
            "extra": "3553704 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - ns/op",
            "value": 341.2,
            "unit": "ns/op",
            "extra": "3553704 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "3553704 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3553704 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running",
            "value": 687.5,
            "unit": "ns/op\t    2352 B/op\t       4 allocs/op",
            "extra": "1733786 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - ns/op",
            "value": 687.5,
            "unit": "ns/op",
            "extra": "1733786 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - B/op",
            "value": 2352,
            "unit": "B/op",
            "extra": "1733786 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1733786 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running",
            "value": 4522,
            "unit": "ns/op\t   21296 B/op\t       7 allocs/op",
            "extra": "230810 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - ns/op",
            "value": 4522,
            "unit": "ns/op",
            "extra": "230810 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - B/op",
            "value": 21296,
            "unit": "B/op",
            "extra": "230810 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "230810 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message",
            "value": 3.434,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "348472428 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - ns/op",
            "value": 3.434,
            "unit": "ns/op",
            "extra": "348472428 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "348472428 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "348472428 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task",
            "value": 3.482,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "344224948 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - ns/op",
            "value": 3.482,
            "unit": "ns/op",
            "extra": "344224948 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "344224948 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "344224948 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data",
            "value": 128.9,
            "unit": "ns/op\t     368 B/op\t       5 allocs/op",
            "extra": "8879302 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - ns/op",
            "value": 128.9,
            "unit": "ns/op",
            "extra": "8879302 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - B/op",
            "value": 368,
            "unit": "B/op",
            "extra": "8879302 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8879302 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data",
            "value": 105.7,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "10705245 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - ns/op",
            "value": 105.7,
            "unit": "ns/op",
            "extra": "10705245 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "10705245 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10705245 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data",
            "value": 105.6,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "11664693 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - ns/op",
            "value": 105.6,
            "unit": "ns/op",
            "extra": "11664693 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "11664693 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11664693 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams",
            "value": 2918,
            "unit": "ns/op\t    3119 B/op\t      31 allocs/op",
            "extra": "415742 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - ns/op",
            "value": 2918,
            "unit": "ns/op",
            "extra": "415742 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - B/op",
            "value": 3119,
            "unit": "B/op",
            "extra": "415742 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "415742 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams",
            "value": 2986,
            "unit": "ns/op\t    3134 B/op\t      32 allocs/op",
            "extra": "373468 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - ns/op",
            "value": 2986,
            "unit": "ns/op",
            "extra": "373468 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - B/op",
            "value": 3134,
            "unit": "B/op",
            "extra": "373468 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "373468 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams",
            "value": 3104,
            "unit": "ns/op\t    3134 B/op\t      33 allocs/op",
            "extra": "366652 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - ns/op",
            "value": 3104,
            "unit": "ns/op",
            "extra": "366652 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - B/op",
            "value": 3134,
            "unit": "B/op",
            "extra": "366652 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "366652 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "petr.dlouhy@email.cz",
            "name": "Petr Dlouhý",
            "username": "PetrDlouhy"
          },
          "committer": {
            "email": "petr.dlouhy@email.cz",
            "name": "Petr Dlouhý",
            "username": "PetrDlouhy"
          },
          "distinct": true,
          "id": "1b7a0fef346e73cb334529f8e64bc0f021f30aea",
          "message": "feat: /report_usages route and the usage_data_opt_out shared setting\n\nThe Blender add-on's save/render presence report (BlenderKit/Blendkit#2296)\nhad no Client route of its own and rode the generic non-blocking\nwrapper, which agajdosi rejected. /report_usages forwards the `report`\nfield untouched to the server's /api/v1/scene_save_reports/ as a\n\"report_usages\" task, like every other specialised route.\n\nSending usage data from the user's machine needs an opt-out that every\nhost shares (Blender, Maya, Unreal, Godot...), so it is a Shared setting,\n`usage_data_opt_out`, settable through /settings/set and broadcast with\nthe settings snapshot. The Client enforces it: with the opt-out set,\n/report_usages drops the report without creating a task, so a host\nadd-on cannot forget to honour it. Zero value keeps sending, so\nexisting installs are unaffected.\n\nOnly the usage report is wired to the setting; whether /report_event\n(telemetry) should follow is Michal's call.\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>",
          "timestamp": "2026-09-10T17:31:21+02:00",
          "tree_id": "cce5bc8efe05159c0144db821ec7b843778ea076",
          "url": "https://github.com/BlenderKit/bk_client/commit/1b7a0fef346e73cb334529f8e64bc0f021f30aea"
        },
        "date": 1789054322282,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running",
            "value": 10.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/0_running - ns/op",
            "value": 10.05,
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
            "value": 127.3,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "9416791 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - ns/op",
            "value": 127.3,
            "unit": "ns/op",
            "extra": "9416791 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "9416791 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/1_running - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9416791 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running",
            "value": 233.1,
            "unit": "ns/op\t     432 B/op\t       2 allocs/op",
            "extra": "5107370 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - ns/op",
            "value": 233.1,
            "unit": "ns/op",
            "extra": "5107370 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "5107370 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/2_running - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5107370 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running",
            "value": 427.4,
            "unit": "ns/op\t    1072 B/op\t       3 allocs/op",
            "extra": "2801991 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - ns/op",
            "value": 427.4,
            "unit": "ns/op",
            "extra": "2801991 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "2801991 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/4_running - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2801991 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running",
            "value": 753.8,
            "unit": "ns/op\t    2352 B/op\t       4 allocs/op",
            "extra": "1597844 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - ns/op",
            "value": 753.8,
            "unit": "ns/op",
            "extra": "1597844 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - B/op",
            "value": 2352,
            "unit": "B/op",
            "extra": "1597844 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/8_running - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1597844 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running",
            "value": 5582,
            "unit": "ns/op\t   21296 B/op\t       7 allocs/op",
            "extra": "211828 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - ns/op",
            "value": 5582,
            "unit": "ns/op",
            "extra": "211828 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - B/op",
            "value": 21296,
            "unit": "B/op",
            "extra": "211828 times\n4 procs"
          },
          {
            "name": "BenchmarkGetAvailableSoftwares/64_running - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "211828 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message",
            "value": 4.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "273138073 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - ns/op",
            "value": 4.41,
            "unit": "ns/op",
            "extra": "273138073 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "273138073 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_task_with_empty_initial_message - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "273138073 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task",
            "value": 4.403,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "273344862 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - ns/op",
            "value": 4.403,
            "unit": "ns/op",
            "extra": "273344862 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "273344862 times\n4 procs"
          },
          {
            "name": "BenchmarkTaskFinish/Finish_already_finished_task - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "273344862 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data",
            "value": 177.3,
            "unit": "ns/op\t     368 B/op\t       5 allocs/op",
            "extra": "7376746 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - ns/op",
            "value": 177.3,
            "unit": "ns/op",
            "extra": "7376746 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - B/op",
            "value": 368,
            "unit": "B/op",
            "extra": "7376746 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_nil_data - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "7376746 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data",
            "value": 133.8,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "8873976 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - ns/op",
            "value": 133.8,
            "unit": "ns/op",
            "extra": "8873976 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "8873976 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_map_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "8873976 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data",
            "value": 133.3,
            "unit": "ns/op\t     320 B/op\t       4 allocs/op",
            "extra": "9010886 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - ns/op",
            "value": 133.3,
            "unit": "ns/op",
            "extra": "9010886 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "9010886 times\n4 procs"
          },
          {
            "name": "BenchmarkNewTask/New_task_with_slice_data - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9010886 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams",
            "value": 3239,
            "unit": "ns/op\t    3118 B/op\t      31 allocs/op",
            "extra": "366998 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - ns/op",
            "value": 3239,
            "unit": "ns/op",
            "extra": "366998 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - B/op",
            "value": 3118,
            "unit": "B/op",
            "extra": "366998 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Single_software_spams - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "366998 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams",
            "value": 3159,
            "unit": "ns/op\t    3134 B/op\t      32 allocs/op",
            "extra": "364770 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - ns/op",
            "value": 3159,
            "unit": "ns/op",
            "extra": "364770 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - B/op",
            "value": 3134,
            "unit": "B/op",
            "extra": "364770 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Two_softwares_spams - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "364770 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams",
            "value": 3398,
            "unit": "ns/op\t    3134 B/op\t      33 allocs/op",
            "extra": "345758 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - ns/op",
            "value": 3398,
            "unit": "ns/op",
            "extra": "345758 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - B/op",
            "value": 3134,
            "unit": "B/op",
            "extra": "345758 times\n4 procs"
          },
          {
            "name": "BenchmarkReportHandler/Four_softwares_spams - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "345758 times\n4 procs"
          }
        ]
      }
    ]
  }
}