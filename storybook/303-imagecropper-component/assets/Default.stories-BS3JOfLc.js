import{B as t,b as G}from"./Badge-BvEQIgC9.js";import{R as e}from"./index-Cs7sjTYM.js";import{T as o}from"./Text-U6fXasfV.js";import{L as n}from"./Label-LjpPhEpK.js";import{C as H,M as S}from"./ContextMenuTrigger-CNcFveDB.js";import{u as J}from"./OverlayTrigger-Bdr7_DCO.js";import{s as K,a as Q}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./flowComponent-DojWstBP.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-DXVDIrTY.js";import"./IconApp-BvR14QOm.js";import"./IconWarning-CKNdQ7e9.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-VvQ8syNA.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./Button-BebB4Pfr.js";import"./utils-BwYH5X3X.js";import"./ProgressBar-AEPgO8_B.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-RWB8_cdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-VJrkZIcY.js";import"./useFocusRing-if03xCoO.js";import"./usePress-1fQJjpyE.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Dd84vsje.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-BG2gHMpH.js";import"./OverlayArrow-DTpAwzOr.js";import"./useControlledState-B7K2eYzO.js";import"./Action-BPHLOjQX.js";import"./context-D-nUHgHo.js";import"./useSelector-DDdDwEvg.js";import"./dynamic-DKDa4OpU.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-D9QghTcc.js";import"./CollectionBuilder-DDU0oj1o.js";import"./Header-BtBTxt0E.js";import"./Separator-B16cHhLc.js";import"./PressResponder-CCvTmYWN.js";import"./useMenuTrigger-NmqfniOV.js";import"./SelectionManager-DZzKvQeJ.js";import"./FocusScope--STy3lDT.js";import"./useEvent-DPeShqXn.js";import"./useCollator-lO_wuqqx.js";import"./getScrollParent-CcmJp979.js";import"./useDescription-BalOtq5q.js";import"./RSPContexts-BseA8goh.js";import"./VisuallyHidden-BWHYRTKp.js";const Ze={title:"Status/Badge",component:t,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.createElement(t,{...r},"Value")},a={},s={render:r=>e.createElement(t,{...r},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},l={render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},p={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")}},"Value")},c={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},m={render:r=>e.createElement(t,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value"))},i={render:r=>{const g=J("ContextMenu"),E=e.useRef(null);return e.createElement(e.Fragment,null,e.createElement(t,{ref:E,onPress:g.open,...r},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),e.createElement(H,{controller:g,triggerRef:E},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2")))}},d={args:{color:"light"},render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),parameters:{backgrounds:K}},u={args:{color:"dark"},render:r=>e.createElement(t,{...r,onPress:()=>{alert("pressed!")}},e.createElement(n,null,"Scope"),e.createElement(o,null,"Value")),parameters:{backgrounds:Q}};var x,B,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,f,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var O,W,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(R=(W=c.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var I,y,D;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(D=(y=m.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var A,v,_;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const $e=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,a as Default,d as Light,i as WithContextMenu,p as WithOnClose,l as WithOnPress,m as WithOnPressAndOnClose,s as WithScope,c as WithScopeAndOnClose,$e as __namedExportsOrder,Ze as default};
