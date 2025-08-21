import{j as e,R as G}from"./iframe-Djw2qN4N.js";import{b as H,B as o}from"./Badge-BJh23oaV.js";import{T as s}from"./Text-N2Xlqf-I.js";import{L as n}from"./Label-DW829cz7.js";import{C as J,M as h}from"./ContextMenuContent-CGAiRdiA.js";import"./ContextMenuSection-BEABfHKC.js";import{u as K}from"./DialogTriggerView-Cii_d7-u.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTcixsmb.js";import"./mergeRefs-wyRtFOcD.js";import"./index-BTrHPcFI.js";import"./Button-DbUzlGPh.js";import"./IconWarning-CGeyKArL.js";import"./LoadingSpinner-DRHSwImm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-A4R3Jnzo.js";import"./context-SMG2uflK.js";import"./Button-Cmn8DEd4.js";import"./utils-DHksHmrI.js";import"./ProgressBar-jq0-4j1i.js";import"./Label-BqIGEZIR.js";import"./Hidden-CQXH1kLj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cdum_nIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DmhdXdf4.js";import"./useFocus-qvLuoihW.js";import"./useFocusRing-zh24oNHk.js";import"./useFocusable-C2MDV8K7.js";import"./browser-CF3hFWtX.js";import"./EmulatedBoldText-CB7N4Qe6.js";import"./Text-wW5QNV-A.js";import"./Action-U7vDxNUW.js";import"./context-D5-d9F9A.js";import"./useStatic-DLgn7tpr.js";import"./getActionGroupSlot-jleWxawA.js";import"./dynamic-DKDa4OpU.js";import"./Popover-BxXe92TW.js";import"./Dialog-S7NRO65S.js";import"./RSPContexts-BWg1RNKY.js";import"./OverlayArrow-BC79QONy.js";import"./useControlledState-3RrKoOGV.js";import"./Collection-BBr6vmvw.js";import"./CollectionBuilder-nkz2VjEe.js";import"./Separator-_-XVNxdO.js";import"./Group-CPAHFVqL.js";import"./SearchField-3KlsKxhn.js";import"./FieldError-CaVGVfZY.js";import"./Form-fQWPP7Lo.js";import"./useTextField-YfVJ_Q8A.js";import"./useFormReset-Ciz8aHP_.js";import"./TextField-CI5mY1Ro.js";import"./useEvent-Dc_urDPd.js";import"./SelectionManager-VfQb8aC7.js";import"./useCollator-IeylOfPf.js";import"./FocusScope-xrFWyxY9.js";import"./VisuallyHidden-DfkyRh3Z.js";import"./Switch-VDhugp-V.js";import"./useToggleState-BGJWHeBD.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <Badge {...props}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var L,T,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var P,M,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      Value
    </Badge>
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,R,k;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var I,D,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var y,v,E;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var _,F,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  globals: {
    backgrounds: "dark"
  }
}`,...(N=(F=m.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var q,w,z;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  globals: {
    backgrounds: "light"
  }
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const er=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,er as __namedExportsOrder,$e as default};
