import{j as e,R as G}from"./iframe-DT0a5lsj.js";import{b as H,B as o}from"./Badge-Cou5P0nT.js";import{T as s}from"./Text-CWVnGydc.js";import{L as n}from"./Label-Dszv3nJ4.js";import{C as J,M as h}from"./ContextMenuContent-DYLCERpo.js";import"./ContextMenuSection-BUuRVmvO.js";import{u as K}from"./DialogTriggerView-Db6UDAae.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./Button-BnKE_3tA.js";import"./IconWarning-CP_9phWh.js";import"./LoadingSpinner-8cDNCbSg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./context-DtNWionw.js";import"./Button-BNdmwyxy.js";import"./utils-BDe-fZfW.js";import"./ProgressBar-ByaJujBA.js";import"./Label-RcZ5RumP.js";import"./Hidden-CjrJVhTe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BMvlVo7d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-wu8eZQGI.js";import"./useFocus-BPGD2VLY.js";import"./useFocusRing-_XF1QxIj.js";import"./useFocusable-DyoB_hOm.js";import"./browser-C5BzL4Ah.js";import"./EmulatedBoldText-Clo2YvSu.js";import"./Text-C8QSq9Z3.js";import"./Action-DYEDj9x0.js";import"./context-DJTNNuyW.js";import"./useStatic-WTXFIrX_.js";import"./getActionGroupSlot-SZaPZq2Z.js";import"./dynamic-DKDa4OpU.js";import"./Popover-BGe9X61A.js";import"./Dialog-BHWnDcSc.js";import"./RSPContexts-acmSHJ3A.js";import"./OverlayArrow-HNgDPPr3.js";import"./useControlledState-C-X9sbbL.js";import"./Collection-Dyt6IE1A.js";import"./CollectionBuilder-D0yiIIyP.js";import"./Separator-AkxPmIRq.js";import"./Group-MdCfc2bT.js";import"./SearchField-Doktui3O.js";import"./FieldError-Ccza_qSZ.js";import"./Form-BqKRbvb9.js";import"./useTextField-BB3dLsw5.js";import"./useFormReset-cUnmQGQz.js";import"./TextField-Cx5OsYq1.js";import"./useEvent-DVcRtgtL.js";import"./SelectionManager-JcMzUkMf.js";import"./useCollator-Zc_ZemNk.js";import"./FocusScope-BOmeY0Fa.js";import"./VisuallyHidden-DDMzvk-a.js";import"./Switch-CVkBMd-3.js";import"./useToggleState-CGQQZzdG.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
