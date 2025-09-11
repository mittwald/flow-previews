import{j as e,R as G}from"./iframe-CCJYfocm.js";import{b as H,B as o}from"./Badge-Cig0PMzW.js";import{T as s}from"./Text-oKQCGqUf.js";import{L as n}from"./Label-BdPqFAfu.js";import{C as J,M as h}from"./ContextMenuContent-Ci-ST1xm.js";import"./ContextMenuSection-BViJGCyS.js";import{u as K}from"./DialogTriggerView--CAPxN8Q.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2Y3k6X1.js";import"./mergeRefs-A29wE7X8.js";import"./index-zIu0Aebb.js";import"./Button-hb7RSFxN.js";import"./IconWarning-zKFwDxee.js";import"./LoadingSpinner-Cz7ScZS_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-MhDzL5qd.js";import"./context-CpznRjhe.js";import"./Button-Dp1voZV2.js";import"./utils-OhB6egAd.js";import"./ProgressBar-Bltfi6Tm.js";import"./Label-yb6vzwnx.js";import"./Hidden-D09nfSIf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DWLXZ_5I.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D-nD__UC.js";import"./useFocus-ByyEn-Pe.js";import"./useFocusRing-D9TEPTC8.js";import"./useFocusable-C8TAEKG6.js";import"./browser-B7o8lEj9.js";import"./EmulatedBoldText-CzNN3IMB.js";import"./Text-COyZC_d0.js";import"./Action-1vXJU-5u.js";import"./context-BPkPSR0u.js";import"./useStatic-Bygmx728.js";import"./getActionGroupSlot-AK7rMFD6.js";import"./dynamic-DKDa4OpU.js";import"./Popover-DX1tLi1k.js";import"./Dialog-1LpWSZns.js";import"./RSPContexts-DtIV_XWn.js";import"./OverlayArrow-BKYRJuLy.js";import"./useControlledState-CXb2Atq5.js";import"./Collection-BUL5CBgy.js";import"./CollectionBuilder-BSXaKqWH.js";import"./Separator-Cu0Xy5nC.js";import"./Group-D22NaB6f.js";import"./SearchField-DFDOPoEe.js";import"./FieldError-BNB-0_Es.js";import"./Form-OfbaOX07.js";import"./useTextField-wND_NR3Q.js";import"./useFormReset-CzFRjtap.js";import"./TextField-Cq8rv60r.js";import"./useEvent-Dxdl7lNs.js";import"./SelectionManager-BWi45uf1.js";import"./useCollator-BUSEmk8n.js";import"./FocusScope-D-ZTlcmj.js";import"./VisuallyHidden-DyP1I_X7.js";import"./Switch-BnSiopmv.js";import"./useToggleState-s0ZRQL3d.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
