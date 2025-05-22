import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{a as g,C as c,M as m}from"./ContextMenuContent-ChUt7sP9.js";import"./ContextMenuSection-bZO6InGK.js";import{B as l}from"./Button-CT6jKELJ.js";import M from"./Default.stories-CYoxtD3V.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Action-BASfP4Hw.js";import"./context-DnKpt6Zm.js";import"./PropsContextProvider-yY6RzzUT.js";import"./mergeRefs-_uxeg_17.js";import"./clsx-B-dksMZM.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./useStatic-CLm-J0DW.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-BoNoL21H.js";import"./dynamic-DKDa4OpU.js";import"./Popover-Dr9LZuKh.js";import"./OverlayTrigger-Bwrcht6a.js";import"./Dialog-WcTWvLN6.js";import"./Button-CY6niT9f.js";import"./utils-DvYDvJ-W.js";import"./ProgressBar-DuZjZRB2.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DP9zv8XI.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-rEv_nV0O.js";import"./useFocus-bBgo0bKd.js";import"./useFocusRing-DUlPoSa4.js";import"./useFocusable-fU6dY-gF.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-C1erJO4A.js";import"./useControlledState-DjePt-lg.js";import"./Collection-i8EjBJSq.js";import"./CollectionBuilder-Dw9MTGx5.js";import"./Separator-CUf66PuO.js";import"./Text-1CJ30n_Q.js";import"./SelectionManager-CTcRB2Ps.js";import"./useEvent-DsDOr2ug.js";import"./useCollator-Cym9_BaK.js";import"./FocusScope-BCiwkv3e.js";import"./VisuallyHidden-B4AzoGqn.js";import"./DialogTriggerView-APD_Z0jH.js";import"./IconWarning-70jApbHx.js";import"./Switch-hEiY1pJD.js";import"./Label-Bp6Pnofu.js";import"./useToggleState-DghbFXGk.js";import"./useFormReset-BiMHJINb.js";import"./Text-9PUJLXl5.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./LoadingSpinner-BHQSc97o.js";import"./Separator-BJ9qCVe-.js";import"./Heading-bJ8ZWrvE.js";import"./Heading-BFHXViOZ.js";import"./Avatar-BT-COonu.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-0Mrbq7jC.js";import"./Initials-BUOTWARS.js";import"./onlyText-Btijrq19.js";const wr={...M,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsxs(c,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsx(c,{...e,children:Array(20).fill("").map((T,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};var n,s,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
