import{j as r}from"./iframe-BN_dfUe_.js";import{b as g,C as c,M as m}from"./ContextMenuSection-DopY__n7.js";import{B as l}from"./Button-D-C47sqm.js";import M from"./Default.stories-ByeyWGnM.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./Action-V_TKCgSi.js";import"./context-DRf69qys.js";import"./PropsContextProvider-BdWjLDJi.js";import"./mergeRefs-upl_BBo9.js";import"./index-C8Ff-wAx.js";import"./clsx-B-dksMZM.js";import"./useStatic-wsYo6cwd.js";import"./browser-BV7EqxDV.js";import"./getActionGroupSlot-BHB3McHc.js";import"./dynamic-BgZcYaB5.js";import"./Popover-DLER5_Cb.js";import"./DialogTriggerView-nA9ebbIS.js";import"./Button-Df2sUXty.js";import"./utils-B0sx3Kyr.js";import"./ProgressBar-jBCVtiFi.js";import"./Label-DGLQk8oX.js";import"./Hidden-DymlCD5P.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BVHoyGPi.js";import"./context-dredv6-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D00Qk3ID.js";import"./useFocus-BPnQl8Vs.js";import"./useFocusRing-BbyZkAky.js";import"./useFocusable-CjxkNo9x.js";import"./RSPContexts-D2tN5T2G.js";import"./ClearPropsContextView-DP5aaG59.js";import"./useControlledState-B3OMKOuD.js";import"./FocusScope-DSvKVwGk.js";import"./useCollator-D4KmbgCM.js";import"./useLocalizedStringFormatter-CxEOdw80.js";import"./VisuallyHidden-Cv7STolA.js";import"./Collection-BYc3dnT8.js";import"./CollectionBuilder-Eq-dAbBR.js";import"./Separator-DJTsPnLp.js";import"./Text-Bh7wF6OD.js";import"./Group-BVQ5MOmY.js";import"./SearchField-BBPaTZKc.js";import"./FieldError-CIdDbIOg.js";import"./Form-BI9DTP98.js";import"./useTextField-BYi7xCqf.js";import"./useFormReset-DQe0b_9O.js";import"./TextField-BdrHFS2A.js";import"./useEvent-BzG6iyzN.js";import"./SelectionManager-Bc25mfga.js";import"./IconWarning-DNOLg4j3.js";import"./Switch-ky0UvS97.js";import"./Label-BSR54Ews.js";import"./useToggleState-CCrodwRf.js";import"./Text-DzaqmzRj.js";import"./EmulatedBoldText-D3DsYnee.js";import"./LoadingSpinner-BajA46At.js";import"./Separator-CRErl3mY.js";import"./Heading-C3bMpqRe.js";import"./Heading-BXZxzqvc.js";import"./Avatar-DHdwDP4x.js";import"./AlertIcon-CQa5yTJZ.js";import"./Initials-CbX51OdT.js";import"./react-children-utilities-D5LF6eI0.js";const wr={...M,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsxs(c,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsx(c,{...e,children:Array(20).fill("").map((T,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};var n,s,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
