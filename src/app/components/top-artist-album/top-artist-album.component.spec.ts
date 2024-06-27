import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtistAlbumComponent } from './top-artist-album.component';

describe('TopArtistAlbumComponent', () => {
  let component: TopArtistAlbumComponent;
  let fixture: ComponentFixture<TopArtistAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopArtistAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopArtistAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
