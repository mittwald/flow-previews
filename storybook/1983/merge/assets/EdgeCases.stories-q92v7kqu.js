import{j as r}from"./iframe-CTVhNlXB.js";import{b as g,C as c,M as m}from"./ContextMenuSection-BskBABq7.js";import{B as l}from"./Button-dCi6y-L9.js";import M from"./Default.stories-BdlKiFbu.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./Action-Du5VgD8q.js";import"./context-C7a-dRgh.js";import"./PropsContextProvider-BdKgywzy.js";import"./mergeRefs-HXCFtCCZ.js";import"./index-B0CJcMgs.js";import"./clsx-B-dksMZM.js";import"./useStatic-DGBPTsqJ.js";import"./browser-DlHr08AR.js";import"./getActionGroupSlot-W2GZrEk6.js";import"./dynamic-DKLrnrux.js";import"./Popover-CVq2IpQ_.js";import"./DialogTriggerView-Bcwx9J50.js";import"./Button-D-RdbR2Z.js";import"./utils-DolbARJ8.js";import"./ProgressBar-CFHcvSgt.js";import"./Label-BzU31htm.js";import"./Hidden-CCSOhlCd.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cu4D06kD.js";import"./context-OLvSZRNo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-By95yFbD.js";import"./useFocus-B_Alw_Kd.js";import"./useFocusRing-BklgwE0b.js";import"./useFocusable-DI6rxpio.js";import"./RSPContexts-dwc2BRmP.js";import"./ClearPropsContextView-mfz5hcjJ.js";import"./useControlledState-L5KsJeFF.js";import"./FocusScope-DSxBaVHz.js";import"./useCollator-CEh5JEF4.js";import"./useLocalizedStringFormatter-BRqbPR-6.js";import"./VisuallyHidden-oOW_UkZ8.js";import"./Collection-DZ2C53It.js";import"./CollectionBuilder-CiesGU-z.js";import"./Separator-BvYvyYPM.js";import"./Text-Mnh5Jpbt.js";import"./Group-BvpcRFuc.js";import"./SearchField-BNsFe36r.js";import"./FieldError-Db2L6cd5.js";import"./Form-BPrp3nIT.js";import"./useTextField-S5PdSn0a.js";import"./useFormReset-E2HVy4kF.js";import"./TextField-CCmvbP69.js";import"./useEvent-Th5L4n2g.js";import"./SelectionManager-e7sW0Ylz.js";import"./IconWarning-DczNnEus.js";import"./Switch-BpyON7pt.js";import"./Label-BH61eOAw.js";import"./useToggleState-BBZtxwEi.js";import"./Text-BLo0dekR.js";import"./EmulatedBoldText-YiQdYmo2.js";import"./LoadingSpinner-DJM9ERHN.js";import"./Separator-meYNAcja.js";import"./Heading-0AC12sSW.js";import"./Heading-BJNMdoAY.js";import"./Avatar-BP-BSMxh.js";import"./AlertIcon-Cgenn7OM.js";import"./Initials-hTV0uSgJ.js";import"./react-children-utilities-Cy_ywrKS.js";const wr={...M,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsxs(c,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsx(c,{...e,children:Array(20).fill("").map((T,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};var n,s,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
