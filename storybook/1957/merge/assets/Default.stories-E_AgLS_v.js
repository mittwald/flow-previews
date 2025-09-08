import{j as e,R as G}from"./iframe-CVONDZxG.js";import{b as H,B as o}from"./Badge-BacJ__v5.js";import{T as s}from"./Text-gWNENs-O.js";import{L as n}from"./Label-BrXx0WEV.js";import{C as J,M as h}from"./ContextMenuContent-Fk4AeYHA.js";import"./ContextMenuSection-DgG1drws.js";import{u as K}from"./DialogTriggerView-CZoxH0uq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHJ1i56Q.js";import"./mergeRefs-TXfZ5z39.js";import"./index-C4vkAaOo.js";import"./Button-CPWkxiPl.js";import"./IconWarning-CjssIWkt.js";import"./LoadingSpinner-DIlTVHYE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CII2PiuM.js";import"./context-Bs2g7JPB.js";import"./Button-38xdtiYe.js";import"./utils-BSjfMHTl.js";import"./ProgressBar-DrI-uHFO.js";import"./Label-DJefMWg6.js";import"./Hidden-BwiNP3dS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jVeBX_ap.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-zhVroEZ0.js";import"./useFocus-D78mW_re.js";import"./useFocusRing-B7s00iLq.js";import"./useFocusable-DkfZWGFH.js";import"./browser-BiAec6cY.js";import"./EmulatedBoldText-CnL_Am8U.js";import"./Text-Doa1PxMD.js";import"./Action-CutvWoZ3.js";import"./context-DdZgH6qQ.js";import"./useStatic-Duh0tpLB.js";import"./getActionGroupSlot-WI0cGZqP.js";import"./dynamic-DKDa4OpU.js";import"./Popover-DE9TnM81.js";import"./Dialog-BUUqsfzD.js";import"./RSPContexts-DNP2NapF.js";import"./OverlayArrow-DGSmKKnj.js";import"./useControlledState-KXE4Dwqt.js";import"./Collection-CaTnxI7B.js";import"./CollectionBuilder-CePrgAQb.js";import"./Separator-CO7E1Mbo.js";import"./Group-BUf8QsAy.js";import"./SearchField-DsKki_7U.js";import"./FieldError-D3nW9ApF.js";import"./Form-BgCAIeRI.js";import"./useTextField-6Xm8NcSF.js";import"./useFormReset-D4oFtU7p.js";import"./TextField-Bq5WehIb.js";import"./useEvent-CIDboHYb.js";import"./SelectionManager-DQbblkna.js";import"./useCollator-DDJs2P-f.js";import"./FocusScope-LX2k-wEc.js";import"./VisuallyHidden-C8_ZT0Uw.js";import"./Switch-ByOFMYCy.js";import"./useToggleState-C0hwUibT.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
