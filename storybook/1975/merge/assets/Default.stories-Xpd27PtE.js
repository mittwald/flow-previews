import{j as e,R as G}from"./iframe-CyjdJwA_.js";import{b as H,B as o}from"./Badge-YgYqSzBJ.js";import{T as s}from"./Text-usW35pyR.js";import{L as n}from"./Label-C9WW8BSu.js";import{C as J,M as h}from"./ContextMenuContent-DZtoyn9T.js";import"./ContextMenuSection-BlPAfXHe.js";import{u as K}from"./DialogTriggerView-BaCd4fKq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Blii8gH5.js";import"./mergeRefs-C5H4AiTO.js";import"./index-Do1c4p-v.js";import"./Button-CWr2AVcL.js";import"./IconWarning-BNd_xcWu.js";import"./LoadingSpinner-Cs_zZqgK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dqj-tDTI.js";import"./context-U2uVXE2j.js";import"./Button-DtnX1sXm.js";import"./utils-BrA2SjLY.js";import"./ProgressBar-ClszfSN8.js";import"./Label-CzrgQa8v.js";import"./Hidden-CYpTJoxS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CugdBF8m.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DeuQBFn_.js";import"./useFocus-kh_9V4VQ.js";import"./useFocusRing-CIRJex-W.js";import"./useFocusable-Bd5Kcxc9.js";import"./browser-COCGQLuR.js";import"./EmulatedBoldText-Cm98uRnm.js";import"./Text-D5hkVXTt.js";import"./Action-pU0vZnxr.js";import"./context-D_hcNXze.js";import"./useStatic-Cvg4-ciK.js";import"./getActionGroupSlot-Dg5re8Hn.js";import"./dynamic-DKDa4OpU.js";import"./Popover-dGXJqITL.js";import"./Dialog-CDIzoxMq.js";import"./RSPContexts-CNBrQuIV.js";import"./OverlayArrow-DmbU7KN6.js";import"./useControlledState-BMmGZgaN.js";import"./Collection-BOX-2d7N.js";import"./CollectionBuilder-CmkEkI_W.js";import"./Separator-CV-ezLmw.js";import"./Group-fGbj7PxB.js";import"./SearchField-CcfmTUF_.js";import"./FieldError-FJXabK8a.js";import"./Form-CbzZ-2v4.js";import"./useTextField-Ck4Yz0Jg.js";import"./useFormReset-DhmyIfWL.js";import"./TextField-CvU05O_G.js";import"./useEvent-CI_dmwlv.js";import"./SelectionManager-bu__7N-a.js";import"./useCollator-Bj1Rn4ie.js";import"./FocusScope-BgpQQFhh.js";import"./VisuallyHidden-DG_rebhq.js";import"./Switch-DRYXwQ9s.js";import"./useToggleState-F7CGkmbU.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
