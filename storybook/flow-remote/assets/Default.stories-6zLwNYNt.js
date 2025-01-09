import{B as t,b as G}from"./Badge-DoOs09mV.js";import{R as e}from"./index-BbMBc-iG.js";import{T as o}from"./Text-D6naXSDy.js";import{L as n}from"./Label-D6uleru1.js";import{C as H,M as S}from"./ContextMenuTrigger-DFU0zoLP.js";import"./ContextMenuSection-DFUgacLZ.js";import{u as J}from"./OverlayTrigger-CO8vF-4q.js";import{s as K,a as Q}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./index-CPTjWdH1.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-1rw05oyV.js";import"./IconApp-B_zPpa1A.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-y4xqeSCe.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./Button-8ZRRpxMH.js";import"./utils-D4Vol65q.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Text-oWh285ma.js";import"./Popover-DvsbnfGF.js";import"./Dialog-BQ_biHhV.js";import"./RSPContexts-CBHfX6hb.js";import"./OverlayArrow-CrZGdHWF.js";import"./useControlledState-CMnoB41k.js";import"./Collection-BUbbDiz9.js";import"./CollectionBuilder-DOwRmyqO.js";import"./Separator-CpmRlxds.js";import"./SelectionManager-DnQnei6w.js";import"./FocusScope-TaiHum7E.js";import"./useEvent-D1lr70i2.js";import"./useCollator-CzQekWjs.js";import"./VisuallyHidden-CAwLSgYE.js";import"./Action-CReouxgX.js";import"./context-PpKQHRcf.js";import"./useSelector-CI2pTLXu.js";import"./getActionGroupSlot-CHxkKRmy.js";import"./dynamic-DKDa4OpU.js";import"./deepHas-C0IqBpIg.js";import"./Avatar-T7Wd9gSX.js";import"./Initials-wFfzWFw7.js";import"./Switch-C8osrdRd.js";import"./useToggleState-DBTCyXsQ.js";import"./useFormReset-BIr5_auz.js";const rr={title:"Status/Badge",component:t,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.createElement(t,{...r},"Value")},a={},s={render:r=>e.createElement(t,{...r},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},l={render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},p={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")}},"Value")},m={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},c={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},i={render:r=>{const g=J("ContextMenu"),E=e.useRef(null);return e.createElement(e.Fragment,null,e.createElement(t,{ref:E,onPress:g.open,...r},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),e.createElement(H,{controller:g,triggerRef:E},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2")))}},d={args:{color:"light"},render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),parameters:{backgrounds:K}},u={args:{color:"dark"},render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),parameters:{backgrounds:Q}};var x,B,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,f,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Badge {...props}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(L=(f=s.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var h,T,V;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var k,P,M;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      Value
    </Badge>
}`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var O,W,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(R=(W=m.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var I,y,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var A,v,_;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("ContextMenu");
    const triggerRef = React.useRef(null);
    return <>
        <Badge ref={triggerRef} onPress={controller.open} {...props}>
          <Label>Scope</Label>
          <Text>Value</Text>
        </Badge>
        <ContextMenu controller={controller} triggerRef={triggerRef}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </ContextMenu>
      </>;
  }
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var F,N,j;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,w,z;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const tr=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,a as Default,d as Light,i as WithContextMenu,p as WithOnClose,l as WithOnPress,c as WithOnPressAndOnClose,s as WithScope,m as WithScopeAndOnClose,tr as __namedExportsOrder,rr as default};
