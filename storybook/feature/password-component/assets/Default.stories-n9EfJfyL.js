import{B as t,b as G}from"./Badge-C28VlpId.js";import{R as e}from"./index-B-o1Wr-g.js";import{T as o}from"./Text-CzvJ5BXa.js";import{L as n}from"./Label-BVDa8VNw.js";import{C as H,M as S}from"./ContextMenuTrigger-CIz1ohr5.js";import"./ContextMenuSection-D9Xu0BHu.js";import{u as J}from"./OverlayTrigger-OLo2cOxk.js";import{s as K,a as Q}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-Cv5RgLo7.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DozFbJ2r.js";import"./IconApp-Dzb5vMVI.js";import"./IconWarning-BzyYKcnD.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BJ4QNKBa.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-CQNWHC4E.js";import"./utils-DQkeZTYT.js";import"./ProgressBar-BOrlGNM-.js";import"./Label-DFSCGvPu.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DbryJmtU.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CFSbYzT7.js";import"./Popover-BRJNibXf.js";import"./Dialog-B2ZKBZvY.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-Dus-MUVG.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-BjdLMd1e.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Action-BDJO7KLT.js";import"./context-CKnOEiAk.js";import"./useSelector-CPwgBGyM.js";import"./getActionGroupSlot-y9AUq0Sq.js";import"./dynamic-DKDa4OpU.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-DrUraGEu.js";import"./Initials-jTmMIB7N.js";import"./Switch-NFLBgZZy.js";import"./useToggleState-Cmu0RDcv.js";import"./useFormReset-DMREOE0P.js";const rr={title:"Status/Badge",component:t,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.createElement(t,{...r},"Value")},a={},s={render:r=>e.createElement(t,{...r},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},l={render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},p={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")}},"Value")},m={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},c={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},i={render:r=>{const g=J("ContextMenu"),E=e.useRef(null);return e.createElement(e.Fragment,null,e.createElement(t,{ref:E,onPress:g.open,...r},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),e.createElement(H,{controller:g,triggerRef:E},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2")))}},d={args:{color:"light"},render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),parameters:{backgrounds:K}},u={args:{color:"dark"},render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),parameters:{backgrounds:Q}};var x,B,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,f,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
