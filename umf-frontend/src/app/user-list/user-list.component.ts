import {Component, OnInit} from '@angular/core';
import {IssueService} from '../service/issue.service';
import {IssueShortInfo} from '../model/IssueShortInfo';
import {IssueType} from '../model/IssueType';
import {Utils} from '../shared/utils';
import {LoggingService} from '../service/logging.service';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {IssuesPageUserSettings} from '../model/IssuesPageUserSettings';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [NgbDropdownConfig]
})
export class IssueListComponent implements OnInit {

  public pages: number;
  public issueShortInfoList: IssueShortInfo[];

  cols: any[];

  public recordsPerPageList: number[] = [25, 50, 100, 200];

  public page: number = IssuesPageUserSettings.DEFAULT_PAGE;
  public selectedRecordsPerPage: number = IssuesPageUserSettings.DEFAULT_RECORDS_PER_PAGE;

  constructor(private issueService: IssueService,
              private loggingService: LoggingService,
              private ngbDropdownConfig: NgbDropdownConfig,
              private issuesPageUserSettings: IssuesPageUserSettings) {
    ngbDropdownConfig.placement = 'top-left';
  }

  ngOnInit() {
    this.getIssues();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'createdDate', header: 'Created Date' },
      { field: 'issueType', header: 'Issue Type' },
      { field: 'traderNames', header: 'Traders' },
      { field: 'instrument', header: 'Instrument' }
    ];
  }

  getIssues() {
    this.issueService.getAllIssues(
      this.issuesPageUserSettings.getIssueType(),
      this.issuesPageUserSettings.getPage(),
      this.issuesPageUserSettings.getRecordsPerPage(),
      this.issuesPageUserSettings.getSort(),
      this.issuesPageUserSettings.getOrder()
    ).subscribe(page => {
      this.page = this.issuesPageUserSettings.getPage();
      this.pages = Math.ceil(page.totalCount / this.issuesPageUserSettings.getRecordsPerPage());
      this.issueShortInfoList = page.content.map(incomingIssueShortInfoDTO => new IssueShortInfo(incomingIssueShortInfoDTO));
      this.selectedRecordsPerPage = this.issuesPageUserSettings.getRecordsPerPage();
    }, (error => {
      this.loggingService.logException(new Error(error.error.message));
    }));
  }

  assignBootstrapButtonClassForIssue(issueType: IssueType): string {
    return Utils.assignBootstrapButtonClassForIssue(issueType);
  }

  showInstrument(issueShortInfo: IssueShortInfo) {
    return !Utils.isNullOrUndefinedOrEmpty(issueShortInfo.instrument);
  }

  showTraders(issueShortInfo: IssueShortInfo) {
    return !Utils.isNullOrUndefinedOrEmpty(issueShortInfo.traderNames);
  }

  getAllIssues() {

    this.issuesPageUserSettings.setPage(IssuesPageUserSettings.DEFAULT_PAGE);
    this.issuesPageUserSettings.setIssueType(undefined);
    this.issuesPageUserSettings.setRecordsPerPage(IssuesPageUserSettings.DEFAULT_RECORDS_PER_PAGE);

    this.getIssues();
  }

  getAllPumpAndDumpIssues() {

    this.issuesPageUserSettings.setPage(IssuesPageUserSettings.DEFAULT_PAGE);
    this.issuesPageUserSettings.setIssueType(IssueType.PUMP_N_DUMP);
    this.issuesPageUserSettings.setRecordsPerPage(IssuesPageUserSettings.DEFAULT_RECORDS_PER_PAGE);

    this.getIssues();
  }

  getAllSpoofingIssues() {

    this.issuesPageUserSettings.setPage(IssuesPageUserSettings.DEFAULT_PAGE);
    this.issuesPageUserSettings.setIssueType(IssueType.SPOOFING);
    this.issuesPageUserSettings.setRecordsPerPage(IssuesPageUserSettings.DEFAULT_RECORDS_PER_PAGE);

    this.getIssues();
  }

  getAllLayeringIssues() {

    this.issuesPageUserSettings.setPage(IssuesPageUserSettings.DEFAULT_PAGE);
    this.issuesPageUserSettings.setIssueType(IssueType.LAYERING);
    this.issuesPageUserSettings.setRecordsPerPage(IssuesPageUserSettings.DEFAULT_RECORDS_PER_PAGE);

    this.getIssues();
  }

  getAllOtherOrderBaseIssues() {

    this.issuesPageUserSettings.setPage(IssuesPageUserSettings.DEFAULT_PAGE);
    this.issuesPageUserSettings.setIssueType(IssueType.OTHER_ORDER_BASED);
    this.issuesPageUserSettings.setRecordsPerPage(IssuesPageUserSettings.DEFAULT_RECORDS_PER_PAGE);

    this.getIssues();
  }

  changeRecordsPerPage(recordsPerPage: number) {

    this.issuesPageUserSettings.setPage(IssuesPageUserSettings.DEFAULT_PAGE);
    this.issuesPageUserSettings.setRecordsPerPage(recordsPerPage);

    this.selectedRecordsPerPage = this.issuesPageUserSettings.getRecordsPerPage();

    this.getIssues();
  }

  setPage(i: number, event: any) {
    event.preventDefault();
    this.issuesPageUserSettings.setPage(i);
    this.getIssues();
  }

  onPageSelected(selectedPageNumber: number) {
    this.issuesPageUserSettings.setPage(selectedPageNumber.valueOf());
    this.getIssues();
  }
}

