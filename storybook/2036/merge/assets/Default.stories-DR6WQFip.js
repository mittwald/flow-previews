import{j as e,R as G}from"./iframe-lUo2nGnz.js";import{b as H,B as o}from"./Badge-CVzf7fiJ.js";import{T as s}from"./Text-BGPM5sar.js";import{L as n}from"./Label-JtAW2uUp.js";import{C as J,M as h}from"./ContextMenuSection-CdG250Rt.js";import{u as K}from"./DialogTriggerView-7b0oIJZS.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./Button-BJSwvuxb.js";import"./IconWarning-BtoswtWr.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./Button-D-InGAKb.js";import"./utils-D2KvaKmW.js";import"./ProgressBar-3LATX2wa.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./browser-BBsn6OTc.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./Text-C5QP4r7D.js";import"./Action-CDVhK15_.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./dynamic-C5kU0I4Y.js";import"./Popover-DptWEuw1.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./VisuallyHidden-A1EOSTtD.js";import"./RSPContexts-CxDqvi-e.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";const Ke={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const Qe=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,Qe as __namedExportsOrder,Ke as default};
