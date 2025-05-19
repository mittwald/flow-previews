import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{a as g,C as c,M as m}from"./ContextMenuContent-CDWda837.js";import"./ContextMenuSection-D53Rz7V5.js";import{B as l}from"./Button-HNIyHWur.js";import M from"./Default.stories-ClAvPMsi.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Action-DEz0u6lN.js";import"./context-C9AG9o4h.js";import"./PropsContextProvider-BLvIrsPJ.js";import"./mergeRefs-CQveTfyF.js";import"./clsx-B-dksMZM.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./useStatic-_S75A7Vn.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-Q0xeGE_F.js";import"./dynamic-DKDa4OpU.js";import"./Popover-Cv5CotnU.js";import"./OverlayTrigger-zrHS2epI.js";import"./Dialog-B0vEu32W.js";import"./Button-C4BByqx5.js";import"./utils-D9H5ZYVa.js";import"./ProgressBar-BwjDzH8d.js";import"./Label-nK1nmjBx.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CVdsQLKm.js";import"./useLocalizedStringFormatter-2OBKXYKe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress--lgM-7rV.js";import"./useFocus-Dz5Sgz6F.js";import"./useFocusRing-VURPolDQ.js";import"./useFocusable-B6XldfNl.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-DLYo5xVk.js";import"./useControlledState-YIijONQK.js";import"./Collection-DH8MVYRU.js";import"./CollectionBuilder-B62dxoFp.js";import"./Separator-CJYrkcAH.js";import"./Text-RYc5i20l.js";import"./SelectionManager-Clajy7Q-.js";import"./useEvent-CfLopXbq.js";import"./useCollator-B5zTmuon.js";import"./FocusScope-me2WFoLK.js";import"./VisuallyHidden-CNMq674x.js";import"./DialogTriggerView-BcFm6CFN.js";import"./IconWarning-Dhqk9c5Q.js";import"./Switch-BuG2DC_0.js";import"./Label-BnZNwGkU.js";import"./useToggleState-CFxRzXi5.js";import"./useFormReset-wPtuGCA4.js";import"./Text-DAta9oPQ.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./LoadingSpinner-DV38nRyp.js";import"./Separator-BWCfWx--.js";import"./Heading-DuDnBCZR.js";import"./Heading-DDNWI995.js";import"./Avatar-B4QKR0EO.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-D1Wdr6VH.js";import"./Initials-BhGhoZa4.js";import"./onlyText-Btijrq19.js";const wr={...M,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsxs(c,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsx(c,{...e,children:Array(20).fill("").map((T,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};var n,s,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    width: 400
  },
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var a,d,x;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(x=(d=o.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Sr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Sr as __namedExportsOrder,wr as default};
