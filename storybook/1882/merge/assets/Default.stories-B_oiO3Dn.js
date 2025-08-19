import{j as e,R as G}from"./iframe-TjmQ4-hc.js";import{b as H,B as o}from"./Badge-DeX8Uztg.js";import{T as s}from"./Text-B1ccA9_H.js";import{L as n}from"./Label-_xLVsaVJ.js";import{C as J,M as h}from"./ContextMenuContent-M0YhW77o.js";import"./ContextMenuSection-C2WKk6Hp.js";import{u as K}from"./DialogTriggerView-CaZEWSSp.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./Button-CjK60Gy6.js";import"./IconWarning-1inC7auC.js";import"./LoadingSpinner-NnONiqHm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./context-R7iXnnvL.js";import"./Button-ZmvxJ__-.js";import"./utils-DD1RW9f4.js";import"./ProgressBar-BJaRqoq-.js";import"./Label-bbA9jqHU.js";import"./Hidden-30ERZiSw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-d8aoteAS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BK59oRjy.js";import"./useFocus-Bp-EL3Xp.js";import"./useFocusRing-D7ZBK5Fy.js";import"./useFocusable-BjM2CItA.js";import"./browser-CuXK39lt.js";import"./EmulatedBoldText-CMH1yXpY.js";import"./Text-C2aObJTh.js";import"./Action-B2WqKUlH.js";import"./context-Brmjsdqe.js";import"./useStatic-r5kIO8BX.js";import"./getActionGroupSlot-CibZr1oe.js";import"./dynamic-DKDa4OpU.js";import"./Popover-Gm7nYTUR.js";import"./Dialog-BYQB8QOB.js";import"./RSPContexts-DCrZu0Mf.js";import"./OverlayArrow-Dfaoqrsw.js";import"./useControlledState-Cdf0eZg6.js";import"./Collection-CamF85rx.js";import"./CollectionBuilder-JPu6hEsl.js";import"./Separator-CcxH-z50.js";import"./Group-9f-8oWvR.js";import"./SearchField-DwL5wZDS.js";import"./FieldError-Bn62nal0.js";import"./Form-Bwnncz0S.js";import"./useTextField-FvWzbSPw.js";import"./useFormReset-CwwzwEJM.js";import"./TextField-BMUXjdB8.js";import"./useEvent-lWEWCECp.js";import"./SelectionManager-uQED9UcT.js";import"./useCollator-mmVXCJGc.js";import"./FocusScope-DiLIjyrf.js";import"./VisuallyHidden-EAsiRlUn.js";import"./Switch--YPpjeD6.js";import"./useToggleState-CoQV3DJE.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
