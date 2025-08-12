import{j as e,R as G}from"./iframe-Czve8Ng1.js";import{b as H,B as o}from"./Badge-CGwvyROc.js";import{T as s}from"./Text-CMgn7hJq.js";import{L as n}from"./Label-FUFGZTqe.js";import{C as J,M as h}from"./ContextMenuContent-ClrTuYGy.js";import"./ContextMenuSection-BwsDvC0k.js";import{u as K}from"./DialogTriggerView-7b1_XXj3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DLHfSyo1.js";import"./mergeRefs-BkScJl_E.js";import"./index-SeEX-dzh.js";import"./Button-D73APsNA.js";import"./IconWarning-YJtY_uKm.js";import"./LoadingSpinner-B0jtDNpX.js";import"./useLocalizedStringFormatter-uQUw7qmu.js";import"./context-D03EQw3p.js";import"./Button-Cis11iQd.js";import"./utils-C85tsJLi.js";import"./ProgressBar-CQMCSPa7.js";import"./Label-BfVvFZj4.js";import"./Hidden-B3217TUg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BFN45BzM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8K4_ozuW.js";import"./useFocus-DLNoddQ5.js";import"./useFocusRing-Bu3hVrpu.js";import"./useFocusable-DPi5-Rks.js";import"./browser-C659BIXC.js";import"./EmulatedBoldText-CYlQsTFY.js";import"./Text-xUaxq5aV.js";import"./Action-B4jn1mWw.js";import"./context-CNefDW5h.js";import"./useStatic-CzYWXmZ1.js";import"./getActionGroupSlot-DCBGN5KI.js";import"./dynamic-DKDa4OpU.js";import"./Popover-DPRW9Y1r.js";import"./Dialog-DRA529j2.js";import"./RSPContexts-dpque2BF.js";import"./OverlayArrow-DAtBTKTJ.js";import"./useControlledState-BeXkP8kb.js";import"./Collection-CSylHNqr.js";import"./CollectionBuilder-Dt6aii9k.js";import"./Separator-C90j9JiE.js";import"./Group-D_IbuD73.js";import"./SearchField-C86J2fE8.js";import"./FieldError-CNai_82t.js";import"./Form-B2b0RBd7.js";import"./useTextField-l00Z-hVA.js";import"./useFormReset-BM4kigyU.js";import"./TextField-IalWcoDx.js";import"./useEvent-CJyM_iko.js";import"./SelectionManager-BrCB2ldz.js";import"./useCollator-Bl41TtO8.js";import"./FocusScope-Cg_D6BEH.js";import"./VisuallyHidden-DTvv8wPC.js";import"./Switch-DwlQZsGl.js";import"./useToggleState-CNvQGslN.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
