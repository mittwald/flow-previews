import{j as e,R as G}from"./iframe-BAGTntfB.js";import{b as H,B as o}from"./Badge-C76pCL-0.js";import{T as s}from"./Text-oSCAFhn5.js";import{L as n}from"./Label-f9Yl8NxA.js";import{C as J,M as h}from"./ContextMenuSection-BeQzdxEY.js";import{u as K}from"./DialogTriggerView-BimJk9-6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVEq68NN.js";import"./mergeRefs-Ct4YEWrU.js";import"./index-TExY8AE4.js";import"./Button-ClQyukEh.js";import"./IconWarning-SECJkQke.js";import"./LoadingSpinner-DuAh__4X.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DdilTbMd.js";import"./context-C8vSVPtT.js";import"./Button-DldLr0Dh.js";import"./utils-DSdQ5U5C.js";import"./ProgressBar-yPlEiM2Y.js";import"./Label-CWJf374V.js";import"./Hidden-BFcGcOTS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jLc0StSH.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BeTrTVD4.js";import"./useFocus-kqlw9bYS.js";import"./useFocusRing-uRy9P7F2.js";import"./useFocusable-CvI8LjKe.js";import"./browser-D8tJ8M3I.js";import"./EmulatedBoldText-hfJfJt2X.js";import"./Text-CZggwRKM.js";import"./Action-BhAAiBfS.js";import"./context-B68punRm.js";import"./useStatic-B7HpxjOi.js";import"./getActionGroupSlot-Bf03GRoZ.js";import"./dynamic-DicyFJZ2.js";import"./Popover-DIu09GMY.js";import"./OverlayArrow-CIJbDC1X.js";import"./useControlledState-hqI-vqoJ.js";import"./Switch-DxFGgU8l.js";import"./useToggleState-B4DVcZDp.js";import"./useFormReset-DMVQ-F_N.js";import"./VisuallyHidden-CCDJ4X70.js";import"./RSPContexts-u_LIQrA5.js";import"./FocusScope-Dx9vsLFf.js";import"./useCollator-C2nKvxEE.js";import"./Collection-CyU2lrEr.js";import"./CollectionBuilder-BjHCxw5W.js";import"./Separator-BoyfOubv.js";import"./Group-CQeggyQD.js";import"./SearchField-BATSQzLF.js";import"./FieldError-DwSlV6wI.js";import"./Form-BImra2vo.js";import"./useTextField-aRRnCdTt.js";import"./TextField-CGb-3Yan.js";import"./useEvent-DLvyF1-Y.js";import"./SelectionManager-DNLJemTe.js";const Ye={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const Ze=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,Ze as __namedExportsOrder,Ye as default};
