import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import {
  DataGridPro,
} from '@mui/x-data-grid-pro';
import { Chip } from '@mui/material';
const data=[{
    "current": {
      "business": {
        "business_core": "CUSO C",
        "business_division": "Alt",
        "business_id": 82,
        "entity_key": null,
        "is_active": true,
        "l2": "RIHC",
        "l4": null,
        "new_l5": null,
        "replaced_by": 0,
        "sort": 0
      },
      "business_hierarchy": {
        "business_acronym_hierarchy": {
          "l1": "CUSO",
          "l2": "RIHC",
          "l3": null,
          "l4": null,
          "l5": null
        },
        "business_acronym_list": [
          "l1:CUSO",
          "l2:RIHC"
        ],
        "business_description_hierarchy": {
          "l1": "Combined US Operations",
          "l2": "RBC U.S. International Holding Company",
          "l3": null,
          "l4": null,
          "l5": null
        },
        "business_description_list": [
          "l1: Combined US Operations",
          "l2: RBC U.S. International Holding Company"
        ],
        "business_hierarchy_id": 2,
        "level": 2
      },
      "create_date": "2023-06-28 10:00:00+00:00",
      "cycle": {
        "cycle_id": 10,
        "cycle_prev": 9,
        "effective_date": "2023-05-30",
        "entity_key": "Q3_2023",
        "lock_date": null,
        "tag_1": "Q3 2023"
      },
      "edit_date": "2023-06-28 10:00:00+00:00",
      "horizon": null,
      "is_material": null,
      "item_description": "The risk of the potential environmental (including climate).",
      "item_state": -1,
      "legacy_key": null,
      "likelihood": null,
      "retired": true,
      "risk_id": "NA",
      "risk_item": {
        "risk_item_id": 792,
        "risk_item_key": "ESG 01"
      },
      "risk_item_cycle_id": 10733,
      "risk type": {
        "entity_key": null,
        "is active": true,
        "level_four": "",
        "level_one": "ESG/Climate Risk",
        "level_three": "",
        "level_two": "ESG/ Climate Risk",
        "replaced_by": 222,
        "risk_type_id": 222
      },
      "risk_type_level_four": "",
      "severity": {
        "display": "> $110",
        "entity_key": "",
        "is_active": false,
        "midpoint": 110,
        "severity_id": 28,
        "sort": 8
      },
      "workflow_status": {
        "status_description": "1LOD Draft",
        "workflow status id": 1
      }
    },
    "diff": {},
    "id": 792,
    "modified": false,
    "previous": {
      "business": {
        "business_core": "CUSO P",
        "business_division": "All",
        "business id": 82,
        "entity_key": null,
        "is_active": true,
        "l2": "RIHC",
        "l4": null,
        "new_l5": null,
        "replaced_by": 0,
        "sort": 0
      },
      "business_hierarchy": {
        "business_acronym_hierarchy": {
          "l1": "CUSO",
          "l2": "RIHC",
          "l3": null,
          "l4": null,
          "l5": null
        },
        "business_acronym_list": [
          "l1:CUSO",
          "l2:RIHC"
        ],
        "business_description_hierarchy": {
          "l1": "Combined US Operations",
          "l2": "RBC U.S. International Holding Company",
          "l3": null,
          "l4": null,
          "l5": null
        },
        "business_description_list": [
          "l1: Combined US Operations",
          "l2: RBC U.S. International Holding Company"
        ],
        "business_hierarchy_id": 2,
        "level": 2
      },
      "create_date": "2023-06-28 10:00:00+00:00",
      "cycle": {
        "cycle_id": 9,
        "cycle_prev": 8,
        "effective_date": "2023-12-31",
        "entity_key": "Q1 2023",
        "lock_date": "2023-03-31",
        "tag_1": "Q1 2023"
      },
      "edit_date": "2023-03-15 10:00:00+00:00",
      "horizon": {
        "display": "test2",
        "entity_key": "test",
        "horizon_id": 1,
        "is_active": true,
        "sort": 0
      },
      "is_material": null,
      "item_description": "The risk of the potential environmental (including climate).",
      "item_state": 0,
      "legacy_key": null,
      "likelihood": null,
      "retired": true,
      "risk_id": "NA",
      "risk_item": {
        "risk_item_id": 792,
        "risk_item_key": "ESG 01"
      },
      "risk_item_cycle_id": 6081,
      "risk type": {
        "entity_key": null,
        "is active": true,
        "level_four": "",
        "level_one": "ESG/Climate Risk",
        "level_three": "",
        "level_two": "ESG/ Climate Risk",
        "replaced_by": 222,
        "risk_type_id": 222
      },
      "risk_type_level_four": "",
      "severity": {
        "display": "> $110",
        "entity_key": "",
        "is_active": false,
        "midpoint": 110,
        "severity_id": 28,
        "sort": 8
      },
      "workflow_status": null
    },
    "state": -1
  }]
function DetailPanelContent({ row: rowProp}) {
const columns = React.useMemo(
    () => [

        { field: 'risk_item_key', headerName: 'Risk Key'},
        { field: 'status_description', headerName: 'Status', width: 200 },
        { field: 'l2',  headerName: 'L2' },
        { field: 'cycle', headerName: 'Cycle',
    renderCell: (params) => (  <Chip label={params.value} color="primary" variant="outlined" >
           </Chip>
      
        )
        },
        {field: 'business_core', headerName: 'Business Core',width: 200, 
    
        renderCell: (params) => (  <Chip  label= {params.value} color="success" >
       </Chip>
 
   )},
        {field: 'business_division', headerName: 'Business Division', width: 200 },
      
    ],
    [],
  );

  return (
<DataGridPro
           rowThreshold={0}
            columns={columns}
            rows={rowProp.products}
            hideFooter
            style={{marginLeft:40}}
          />
   
    

  );
}

const columns = [
  { field: 'risk_item_key', headerName: 'Risk ID' },
  { field: 'status_description', headerName: 'Status', width: 200 },
  { field: 'l2',  headerName: 'L2' },
  { field: 'cycle', headerName: 'Cycle' },
  {
    field: 'business_core',
    headerName: 'Business Core',
    width: 200 
  },
  {
    field: 'business_division',
    headerName: 'Business Division',
    width: 200 
  }
];

const rows =data.map((data)=>{
    return {
        id:data.current.risk_item.risk_item_id,
        risk_item_key:data.current.risk_item.risk_item_key,
        l2:data.current.business_hierarchy.business_acronym_hierarchy.l2,
        cycle:data.current.cycle.cycle_id,
        business_core:data.current.business.business_core,
        business_division:data.current.business.business_division,
        products:[{
            id:data.previous.risk_item.risk_item_id,
            risk_item_key:data.previous.risk_item.risk_item_key,
            l2:data.previous.business_hierarchy.business_acronym_hierarchy.l2,
            cycle:data.previous.cycle.cycle_id,
            business_core:data.previous.business.business_core,
            business_division:data.previous.business.business_division,
            }]
    }
})


export default function DetailPanelAutoHeight(data) {
    console.log(data)
  const getDetailPanelContent = React.useCallback(
    ({ row }) => <DetailPanelContent row={row} />,
    [],
  );

  const getDetailPanelHeight = React.useCallback(() => 'auto', []);

  return (
    <Box sx={{ width: 1, minHeight: 400 }}>
      <DataGridPro
        columns={columns}
        rows={rows}
        rowThreshold={0}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
        slots={{
          detailPanelExpandIcon: ExpandMoreIcon,
          detailPanelCollapseIcon: ExpandLessIcon,
        }}
      />
    </Box>
  );
}
