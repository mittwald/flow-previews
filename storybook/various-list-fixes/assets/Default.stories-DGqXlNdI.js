import{B as t,b as G}from"./Badge-fK_jZlJJ.js";import{R as e}from"./index-B-o1Wr-g.js";import{T as o}from"./Text-DPEzzey4.js";import{L as n}from"./Label-BFoBZBqy.js";import{C as H,M as S}from"./ContextMenuTrigger-Dxztq65C.js";import"./ContextMenuSection-Vfk79hmG.js";import{u as J}from"./OverlayTrigger-DBMCsseW.js";import{s as K,a as Q}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-TH90Unv1.js";import"./IconApp--rto3B0B.js";import"./IconWarning-C7RtCnUV.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-D3THsmJZ.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-DpaYcQnV.js";import"./utils-CCebJm36.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CByKVUtS.js";import"./Popover-DAQfSrhS.js";import"./Dialog-EQBJGkcZ.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-D4kl22nw.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Action-nwH1LYxm.js";import"./context-HWij4CCA.js";import"./useSelector-iQqgW7gO.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./dynamic-DKDa4OpU.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-D_KFb-03.js";import"./Initials-DV3qKvQK.js";import"./Switch-js7LGmEx.js";import"./useToggleState-93Gd9adu.js";import"./useFormReset-DMREOE0P.js";const rr={title:"Status/Badge",component:t,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.createElement(t,{...r},"Value")},a={},s={render:r=>e.createElement(t,{...r},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},l={render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},p={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")}},"Value")},m={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},c={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},i={render:r=>{const g=J("ContextMenu"),E=e.useRef(null);return e.createElement(e.Fragment,null,e.createElement(t,{ref:E,onPress:g.open,...r},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),e.createElement(H,{controller:g,triggerRef:E},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2")))}},d={args:{color:"light"},render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),parameters:{backgrounds:K}},u={args:{color:"dark"},render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),parameters:{backgrounds:Q}};var x,B,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,f,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
