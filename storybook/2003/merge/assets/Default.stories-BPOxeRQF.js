import{j as e,R as G}from"./iframe-nPsKv9M3.js";import{b as H,B as o}from"./Badge-LG09lTe2.js";import{T as s}from"./Text-XZwmfgbx.js";import{L as n}from"./Label-C7MkaMDD.js";import{C as J,M as h}from"./ContextMenuSection-BLlKS18x.js";import{u as K}from"./DialogTriggerView-Cm1t_yF_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BR7735qm.js";import"./mergeRefs-DGqX8NnL.js";import"./index-BHi6sGsK.js";import"./Button-Cwt3YooV.js";import"./IconWarning-D7ef3xYO.js";import"./LoadingSpinner-C1ZMRQIb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DSEYfllN.js";import"./context-mwZCjolN.js";import"./Button-_y3k4Es0.js";import"./utils-8bL4GcU7.js";import"./ProgressBar-Bh2LZauY.js";import"./Label-BrXjgpUy.js";import"./Hidden-BiSDldQr.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-VKnQkuTS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CD1xEu4S.js";import"./useFocus-D6fxwPDF.js";import"./useFocusRing-caiKUn6t.js";import"./useFocusable-QTkHwuSk.js";import"./browser-BzcSKw7f.js";import"./EmulatedBoldText-B79vZW6N.js";import"./Text-BIdL4sNQ.js";import"./Action-aMmcK7s7.js";import"./context-CC3ykTmh.js";import"./useStatic-CwmIPWCn.js";import"./getActionGroupSlot-D41EShs_.js";import"./dynamic-wM-X8Xms.js";import"./Popover-DBvyH1F8.js";import"./ClearPropsContextView-R1wYtvDX.js";import"./useControlledState-CsXjitNs.js";import"./Switch-hwfAc8Jc.js";import"./useToggleState-B70h6BiI.js";import"./useFormReset-JMfDIv5v.js";import"./VisuallyHidden-DzuuU_mQ.js";import"./RSPContexts-4Iqr_AQa.js";import"./FocusScope-Bk-s4YOY.js";import"./useCollator-Dm05pnhO.js";import"./Collection-BH5fUWZT.js";import"./CollectionBuilder-BsO6Q-Ae.js";import"./Separator-Cl85CK-5.js";import"./Group-N7Se0mQR.js";import"./SearchField-DpvPGqnX.js";import"./FieldError-BeWVHHOP.js";import"./Form-C8Y-x06x.js";import"./useTextField-5p-5mVZt.js";import"./TextField-Bthj1NJK.js";import"./useEvent-Lgym_IyA.js";import"./SelectionManager-_SjxoMvT.js";const Ye={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const Ze=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,Ze as __namedExportsOrder,Ye as default};
