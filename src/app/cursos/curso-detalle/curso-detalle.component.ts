import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CursossService } from '../cursoss.service';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css'],
})
export class CursoDetalleComponent implements OnInit {
  id: number;
  data: any = [];
  constructor(
    private route: ActivatedRoute,
    private cursosService: CursossService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.data = this.cursosService.getCursosPorId(parseInt(params.get('id')));
      if (this.data == null) {
        this.router.navigate(['cursos/notfound']);
      }
    });
  }
}
