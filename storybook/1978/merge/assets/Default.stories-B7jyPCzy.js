import{j as e,R as G}from"./iframe-Ddl3oy7j.js";import{b as H,B as o}from"./Badge-BrFLEdEq.js";import{T as s}from"./Text-QWoB1dLM.js";import{L as n}from"./Label-CPFqIdaY.js";import{C as J,M as h}from"./ContextMenuContent-QBJrce9E.js";import"./ContextMenuSection-wvBBY48w.js";import{u as K}from"./DialogTriggerView-d2hqROxE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnW5HdO8.js";import"./mergeRefs-C9z6gsFG.js";import"./index-C1skfeMg.js";import"./Button-DqaKYKf3.js";import"./IconWarning-c_EtJYHN.js";import"./LoadingSpinner-CMgBxs5g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CALAZrAH.js";import"./context-DO4TRSlT.js";import"./Button-DtXFMSeo.js";import"./utils-Ci_tygJf.js";import"./ProgressBar-DxjBV5HR.js";import"./Label-3HbXpuHu.js";import"./Hidden-ywj4FOpy.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DcZpZe32.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CocvpA_Y.js";import"./useFocus-DmoZ0prk.js";import"./useFocusRing-BmS0Hu73.js";import"./useFocusable-Czgc212e.js";import"./browser-bNZZs8J3.js";import"./EmulatedBoldText-CxwJM-M1.js";import"./Text-sFlu2MbQ.js";import"./Action-DUd3tSxu.js";import"./context-CodLc8vz.js";import"./useStatic-CuoXAQeJ.js";import"./getActionGroupSlot-Ceebw4du.js";import"./dynamic-DKDa4OpU.js";import"./Popover-VwLdfteC.js";import"./Dialog-BWiPBE7M.js";import"./RSPContexts-DkASzfG8.js";import"./OverlayArrow-BcGuja2I.js";import"./useControlledState-CmfVHeBq.js";import"./Collection-CvGKQDYH.js";import"./CollectionBuilder-B4jSBOCT.js";import"./Separator-C6XPVHs3.js";import"./Group-DIPAAm7c.js";import"./SearchField-DspYPOuY.js";import"./FieldError-DKHffRep.js";import"./Form-BuMmY0ok.js";import"./useTextField-FYLvyiMg.js";import"./useFormReset-DqrIwWOQ.js";import"./TextField-WM0IMQR5.js";import"./useEvent-DmjLh1yy.js";import"./SelectionManager-Dg6K_iw1.js";import"./useCollator-B4sklduu.js";import"./FocusScope-xkAre9m0.js";import"./VisuallyHidden-D1ge_fMG.js";import"./Switch-5xVq-eEa.js";import"./useToggleState-nCB6LYTR.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
