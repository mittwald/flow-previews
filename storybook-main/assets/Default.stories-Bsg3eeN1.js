import{j as e,R as G}from"./iframe-Bcy3WBLD.js";import{b as H,B as o}from"./Badge-I0ptFO-a.js";import{T as s}from"./Text-BKZvU2Ep.js";import{L as n}from"./Label-BjUMecpn.js";import{C as J,M as h}from"./ContextMenuContent-BqYjjRqz.js";import"./ContextMenuSection-52REy7iR.js";import{u as K}from"./DialogTriggerView-txSV1TrO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHhLw24a.js";import"./mergeRefs--VvJilNx.js";import"./index-DVYl39IU.js";import"./Button-D1gTYi2b.js";import"./IconWarning-Vd06CvkA.js";import"./LoadingSpinner-CH6ajn32.js";import"./useLocalizedStringFormatter-DL2ol0cr.js";import"./context-COJrQ54s.js";import"./Button-j-dhdB0v.js";import"./utils-DWRY5rRS.js";import"./ProgressBar-DOzZ26z9.js";import"./Label-mUSxsxBX.js";import"./Hidden-Dv6inJmm.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DJG08svr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CA9PIUpq.js";import"./useFocus-Dgw0vV32.js";import"./useFocusRing-C3pUQ5cb.js";import"./useFocusable-C_MY2EQ_.js";import"./browser-CGdqZmLM.js";import"./EmulatedBoldText-LLb9cW4a.js";import"./Text-B9FmTM8Z.js";import"./Action-CzlrQ86v.js";import"./context-BOV0Rbpo.js";import"./useStatic-D4VOD2iQ.js";import"./getActionGroupSlot-C7hTmbc4.js";import"./dynamic-DKDa4OpU.js";import"./Popover-BBFOwcYX.js";import"./Dialog-D3iEa7Qs.js";import"./RSPContexts-Bts87vXR.js";import"./OverlayArrow-C5shyw1z.js";import"./useControlledState-gINmRHbE.js";import"./Collection-CRHqEzPy.js";import"./CollectionBuilder-BpdNBb0a.js";import"./Separator-BMBwVh1p.js";import"./Group-CKjDXA5J.js";import"./SearchField-uTJdbFFf.js";import"./FieldError-l-G1_SjF.js";import"./Form-PJgehRtv.js";import"./useTextField-KFIXFoXA.js";import"./useFormReset-COOu3OXz.js";import"./TextField-OZ5xDcTU.js";import"./useEvent-Bt8sVsIM.js";import"./SelectionManager-VjBSS0Z5.js";import"./useCollator-sTarHb1o.js";import"./FocusScope-DTvTpHKs.js";import"./VisuallyHidden-B7epvPUM.js";import"./Switch-COrh9FJY.js";import"./useToggleState-x8eAMuaS.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
