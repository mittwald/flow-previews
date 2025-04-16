import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as G,B as o}from"./Badge-D6LbLFeP.js";import{R as H}from"./index-CXcpQZ5J.js";import{T as s}from"./Text-ilWQSh2o.js";import{L as n}from"./Label-Ccht5eDB.js";import{C as J,M as h}from"./ContextMenuContent-DsIk-YLD.js";import"./ContextMenuSection-CuRIPxil.js";import{u as K}from"./OverlayTrigger-CxHIuRua.js";import{s as Q,a as U}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./Button-DwgkhfFv.js";import"./IconWarning-B9HL9CFH.js";import"./LoadingSpinner-GJE4fldi.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./Button-CAwd2L_u.js";import"./utils-Df1au6pS.js";import"./ProgressBar-DfZ38-9l.js";import"./Label-DfZa7xTI.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrVJGper.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-v55RTCzR.js";import"./useFocus-Beyq6_MT.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocusable-C5BPrGjf.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Text-WoclspSc.js";import"./Action-BfuzMKoN.js";import"./context-BJd9A0SI.js";import"./useStatic-CZNshcmv.js";import"./getActionGroupSlot-UfL_FZTW.js";import"./dynamic-DKDa4OpU.js";import"./Popover-CT76g4R7.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-6LSgdenh.js";import"./Dialog-DGCaVP1m.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-Cyo91zw-.js";import"./Collection-gb5i7bex.js";import"./CollectionBuilder-DJ8GEp2F.js";import"./Separator-rUEtuaIL.js";import"./useOverlayTriggerState-Bcoz_tbR.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DrFVCucR.js";import"./useEvent-D5X-zOrV.js";import"./useCollator-gRp1mHBo.js";import"./FocusScope-DN1fuaqe.js";import"./VisuallyHidden-D7VTLdOh.js";import"./Switch-DfO96G7U.js";import"./useToggleState-Bew6BMnT.js";import"./useFormReset-McAVcQ-S.js";const rr={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},l={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=H.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:Q}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:U}};var j,S,B;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var C,b,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <Badge {...props}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var L,T,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var k,P,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      Value
    </Badge>
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var O,W,R;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(R=(W=l.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var I,y,D;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var A,v,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  parameters: {
    backgrounds: storyBackgroundDark
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
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const or=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,c as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,l as WithScopeAndOnClose,or as __namedExportsOrder,rr as default};
