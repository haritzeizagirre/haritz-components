import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface HtzTreeNode {
  label: string;
  expanded?: boolean;
  children?: HtzTreeNode[];
}

@Component({
  selector: 'htz-tree',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './htz-tree.component.html',
  styleUrl: './htz-tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzTreeComponent {
  nodes = input<HtzTreeNode[]>([]);

  toggleNode(node: HtzTreeNode): void {
    if (node.children && node.children.length > 0) {
      node.expanded = !node.expanded;
    }
  }
}
