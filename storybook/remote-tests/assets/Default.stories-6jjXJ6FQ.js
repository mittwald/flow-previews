import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as G,B as o}from"./Badge-BjuVzA6X.js";import{R as H}from"./index-BKyFwriW.js";import{T as s}from"./Text-BoP-iRG5.js";import{L as n}from"./Label-Ci6hAk30.js";import{C as J,M as h}from"./ContextMenuContent-BR1O7Y6I.js";import"./ContextMenuSection-CPhM0sZK.js";import{u as K}from"./OverlayTrigger-wtZR0Cj_.js";import{s as Q,a as U}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./Button-y_xQsClG.js";import"./IconApp-DtTJ2r0A.js";import"./IconWarning-BwSZGWRf.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DbRP1bJP.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./Button-DL5r24IA.js";import"./utils-DDUQIigj.js";import"./ProgressBar-C4A5wsjg.js";import"./Label-i7acEou4.js";import"./Hidden-6cPdUftz.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DAPKuvGY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CK926LJU.js";import"./useFocus-DNP1_3BC.js";import"./useFocusRing-BfJpuzZz.js";import"./useFocusable-DFPniEHk.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-By-RYQJw.js";import"./Text-yNWxiVQR.js";import"./Action-i0thx0q2.js";import"./context-DBHSqzRK.js";import"./useStatic--5L2q-n6.js";import"./getActionGroupSlot-DrfnkDvY.js";import"./dynamic-DKDa4OpU.js";import"./Popover-DCVTWAuz.js";import"./DialogTriggerView-BBAvKYPc.js";import"./Dialog-6iLCfCA_.js";import"./RSPContexts-BTRAHvSh.js";import"./OverlayArrow-BL-OvAHI.js";import"./useControlledState-Cu5tmcxR.js";import"./Collection-CQq09VNS.js";import"./CollectionBuilder-R_fDQQgL.js";import"./Separator-BUgKPSk1.js";import"./SelectionManager-B8z5pZap.js";import"./useEvent-C5s-DRkH.js";import"./useCollator-BnjbLxAL.js";import"./FocusScope-DxW0A0A2.js";import"./VisuallyHidden-Dk-02uN1.js";import"./Switch-k93aCWHK.js";import"./useToggleState-C0lsVYkc.js";import"./useFormReset-Cvvd9M-x.js";const rr={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},l={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=H.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:Q}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:U}};var j,S,B;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var C,b,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
