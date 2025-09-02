import{j as e,R as G}from"./iframe-DaUAgimo.js";import{b as H,B as o}from"./Badge-AfggoKjQ.js";import{T as s}from"./Text-DqLl2XlR.js";import{L as n}from"./Label-BgV7ip1p.js";import{C as J,M as h}from"./ContextMenuContent-IXUEHRsx.js";import"./ContextMenuSection-BgngavkU.js";import{u as K}from"./DialogTriggerView-CgOUSRTq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./Button-BNJyR7fn.js";import"./IconWarning-Jl_pbRrq.js";import"./LoadingSpinner-MgjzVDHH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./context-DGmQszzG.js";import"./Button-CD_lBn7X.js";import"./utils-Dv3HAiNW.js";import"./ProgressBar-Cs4fjP5n.js";import"./Label-BA5dW2di.js";import"./Hidden-DmAVKgDo.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-4W4rDaLN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEu6_Qu_.js";import"./useFocus-DfmeJaC9.js";import"./useFocusRing-6fCWhHXp.js";import"./useFocusable-91Y8y3Dw.js";import"./browser-DFc9RAYz.js";import"./EmulatedBoldText-B3KIlJpF.js";import"./Text-DKL0uLiC.js";import"./Action-6Ewb0bna.js";import"./context-C_g0dLJp.js";import"./useStatic-Djoi-J49.js";import"./getActionGroupSlot-V1QIM2yi.js";import"./dynamic-DKDa4OpU.js";import"./Popover-C3acxAMq.js";import"./Dialog-CaJ4kRlO.js";import"./RSPContexts-GpjylgJ9.js";import"./OverlayArrow-De5g7eHd.js";import"./useControlledState-HXI1EgZM.js";import"./Collection-Cbp4nuPj.js";import"./CollectionBuilder-Cu6aZgsw.js";import"./Separator-AEaXKmSc.js";import"./Group-D-iHY_KE.js";import"./SearchField-De9Vc972.js";import"./FieldError-CBWJBmz-.js";import"./Form-StxO2YAG.js";import"./useTextField-DwvDg_tT.js";import"./useFormReset-CA4kI8bZ.js";import"./TextField-Cz-3i59y.js";import"./useEvent-dvApoQWz.js";import"./SelectionManager-bQOu0uyJ.js";import"./useCollator-CI-kdhZu.js";import"./FocusScope-Gc7sAVxN.js";import"./VisuallyHidden-BnUSGmEW.js";import"./Switch-CG36W35Q.js";import"./useToggleState-D_caSlle.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
