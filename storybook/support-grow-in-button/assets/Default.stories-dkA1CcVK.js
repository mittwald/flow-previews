import{j as e,R as G}from"./iframe-cREoqKkU.js";import{b as H,B as o}from"./Badge-CHE1Nyoi.js";import{T as s}from"./Text-n81s0DiV.js";import{L as n}from"./Label-DZvsfDgY.js";import{C as J,M as h}from"./ContextMenuContent-DgPHY1Zd.js";import"./ContextMenuSection-DKrbCPqh.js";import{u as K}from"./DialogTriggerView-DDpbwryG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CoBIOD9m.js";import"./mergeRefs-qT8HekK4.js";import"./index-sbMuRXJ-.js";import"./Button-BiI53Bc2.js";import"./IconWarning-BZ0g_Se0.js";import"./LoadingSpinner-BEZ9UYVH.js";import"./useLocalizedStringFormatter-VGcwbP3j.js";import"./context-B2t2DGfo.js";import"./Button-Cu-YDSLu.js";import"./utils-yXINXq--.js";import"./ProgressBar-CUbrDEJ6.js";import"./Label-CiJ2ihSa.js";import"./Hidden-lwWUIJBj.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-lx63atcd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CDwaJuL4.js";import"./useFocus-DdT7TrV6.js";import"./useFocusRing-BqHxEjMi.js";import"./useFocusable-6okJE7SL.js";import"./browser-DLud-_LN.js";import"./EmulatedBoldText-Do4ZwDP6.js";import"./Text-IBVIMvOc.js";import"./Action-DoeNPaZS.js";import"./context-C3KwCnKN.js";import"./useStatic-BAYq7Sdb.js";import"./getActionGroupSlot-CbQGimXy.js";import"./dynamic-DKDa4OpU.js";import"./Popover-D0iKC4-k.js";import"./Dialog-le0_HQU8.js";import"./RSPContexts-BbhueAoC.js";import"./OverlayArrow-C8FHnWmq.js";import"./useControlledState-CU5MoX31.js";import"./Collection-DyOpwtKv.js";import"./CollectionBuilder-DBdNKsot.js";import"./Separator-BbGpBOgo.js";import"./Input-V1vrGjHl.js";import"./SearchField-CSUzKRpw.js";import"./FieldError-CvRuj6qL.js";import"./Form-FfGMTlZb.js";import"./Group-BI8C3Od1.js";import"./useTextField-RgubrTZC.js";import"./useFormReset-D4g7a1lX.js";import"./TextField-BSAOaaLk.js";import"./SelectionManager-BiiBfqxw.js";import"./useEvent-CzSnF3qn.js";import"./useCollator-JlvF5Y_E.js";import"./FocusScope-D9lXdOdd.js";import"./VisuallyHidden--yTRKci1.js";import"./Switch-DbDiUC_i.js";import"./useToggleState-DNwTfAm-.js";const er={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
