import{j as e,R as G}from"./iframe-DzdsrO80.js";import{b as H,B as o}from"./Badge-Ddsr0__U.js";import{T as s}from"./Text-DXUL7YAG.js";import{L as n}from"./Label-Bm3Js6Mn.js";import{C as J,M as h}from"./ContextMenuContent-CjQiyveI.js";import"./ContextMenuSection-AWtfZJeN.js";import{u as K}from"./DialogTriggerView-BSpQgGle.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IX1SCoto.js";import"./mergeRefs-BURbbDf-.js";import"./index-Bdpzlu2x.js";import"./Button-DVR7cX3i.js";import"./IconWarning-B3m6OsdH.js";import"./LoadingSpinner-PW_7_s64.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B09vxeO2.js";import"./context-DCkzppns.js";import"./Button-BCqDIvjf.js";import"./utils-CvAakX2W.js";import"./ProgressBar-LQ-fnBcd.js";import"./Label-DXfcpAFN.js";import"./Hidden-BVbf7n1G.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtHrL8qq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DskVbL7b.js";import"./useFocus-B0VC8u8k.js";import"./useFocusRing-CBIzKb6Q.js";import"./useFocusable-COvMPAb3.js";import"./browser-CWHi4dia.js";import"./EmulatedBoldText-BUyeaD_Y.js";import"./Text-CRTGmFuV.js";import"./Action-Ba6ZxKlY.js";import"./context-DKufrzCY.js";import"./useStatic-CzVMgagU.js";import"./getActionGroupSlot-COrah7QA.js";import"./dynamic-DKDa4OpU.js";import"./Popover-CZjnIXLF.js";import"./Dialog-d3aXPnlF.js";import"./RSPContexts-DgNZ7nRI.js";import"./OverlayArrow-4JOsbCJv.js";import"./useControlledState-D4aZ1p71.js";import"./Collection-C9A_LHc0.js";import"./CollectionBuilder-CaWr36HU.js";import"./Separator-CBpgeXgJ.js";import"./Group-Cdr53w7M.js";import"./SearchField-C817Qgil.js";import"./FieldError-CeKpopQl.js";import"./Form-C696dGLt.js";import"./useTextField-BarUssyk.js";import"./useFormReset-B7pkU5Xm.js";import"./TextField-Cwc92i9-.js";import"./useEvent-DVhg_FlY.js";import"./SelectionManager-CLk07rVx.js";import"./useCollator-B4_CrHfJ.js";import"./FocusScope-DDPGgWDg.js";import"./VisuallyHidden-BfQH1Q-z.js";import"./Switch-CX4XfBjM.js";import"./useToggleState-OwRq_I9z.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
