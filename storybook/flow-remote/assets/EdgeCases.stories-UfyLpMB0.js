import{R as t}from"./index-BbMBc-iG.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-DFU0zoLP.js";import"./ContextMenuSection-DFUgacLZ.js";import{B as x}from"./Button-1rw05oyV.js";import M from"./Default.stories-DHzvcnG0.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./index-CPTjWdH1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./Popover-DvsbnfGF.js";import"./OverlayTrigger-CO8vF-4q.js";import"./context-PpKQHRcf.js";import"./useSelector-CI2pTLXu.js";import"./Dialog-BQ_biHhV.js";import"./Button-8ZRRpxMH.js";import"./utils-D4Vol65q.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";import"./RSPContexts-CBHfX6hb.js";import"./OverlayArrow-CrZGdHWF.js";import"./useControlledState-CMnoB41k.js";import"./Collection-BUbbDiz9.js";import"./CollectionBuilder-DOwRmyqO.js";import"./Separator-CpmRlxds.js";import"./Text-oWh285ma.js";import"./SelectionManager-DnQnei6w.js";import"./FocusScope-TaiHum7E.js";import"./useEvent-D1lr70i2.js";import"./useCollator-CzQekWjs.js";import"./VisuallyHidden-CAwLSgYE.js";import"./Action-CReouxgX.js";import"./browser-DXl7VCm2.js";import"./getActionGroupSlot-CHxkKRmy.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-B_zPpa1A.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./Text-D6naXSDy.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Wrap-DQq6jo70.js";import"./deepHas-C0IqBpIg.js";import"./Avatar-T7Wd9gSX.js";import"./Initials-wFfzWFw7.js";import"./Switch-C8osrdRd.js";import"./Label-D6uleru1.js";import"./useToggleState-DBTCyXsQ.js";import"./useFormReset-BIr5_auz.js";import"./LoadingSpinner-y4xqeSCe.js";import"./Separator-BPl4-egz.js";import"./Heading-CHAikoJ1.js";import"./Heading-B6bd_0m7.js";const kt={...M,title:"Actions/ContextMenu/Edge Cases"},r={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},e={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const vt=["LongTexts","LongList"];export{e as LongList,r as LongTexts,vt as __namedExportsOrder,kt as default};
