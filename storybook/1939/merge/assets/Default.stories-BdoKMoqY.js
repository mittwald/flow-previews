import{j as e,R as G}from"./iframe-BmZalVao.js";import{b as H,B as o}from"./Badge-DZsMCTDx.js";import{T as s}from"./Text-1n2lmTX2.js";import{L as n}from"./Label-Cd70f9RY.js";import{C as J,M as h}from"./ContextMenuContent-DCR3LsXc.js";import"./ContextMenuSection-a2v3yfqf.js";import{u as K}from"./DialogTriggerView-DWEqOoqf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OSTZh0lU.js";import"./mergeRefs-CtwPOjS1.js";import"./index-srGqJPqU.js";import"./Button-V4gWXU1O.js";import"./IconWarning-Uta2YDJP.js";import"./LoadingSpinner-D3X9xJLw.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D1wGXel8.js";import"./context-CHBdcuz4.js";import"./Button-B7Mfw9fE.js";import"./utils-CAvZ88A2.js";import"./ProgressBar-B81Zb8lf.js";import"./Label-BMWYWyxm.js";import"./Hidden-CVk6dJGe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dcdc4QL3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ceZxyZeS.js";import"./useFocus-CJp-zb5k.js";import"./useFocusRing-DYr6CdEu.js";import"./useFocusable-RaDIdBmD.js";import"./browser-DJMeickF.js";import"./EmulatedBoldText-BKXMjbmY.js";import"./Text-fNTtgWDx.js";import"./Action-Bg05qC2u.js";import"./context-Dnd0SHjI.js";import"./useStatic-CmyP-4Qc.js";import"./getActionGroupSlot-Bu_U71dX.js";import"./dynamic-DKDa4OpU.js";import"./Popover-OJamc9qf.js";import"./Dialog-Ck302eWi.js";import"./RSPContexts-CXUSdcNb.js";import"./OverlayArrow-W1WVUYgG.js";import"./useControlledState-DkevdXcu.js";import"./Collection-CssVnDWl.js";import"./CollectionBuilder-1RXdNJ75.js";import"./Separator-CxpVYPZi.js";import"./Group-DxIJd-p3.js";import"./SearchField-DC-QuQzo.js";import"./FieldError-Bd-ukmcE.js";import"./Form-B9rSyzAs.js";import"./useTextField-CryG3TpM.js";import"./useFormReset-BvOmhq3S.js";import"./TextField-BS0IdMWE.js";import"./useEvent-C050BYP-.js";import"./SelectionManager-B-lKeVzN.js";import"./useCollator-B5Q-zmAD.js";import"./FocusScope-H3r5uJpM.js";import"./VisuallyHidden-CzhjBb86.js";import"./Switch-BHu3o3ds.js";import"./useToggleState-BkqNr0zb.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
