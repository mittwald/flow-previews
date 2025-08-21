import{j as e,R as G}from"./iframe-sBvqvo7_.js";import{b as H,B as o}from"./Badge-CD4E9YeJ.js";import{T as s}from"./Text-C6wVel0M.js";import{L as n}from"./Label-DV1oDC-Q.js";import{C as J,M as h}from"./ContextMenuContent-De87WFZs.js";import"./ContextMenuSection-DTqupSqy.js";import{u as K}from"./DialogTriggerView-EBaL5yq6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-TllVeCFj.js";import"./mergeRefs-5pXsIHJc.js";import"./index-7PGhSu6n.js";import"./Button-J4OQPVw4.js";import"./IconWarning-BMngykPL.js";import"./LoadingSpinner-DAp3c-UZ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-ClADd5Z4.js";import"./context-C3R-osbZ.js";import"./Button-C8-y5amo.js";import"./utils-B2LriU5l.js";import"./ProgressBar-BAnWuAWU.js";import"./Label-CX5Sx3US.js";import"./Hidden-DkwdQ2ow.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xAWuGzS8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-seZ0T8mb.js";import"./useFocus-CVs-BOzj.js";import"./useFocusRing-B1VapAs-.js";import"./useFocusable-DA4OWrdg.js";import"./browser-DLpa1UK_.js";import"./EmulatedBoldText-MyVSeX0t.js";import"./Text-CAc83Hwb.js";import"./Action-DhYbBupW.js";import"./context-DwGzY_iF.js";import"./useStatic-Mefs6JzB.js";import"./getActionGroupSlot-ZeckI-n0.js";import"./dynamic-DKDa4OpU.js";import"./Popover-Bl_o42lY.js";import"./Dialog-BQE4o9PA.js";import"./RSPContexts-E7RieiUt.js";import"./OverlayArrow-CI59sRmD.js";import"./useControlledState-B_tC48lN.js";import"./Collection-Cp6lnTRm.js";import"./CollectionBuilder-D_PhybFO.js";import"./Separator-CaNgrCXh.js";import"./Group-DK1ZbmQa.js";import"./SearchField-B2Einoci.js";import"./FieldError-D_EBRzZI.js";import"./Form-DRweiQ4m.js";import"./useTextField-D2S0T5Ek.js";import"./useFormReset-CzZ7gXc_.js";import"./TextField-Dg3JsHEK.js";import"./useEvent-vEElTzYQ.js";import"./SelectionManager-D2TfpwIm.js";import"./useCollator-B6u88yWd.js";import"./FocusScope-Emgqt3PD.js";import"./VisuallyHidden-DUx1qTAb.js";import"./Switch-C_AUKnUD.js";import"./useToggleState-CFd5fbNo.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
