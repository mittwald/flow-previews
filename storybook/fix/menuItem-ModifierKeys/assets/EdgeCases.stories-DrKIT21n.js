import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{a as m,C as p,M as n}from"./ContextMenuContent-CEJkD-uO.js";import"./ContextMenuSection-C2hykenk.js";import{B as a}from"./Button-CF4ZysTX.js";import j from"./Default.stories-BnYQezrv.js";import{d as u}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Action-Y9vUQ_E8.js";import"./context-Cn4G8t_B.js";import"./flowComponent-BPJHi05H.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-DmntCNXg.js";import"./clsx-B-dksMZM.js";import"./useStatic-Boalhu8h.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-CX7tjRC3.js";import"./dynamic-DKDa4OpU.js";import"./Popover-Bo6e0GAV.js";import"./MenuTrigger-4stFWxuJ.js";import"./Dialog-TWm-lwKH.js";import"./Button-DlOLKXkK.js";import"./utils-B8p6n-_S.js";import"./ProgressBar-CMGFgh_N.js";import"./Label-CRtDyyLG.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DjubqfyV.js";import"./useLocalizedStringFormatter-z2l0_8m0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_abas1X.js";import"./useFocus-0lzzAyJ_.js";import"./useFocusRing-C08ZnYSv.js";import"./useFocusable-dJayk3b7.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-BxXqfwgF.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-B-y1oEx2.js";import"./CollectionBuilder-cVXcHFND.js";import"./Separator-D0eYhWhZ.js";import"./Text-CUmgXOYU.js";import"./SelectionManager-BB9PAfr3.js";import"./useEvent-BxpP-RFo.js";import"./useCollator-CB8NJtcR.js";import"./FocusScope-2Ar0PVcM.js";import"./VisuallyHidden-DCnFJsId.js";import"./DialogTriggerView-BetAvd-7.js";import"./IconApp-W8-S6AAB.js";import"./IconWarning-BUA863Ku.js";import"./Switch-C-KlLhsA.js";import"./Label-CzYjGm4V.js";import"./useToggleState-DbTFgthm.js";import"./useFormReset-m57alayF.js";import"./Wrap-DQq6jo70.js";import"./Text-DKc2hFom.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./LoadingSpinner-Cpk2RUSc.js";import"./Separator-CGQ9mEuV.js";import"./Heading-CnJT-hhq.js";import"./Heading-Cc6WIW0_.js";import"./Avatar-CGOvanLK.js";import"./react-children-utilities-fm2cgFnI.js";import"./Initials-CQtQAMCg.js";import"./onlyText-DBswRDk6.js";const Er={...j,title:"Actions/ContextMenu/Edge Cases"},o={args:{width:400},render:e=>r.jsxs(m,{children:[r.jsx(a,{children:"Trigger"}),r.jsxs(p,{...e,children:[r.jsx(n,{children:u.medium}),r.jsx(n,{children:u.medium})]})]})},i={render:e=>r.jsxs(m,{children:[r.jsx(a,{children:"Trigger"}),r.jsx(p,{...e,children:Array(20).fill("").map((t,c)=>r.jsxs(n,{children:["Item ",c+1]},c))})]})},s={args:{width:400},render:e=>r.jsxs(m,{children:[r.jsx(a,{children:"Trigger"}),r.jsxs(p,{...e,children:[r.jsx(n,{onAction:()=>alert("Action"),children:"Action"}),r.jsx(n,{onPress:t=>{switch(!0){case t.shiftKey:alert("Press with Shift");break;case t.altKey:alert("Press with Alt");break;case t.ctrlKey:alert("Press with Ctrl");break;case t.metaKey:alert("Press with Meta");break;default:alert("Press")}},children:"Press"})]})]})};var d,l,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(l=o.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var g,h,M;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(M=(h=i.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var C,T,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    width: 400
  },
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem onAction={() => alert("Action")}>Action</MenuItem>
        <MenuItem
      // @ts-expect-error
      onPress={(event: PressEvent) => {
        switch (true) {
          case event.shiftKey:
            alert("Press with Shift");
            break;
          case event.altKey:
            alert("Press with Alt");
            break;
          case event.ctrlKey:
            alert("Press with Ctrl");
            break;
          case event.metaKey:
            alert("Press with Meta");
            break;
          default:
            alert("Press");
        }
      }}>
          Press
        </MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const _r=["LongTexts","LongList","ModifierKeys"];export{i as LongList,o as LongTexts,s as ModifierKeys,_r as __namedExportsOrder,Er as default};
