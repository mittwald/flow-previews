import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{a as g,C as c,M as m}from"./ContextMenuContent-Cb8rNRRT.js";import"./ContextMenuSection-lYIm3Wsn.js";import{B as l}from"./Button-CbN8Qn6V.js";import M from"./Default.stories-hqebuE5c.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Action-Cl6JccS9.js";import"./context-Cku6jByl.js";import"./PropsContextProvider-ADM7KP_B.js";import"./mergeRefs-DiwoqHxs.js";import"./clsx-B-dksMZM.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./useStatic-BrY-dsbP.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-C3DYPhlZ.js";import"./dynamic-DKDa4OpU.js";import"./Popover-C4B47nlu.js";import"./OverlayTrigger-DY12d_17.js";import"./Dialog-DHB7afQp.js";import"./Button-3GcZ2y2i.js";import"./utils-Bm37ngJk.js";import"./ProgressBar-lRSo0OUL.js";import"./Label-B_sU3NXB.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ8zpiVY.js";import"./useLocalizedStringFormatter-BzGhSkyu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CC9yd5Fh.js";import"./useFocus-C3ExUvEL.js";import"./useFocusRing-wzjDdF0K.js";import"./useFocusable-CzgSXE3t.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CyRBwams.js";import"./useControlledState-YIijONQK.js";import"./Collection-43aF_0U7.js";import"./CollectionBuilder--ipx_qrV.js";import"./Separator-By-KuC_f.js";import"./Text-I7rzu-gq.js";import"./SelectionManager-W-F9tXjW.js";import"./useEvent-Dw3zA1wO.js";import"./useCollator-rVor1fd8.js";import"./FocusScope--xlp8sQI.js";import"./VisuallyHidden-C4REVXC4.js";import"./DialogTriggerView-BwEKSqnI.js";import"./IconWarning-CNxTpz-G.js";import"./Switch-DyZ3EHGe.js";import"./Label-B4ewt7OD.js";import"./useToggleState-BrsYFbbM.js";import"./useFormReset-gF4HkNmA.js";import"./Text-DqBkWPX0.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./LoadingSpinner-BT51OXM_.js";import"./Separator-qQ39ORId.js";import"./Heading-uK_gBwm9.js";import"./Heading-4pNfXNbn.js";import"./Avatar-D1sokLzE.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-QDb6lgt2.js";import"./Initials-DaHLX89n.js";import"./onlyText-Btijrq19.js";const wr={...M,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsxs(c,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsx(c,{...e,children:Array(20).fill("").map((T,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};var n,s,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
