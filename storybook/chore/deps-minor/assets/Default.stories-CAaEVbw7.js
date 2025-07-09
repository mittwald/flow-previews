import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as G,B as o}from"./Badge-DbXXdRuw.js";import{R as H}from"./index-BdpSHsi2.js";import{T as s}from"./Text-D9yiRIBM.js";import{L as t}from"./Label-Bw7FtOMT.js";import{C as J,M as h}from"./ContextMenuContent-D8Kw0iMe.js";import"./ContextMenuSection-C19rE_KA.js";import{u as K}from"./DialogTriggerView-DedTdG5A.js";import{s as Q,a as U}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CUxZLznR.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-B4S5kvNg.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Button-CF5yMAwC.js";import"./IconWarning-DxsN5E99.js";import"./LoadingSpinner-DrSNtTGA.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./context-C-2WHVw-.js";import"./Button-znSegCUf.js";import"./utils-q_Aud5Js.js";import"./ProgressBar-Dwuqfbjf.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DC6xi8Xc.js";import"./useFocus-BK-u4cdi.js";import"./useFocusRing-DHXckIXO.js";import"./useFocusable-BeYVpnFb.js";import"./index-BAMY2Nnw.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";import"./Action-CDKwMbaH.js";import"./context-B_aosvru.js";import"./useStatic-DxIzh9fY.js";import"./getActionGroupSlot-DtaKxkK0.js";import"./dynamic-DKDa4OpU.js";import"./Popover-B2MfaqwC.js";import"./Dialog-DxwfBBwd.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-FfRQYwIg.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-CsSq479I.js";import"./CollectionBuilder-C2AfWA97.js";import"./Separator-D8lRHJ5d.js";import"./Input-DKshHGKQ.js";import"./SearchField-Du9e4tAq.js";import"./FieldError-rzQ5ghoP.js";import"./Form-Ckmgkmz_.js";import"./Group-46VfC_jx.js";import"./useTextField-CNVbrZkS.js";import"./useFormReset-B9LhY6oC.js";import"./TextField-C3T3nKGe.js";import"./SelectionManager-jAD4Wzpy.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-CmZhdF0V.js";import"./FocusScope-D5hiFDC1.js";import"./VisuallyHidden-CRdqyLT8.js";import"./Switch-C0VMcH5k.js";import"./useToggleState-Bjyn8Yd0.js";const cr={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=K("ContextMenu"),x=H.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:Q}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:U}};var j,S,B;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var C,b,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <Badge {...props}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var L,T,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var k,P,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      Value
    </Badge>
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var O,W,R;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(R=(W=i.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var I,y,D;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(D=(y=l.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var A,v,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var _,F,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(N=(F=d.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var q,w,z;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const ir=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,c as WithOnClose,p as WithOnPress,l as WithOnPressAndOnClose,a as WithScope,i as WithScopeAndOnClose,ir as __namedExportsOrder,cr as default};
