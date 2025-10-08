import{j as e,R as G}from"./iframe-F0_qnNmG.js";import{b as H,B as o}from"./Badge-BqIklIo4.js";import{T as s}from"./Text-DO7iLNcc.js";import{L as n}from"./Label-BW-f-a9z.js";import{C as J,M as h}from"./MenuItem-BD6F2_j6.js";import"./ContextMenuTrigger-ButKPnxj.js";import"./ContextMenuSection-CVTYXQHy.js";import{u as K}from"./useOverlayController-vUnIin05.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./index-Bz7U0goG.js";import"./Button-6GY0aJmr.js";import"./IconWarning-uipPPHio.js";import"./LoadingSpinner-Ct4VP7lS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./context-BBFKgyN5.js";import"./Button-vo1xOT6L.js";import"./utils-sDrdBfYO.js";import"./ProgressBar-BhbNzFL_.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0DSh--k.js";import"./useFocus-DXNQJCU_.js";import"./useFocusRing-DNaFw-NR.js";import"./useFocusable-ueFnB-zi.js";import"./browser-Cnb-FwPQ.js";import"./EmulatedBoldText-nQ9KrBk1.js";import"./Text-aPdZ_B4g.js";import"./Action-rcgaEMhe.js";import"./context-BzKhkjPO.js";import"./useStatic-B-ONLx4H.js";import"./getActionGroupSlot-C4q-hMJK.js";import"./dynamic-Bv8wQ4eA.js";import"./Popover-BDIZl1Ib.js";import"./OverlayContextProvider-CAsE20_c.js";import"./Dialog-DaSdBBae.js";import"./RSPContexts-B8tkrJ5_.js";import"./OverlayArrow-DJ_OxNNs.js";import"./useControlledState-DnVXKiKM.js";import"./Collection-Bb4E4fO1.js";import"./CollectionBuilder-BnV_Tl8t.js";import"./context-DsS8yj4W.js";import"./Separator-CDhUdR2K.js";import"./SelectionManager-BSSRyZsY.js";import"./useEvent-CBSm4e4D.js";import"./useCollator-CNod_Fl3.js";import"./FocusScope-BnokTE9A.js";import"./VisuallyHidden-BlAFGTlT.js";import"./ClearPropsContextView-CdemR_HK.js";import"./Switch-BaZQdCuR.js";import"./useMakeFocusable-BGIF8mC3.js";import"./useToggleState-Cj1ngOjE.js";import"./useFormReset-yESpD6TP.js";import"./OverlayTrigger-12_kL5Te.js";import"./ControlledNotification-Cm5zY1ql.js";const er={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
