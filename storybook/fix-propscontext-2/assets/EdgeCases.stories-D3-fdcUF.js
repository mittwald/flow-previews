import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{a as g,C as c,M as m}from"./ContextMenuContent-Bs_CnfSD.js";import"./ContextMenuSection-UKzWbej2.js";import{B as l}from"./Button-Cx852dC8.js";import M from"./Default.stories-Cu3bxWBH.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Action-CYfAq6EL.js";import"./context-BHXZuMVa.js";import"./flowComponent-DH4ScC2R.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./clsx-B-dksMZM.js";import"./useStatic-Dg6j0jAA.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-DBhwSc7c.js";import"./dynamic-DKDa4OpU.js";import"./Popover-Bfm97Yqk.js";import"./MenuTrigger-dSDRANfB.js";import"./Dialog-BV8uMRwe.js";import"./Button-BBWo3kGM.js";import"./utils-CzVyYWZn.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./Text-PTaPc_Ci.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./DialogTriggerView-DkRoBzAI.js";import"./IconApp-CsW6VVPl.js";import"./IconWarning-DAj50GX8.js";import"./Switch-CtEy4XjD.js";import"./Label-DZ85i_Qc.js";import"./useToggleState-B7W1plhv.js";import"./useFormReset-CilIRCFg.js";import"./Wrap-DQq6jo70.js";import"./Text-CEm0ouz8.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./LoadingSpinner-Dhg1Wy_7.js";import"./Separator-YGLUviDz.js";import"./Heading-DvV74Kd2.js";import"./Heading-BCoG4c8D.js";import"./Avatar-BA_eSWpI.js";import"./react-children-utilities-fm2cgFnI.js";import"./Initials-B97t7JQl.js";import"./onlyText-DBswRDk6.js";const wr={...M,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsxs(c,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsx(c,{...e,children:Array(20).fill("").map((T,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};var n,s,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
