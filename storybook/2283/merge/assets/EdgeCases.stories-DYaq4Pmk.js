import{j as r}from"./iframe-lb0QDBc2.js";import{C as n,M as e}from"./ContextMenu-Dv-q2EAf.js";import{C as s}from"./ContextMenuTrigger-CmiSzFi3.js";import"./ContextMenuSection-BhdaIGz3.js";import{B as u}from"./Button-juKgyftR.js";import a from"./Default.stories-FZxMPeIs.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./index-DLJvSM0l.js";import"./IconWarning-BeH6azjz.js";import"./remote-HK64Xy28.js";import"./Switch-CjVVIn_n.js";import"./useFieldComponent-DzHSa8uO.js";import"./Label.module-CUYTf9Jc.js";import"./utils-r2dAqIcX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useToggleState-CuJBCnJp.js";import"./useFormReset-BIwT2nL6.js";import"./useFocusRing-J18h0CnC.js";import"./useFocus-B48NrLMU.js";import"./usePress-CgYa4G9K.js";import"./useFocusable-BRnBN5zK.js";import"./useControlledState-BS6Up44I.js";import"./VisuallyHidden-k_Pf5ETO.js";import"./Dialog-21JmjHkj.js";import"./Button-D3ym-GoV.js";import"./ProgressBar-BWiLeXEa.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./useLabel-DBnvm8X4.js";import"./context-DKVhGweU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-YTE8c3lP.js";import"./OverlayArrow-CyZLGayb.js";import"./Collection-qMjf8izv.js";import"./CollectionBuilder-C0jSlJnc.js";import"./SelectionIndicator-DyUDH3aS.js";import"./Separator-dugLvl-c.js";import"./Text-DV3fQztC.js";import"./SelectionManager-DxNkh6e5.js";import"./useEvent-DYKWYeYn.js";import"./useCollator-BRhgG2J7.js";import"./FocusScope-BL38dLR2.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./Action-4cKKicYt.js";import"./context-C_yF8yzC.js";import"./useStatic-C9kOien4.js";import"./browser-D6xfswL2.js";import"./getActionGroupSlot-CYlSlA5g.js";import"./dynamic-oimbFEy9.js";import"./Popover-C9ioIy3o.js";import"./useOverlayController-DrUwu9jx.js";import"./OverlayContextProvider-kVRdTbI-.js";import"./OverlayTrigger-DJa2X_ri.js";import"./Text-Bvo-yLEA.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./LoadingSpinner-D-Hn99XA.js";import"./Separator-C_Krj0qm.js";import"./Heading-Be2qz7j6.js";import"./Heading-BMdu11KH.js";import"./Avatar-CtTVpllB.js";import"./AlertIcon-DWhGd_Tx.js";import"./Initials-DDdue2xX.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
