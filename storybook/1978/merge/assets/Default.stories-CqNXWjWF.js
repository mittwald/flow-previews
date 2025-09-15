import{j as e,R as G}from"./iframe-FeXPLmWJ.js";import{b as H,B as o}from"./Badge-tDNsOnp_.js";import{T as s}from"./Text-Bk-26kZZ.js";import{L as n}from"./Label-DeaIyOHa.js";import{C as J,M as h}from"./ContextMenuContent-BKYL2U5B.js";import"./ContextMenuSection-IpD277NB.js";import{u as K}from"./DialogTriggerView-3szeiVhS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOQJhc0c.js";import"./mergeRefs-DBXayCo7.js";import"./index-Dw1iNfwN.js";import"./Button-DtLhlb3k.js";import"./IconWarning-Bft-d4EJ.js";import"./LoadingSpinner-C0aHJiGC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-SRxq75M0.js";import"./context-CdDLZW_F.js";import"./Button-DC1Hivs6.js";import"./utils-CXtn_DQA.js";import"./ProgressBar-Dp_oIg1b.js";import"./Label-DaJTJCE8.js";import"./Hidden-5GhHzgiK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DVVoN6WB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CiJ5VmDC.js";import"./useFocus-utUwSX9z.js";import"./useFocusRing-CtO3s9Jp.js";import"./useFocusable-DUk2eF1B.js";import"./browser-oak4xKwc.js";import"./EmulatedBoldText-Dl2sTmnq.js";import"./Text-D-W6Oypd.js";import"./Action-BZKWIbfP.js";import"./context-BnjGRpmB.js";import"./useStatic-LuaoAJ0q.js";import"./getActionGroupSlot-BYx46ZMw.js";import"./dynamic-DKDa4OpU.js";import"./Popover-DoIFupUP.js";import"./Dialog-D0hlM8gs.js";import"./RSPContexts-l4hadVnr.js";import"./OverlayArrow-QfoTus34.js";import"./useControlledState-Bg7JB_7p.js";import"./Collection-BSFTurc1.js";import"./CollectionBuilder-DjcZXz9H.js";import"./Separator-qHYMipPY.js";import"./Group-BYKu_D4V.js";import"./SearchField-CExAiUx6.js";import"./FieldError-C1vR0UXv.js";import"./Form-1I64UDUq.js";import"./useTextField-DIQk2fEk.js";import"./useFormReset-Dq2F4z6p.js";import"./TextField-EiqUYwfM.js";import"./useEvent-VX8xqKP_.js";import"./SelectionManager-DgeS2fE0.js";import"./useCollator-DCfokZLU.js";import"./FocusScope-D_yyKfql.js";import"./VisuallyHidden-BFgml7Em.js";import"./Switch-BG9O6sOJ.js";import"./useToggleState-TsUQTu5h.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
