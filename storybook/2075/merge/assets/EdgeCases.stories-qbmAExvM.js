import{j as r}from"./iframe-QQgxjfU-.js";import{C as n,M as e}from"./MenuItem-BYgn9L54.js";import{C as s}from"./ContextMenuTrigger-PKqcZi61.js";import"./ContextMenuSection-BZb_tlaR.js";import{B as u}from"./Button-BWu_s2A1.js";import a from"./Default.stories-CO8s_NzN.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./Action-DetrUASE.js";import"./context-C73KBwIX.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./clsx-B-dksMZM.js";import"./index-3NdHptBj.js";import"./useStatic-B5jRDwsJ.js";import"./browser-CvCNE6Dh.js";import"./getActionGroupSlot-AfJwTJD5.js";import"./dynamic-BjF6TIyL.js";import"./Popover-6OcPTHJw.js";import"./useOverlayController-nxYv6OIh.js";import"./OverlayContextProvider-DVG4wpYy.js";import"./Dialog-D5kgP22k.js";import"./Button-D9YKuqRT.js";import"./utils-DhA81qjX.js";import"./ProgressBar-DarvvV7I.js";import"./Label-0zOMPJ7B.js";import"./Hidden-4F2-2j_N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BVJbXyTi.js";import"./context-CRx6Bs8B.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIrX7kgo.js";import"./useFocus-0cMRA2DE.js";import"./useFocusRing-UOKs1Fh8.js";import"./useFocusable-ClkP-4lm.js";import"./RSPContexts-CsH1Ib1c.js";import"./OverlayArrow-8rZ2ifiK.js";import"./useControlledState-CkoNAxF1.js";import"./Collection-BHgWnzFo.js";import"./CollectionBuilder-8HmDsnbK.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./Separator-BjOsH73i.js";import"./Text-D_WC5Uss.js";import"./SelectionManager-okGnjmMp.js";import"./useEvent-ChbsxOK6.js";import"./useCollator-Dex40a3g.js";import"./FocusScope-Bg9evWjP.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./VisuallyHidden-B95C2FUL.js";import"./ClearPropsContextView-DUKOvykV.js";import"./ClearPropsContext-C1xOcMSE.js";import"./IconWarning-CSQYjrC1.js";import"./Switch-BOSrZvlT.js";import"./useFieldComponent-B5mMljfV.js";import"./react-children-utilities-2-HBtGkG.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-DfOzNy-a.js";import"./useToggleState-waVL2aEM.js";import"./useFormReset-C3QpCCH-.js";import"./OverlayTrigger-Kv_JLhIy.js";import"./ControlledNotification-BZ0xiENt.js";import"./Text-CRs-OO-e.js";import"./EmulatedBoldText-DL56_OWd.js";import"./LoadingSpinner-DsHmX75T.js";import"./Separator-j4RnqhJJ.js";import"./Heading-BhecTOma.js";import"./Heading-SF4sVKWG.js";import"./Avatar-DqeRZ3SN.js";import"./AlertIcon-Dt_kIrwl.js";import"./Initials-CkY4Dkvr.js";const wr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Sr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Sr as __namedExportsOrder,wr as default};
