import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as G,B as o}from"./Badge-C1G5300D.js";import{R as H}from"./index-CgfFrydU.js";import{T as s}from"./Text-DqBkWPX0.js";import{L as n}from"./Label-B4ewt7OD.js";import{C as J,M as h}from"./ContextMenuContent-DC8HeNL-.js";import"./ContextMenuSection-lYIm3Wsn.js";import{u as K}from"./OverlayTrigger-DY12d_17.js";import{s as Q,a as U}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ADM7KP_B.js";import"./mergeRefs-DiwoqHxs.js";import"./index-Brqd7pHr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./Button-CbN8Qn6V.js";import"./IconWarning-CNxTpz-G.js";import"./LoadingSpinner-BT51OXM_.js";import"./useLocalizedStringFormatter-BzGhSkyu.js";import"./Button-3GcZ2y2i.js";import"./utils-Bm37ngJk.js";import"./ProgressBar-lRSo0OUL.js";import"./Label-B_sU3NXB.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ8zpiVY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CC9yd5Fh.js";import"./useFocus-C3ExUvEL.js";import"./useFocusRing-wzjDdF0K.js";import"./useFocusable-CzgSXE3t.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-I7rzu-gq.js";import"./Action-Cl6JccS9.js";import"./context-Cku6jByl.js";import"./useStatic-BrY-dsbP.js";import"./getActionGroupSlot-C3DYPhlZ.js";import"./dynamic-DKDa4OpU.js";import"./Popover-C4B47nlu.js";import"./DialogTriggerView-BwEKSqnI.js";import"./Dialog-DHB7afQp.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CyRBwams.js";import"./useControlledState-YIijONQK.js";import"./Collection-43aF_0U7.js";import"./CollectionBuilder--ipx_qrV.js";import"./Separator-By-KuC_f.js";import"./SelectionManager-W-F9tXjW.js";import"./useEvent-Dw3zA1wO.js";import"./useCollator-rVor1fd8.js";import"./FocusScope--xlp8sQI.js";import"./VisuallyHidden-C4REVXC4.js";import"./Switch-DyZ3EHGe.js";import"./useToggleState-BrsYFbbM.js";import"./useFormReset-gF4HkNmA.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},l={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=H.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:Q}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:U}};var j,S,B;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var C,b,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var O,W,R;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(R=(W=l.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var I,y,D;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var A,v,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  parameters: {
    backgrounds: storyBackgroundDark
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
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const er=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,c as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,l as WithScopeAndOnClose,er as __namedExportsOrder,$e as default};
