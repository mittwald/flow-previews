import{j as e,R as G}from"./iframe-DxsUlawc.js";import{b as H,B as o}from"./Badge-C-3nPkl1.js";import{T as s}from"./Text-BghZAovJ.js";import{L as n}from"./Label-B7Tx4Pgn.js";import{C as J,M as h}from"./ContextMenuContent-B-uDmENd.js";import"./ContextMenuSection-G4FkDWGU.js";import{u as K}from"./DialogTriggerView-BqpM7c71.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xQDv9zm6.js";import"./mergeRefs-CIUzaBPj.js";import"./index-CXZ1ulCu.js";import"./Button-IG1UbGgX.js";import"./IconWarning-CxX_lufW.js";import"./LoadingSpinner-B_W_hnSA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B7ecu7MW.js";import"./context-Pme8S34O.js";import"./Button-D6Z7YYpb.js";import"./utils-anS-nfaS.js";import"./ProgressBar-litaDe0V.js";import"./Label-DR2p3ljL.js";import"./Hidden-DmCEYrWx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CBxP0DvO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuZIkaGu.js";import"./useFocus-19elgRbR.js";import"./useFocusRing-NqyRw62N.js";import"./useFocusable-Dsjl8uYb.js";import"./browser-GG2yXHGk.js";import"./EmulatedBoldText-HMke4BSZ.js";import"./Text-w8QkFxXB.js";import"./Action-Bm6Z0jHH.js";import"./context-D1Ianu5s.js";import"./useStatic-DTmVdxCi.js";import"./getActionGroupSlot-DSGD8tPp.js";import"./dynamic-DKDa4OpU.js";import"./Popover-BzQAY9NU.js";import"./Dialog-BhiDy3Uj.js";import"./RSPContexts-D24GGWc4.js";import"./OverlayArrow-Cqrl2gO5.js";import"./useControlledState-BiaHUtte.js";import"./Collection-2mgYJ3lC.js";import"./CollectionBuilder-DUz18fnw.js";import"./Separator-MdtjVr6X.js";import"./Group-BM4Odlhy.js";import"./SearchField-CP40iq6L.js";import"./FieldError-BogjW8MC.js";import"./Form-DGyQGQrN.js";import"./useTextField-C34ms4nI.js";import"./useFormReset-C5585XYI.js";import"./TextField-BV-7_CBI.js";import"./useEvent-CBeKZXam.js";import"./SelectionManager-zRsSiPpC.js";import"./useCollator-DS1CRBkN.js";import"./FocusScope-_FVys5dN.js";import"./VisuallyHidden-DjzEMrNo.js";import"./Switch-BDovvq2k.js";import"./useToggleState-D8_HqcG5.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
