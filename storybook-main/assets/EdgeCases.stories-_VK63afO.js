import{j as r}from"./iframe-CwpToEZy.js";import{C as n,M as m}from"./MenuItem-CYuM5Mgh.js";import{C as s}from"./ContextMenuTrigger-Ba9AK00Z.js";import"./ContextMenuSection-vq3x4ZL9.js";import{B as u}from"./Button-Cw2xgR_6.js";import a from"./Default.stories-XRnYlOKH.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-DcvnwnMD.js";import"./useOverlayController-C-oxUxCp.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./clsx-B-dksMZM.js";import"./index-G1voh-81.js";import"./useStatic-CYuvZ5-t.js";import"./browser-DhIaf7O7.js";import"./getActionGroupSlot-DtR43x--.js";import"./dynamic-CfOleVAa.js";import"./Popover-BSakkrK3.js";import"./OverlayContextProvider-CBORYkOm.js";import"./Dialog-CQ_DXP4m.js";import"./Button-CuwTmUjn.js";import"./utils-3nROwXn_.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-XdPLXI.js";import"./context-DWVDZDUv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kUL6l53_.js";import"./useFocus-BFSvAolX.js";import"./useFocusRing-CJeIxJct.js";import"./useFocusable-ixEZOImu.js";import"./RSPContexts-DAz7wbZz.js";import"./OverlayArrow-Df1wGHjd.js";import"./useControlledState-BvlK1ysl.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./SelectionIndicator-ByN8hOyY.js";import"./Separator-DijFhA23.js";import"./Text-Cb4d8n7F.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./FocusScope-CBNoFIyM.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./VisuallyHidden-CnggHClH.js";import"./IconWarning-BRui_VYo.js";import"./remote-DRomu556.js";import"./Switch-CqYSsJsi.js";import"./useFieldComponent-CneqxYGw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Doj7UKiV.js";import"./useFormReset-BARG9uBg.js";import"./LoadingSpinner-CN3jmE_K.js";import"./OverlayTrigger-Dh_IH1hG.js";import"./Text-DRk3V-Fm.js";import"./EmulatedBoldText-YNefbpnq.js";import"./Separator-DC-xQo_s.js";import"./Heading-BXHG1LZb.js";import"./Heading-CAz3skDU.js";import"./Avatar-DMfxqN6s.js";import"./AlertIcon-DEQIepDy.js";import"./Initials-CDU7HsXN.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...o.parameters?.docs?.source}}};const Ar=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Ar as __namedExportsOrder,Lr as default};
