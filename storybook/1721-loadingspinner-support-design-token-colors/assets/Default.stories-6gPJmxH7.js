import{j as e,R as G}from"./iframe-Bd70UBfQ.js";import{b as H,B as o}from"./Badge-_o_Ker_p.js";import{T as s}from"./Text-DDmCr0c3.js";import{L as n}from"./Label-2hW8G0Q4.js";import{C as J,M as h}from"./ContextMenuContent-BPDkXJyw.js";import"./ContextMenuSection-BvZOhdeK.js";import{u as K}from"./DialogTriggerView-DIXKjk2D.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-i-IYwZFk.js";import"./mergeRefs-BlmmrTdi.js";import"./index-BXdiMNYx.js";import"./Button-ABWfnhuf.js";import"./IconWarning-Dx4sU-j9.js";import"./LoadingSpinner-C9Uerl8R.js";import"./useLocalizedStringFormatter-CvG_jx-f.js";import"./context-C3LNBa76.js";import"./Button-BTLR1vS2.js";import"./utils-BmyyYDYY.js";import"./ProgressBar-CU3IfAKj.js";import"./Label-g6yaf0Tw.js";import"./Hidden-CvIRFHlC.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-w4mzRly1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Z-qLfgnH.js";import"./useFocus-_CMpkysi.js";import"./useFocusRing-DTBcK8mU.js";import"./useFocusable-rNBIEL3L.js";import"./browser-CDzL9dyN.js";import"./EmulatedBoldText-CROyqepx.js";import"./Text-DnJtq-Ca.js";import"./Action-D2Y-ED2g.js";import"./context-CCwAOuxY.js";import"./useStatic-LzaGYsCx.js";import"./getActionGroupSlot-DRV4djV0.js";import"./dynamic-DKDa4OpU.js";import"./Popover-ChoCuIY1.js";import"./Dialog-CX-LU2mB.js";import"./RSPContexts-ByMUw4AZ.js";import"./OverlayArrow-Cw8nIh42.js";import"./useControlledState-ChZkaxon.js";import"./Collection-S5kPVUME.js";import"./CollectionBuilder-DkUHX8v0.js";import"./Separator-DmvFwBU3.js";import"./Input-UumKyZ__.js";import"./SearchField-DmyF7w_w.js";import"./FieldError-BoxMIPJS.js";import"./Form-hLedV1Ku.js";import"./Group-DfP_y73Q.js";import"./useTextField-CAXEM3Cr.js";import"./useFormReset-D2aXstqB.js";import"./TextField-CLBMJ7hZ.js";import"./SelectionManager-CaueLSz8.js";import"./useEvent-EcQqHcfQ.js";import"./useCollator-DzDuPy2D.js";import"./FocusScope-Bx1kvcbQ.js";import"./VisuallyHidden-CEaQSbTN.js";import"./Switch-BSpsNTtb.js";import"./useToggleState-B8_P_tNL.js";const er={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const rr=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,rr as __namedExportsOrder,er as default};
