import{j as r}from"./iframe-BL1IY_6V.js";import{C as n,M as e}from"./MenuItem-DVc0Ku48.js";import{C as s}from"./ContextMenuTrigger-C2WcmNSl.js";import"./ContextMenuSection-JBlJYK6m.js";import{B as u}from"./Button-B7zQBVb0.js";import a from"./Default.stories-BKoZozBS.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BftMxRJh.js";import"./context-Cv8xNoZb.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./clsx-B-dksMZM.js";import"./index-Cr6jOlTO.js";import"./useStatic-BujRUGzM.js";import"./browser-DogRo3Wh.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./dynamic-Dn3YQ50F.js";import"./Popover-B7Z0vypa.js";import"./useOverlayController-D_GPxB6v.js";import"./OverlayContextProvider-Nf2zCsXY.js";import"./Dialog-CDLoJFKu.js";import"./Button-CHtMceZn.js";import"./utils-GyL2rjZN.js";import"./ProgressBar-DK1MtX49.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./context-BeO7KH58.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxRwZ9-L.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocusable-CUtc6O_Q.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./useControlledState-CA6yhcg7.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./Text-B4yGITBG.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./VisuallyHidden-CgqIxBlU.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./Switch-BaHFFbbk.js";import"./useFieldComponent-oZ5IqIdY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CSM3AEzw.js";import"./useFormReset-C4J5P-lS.js";import"./LoadingSpinner-BFVS5fU_.js";import"./OverlayTrigger-D4p9MH82.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Separator-B28LeStb.js";import"./Heading-Weu1gBHD.js";import"./Heading-CMaaNVI7.js";import"./Avatar-BDSWcHwm.js";import"./AlertIcon-B2R_BHtC.js";import"./Initials-BiSrQZeK.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Er=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Er as __namedExportsOrder,Ar as default};
