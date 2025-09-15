import{j as e,R as G}from"./iframe-BJ0F67WV.js";import{b as H,B as o}from"./Badge-BzAC6vSG.js";import{T as s}from"./Text-DvcA_djt.js";import{L as n}from"./Label-DdDrAhKV.js";import{C as J,M as h}from"./ContextMenuContent-Bn8daWqo.js";import"./ContextMenuSection-Dlp4NHpV.js";import{u as K}from"./DialogTriggerView-NFgxLp1f.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./index-C5tuckEm.js";import"./Button-CnQZL08m.js";import"./IconWarning-D8lhACCL.js";import"./LoadingSpinner-s7oSeT27.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./context-DDk-RgEI.js";import"./Button-CJVv4977.js";import"./utils-CfdyWDg2.js";import"./ProgressBar-BZfTjKSF.js";import"./Label-BZcf1Nsx.js";import"./Hidden-iBx55YDK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CE1zHuYM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C0-WYOlY.js";import"./useFocus-N8Qk0gvU.js";import"./useFocusRing-CZqmVUZk.js";import"./useFocusable-k7wU8KZy.js";import"./browser-ENr42WFT.js";import"./EmulatedBoldText-CK3yk5uQ.js";import"./Text-DUTh34WN.js";import"./Action-DQsKkgIU.js";import"./context-DqfxRtzM.js";import"./useStatic-BcjnPkg-.js";import"./getActionGroupSlot-DrYIE0ib.js";import"./dynamic-D4EbkcOt.js";import"./Popover-Dgu6lEcA.js";import"./Dialog-CcAHYHw-.js";import"./RSPContexts-BTU5SObx.js";import"./OverlayArrow--hlAjm0f.js";import"./useControlledState-g4NJV7ij.js";import"./Collection-B8sxr2FE.js";import"./CollectionBuilder-L5ZDKpRe.js";import"./Separator-CMNt12Nc.js";import"./Group-CRkQVq-1.js";import"./SearchField-K6WJ8JUX.js";import"./FieldError-zuZgMzEa.js";import"./Form-aW46NXWl.js";import"./useTextField-DGpbu28C.js";import"./useFormReset-5M8XX6CH.js";import"./TextField-CsP4pSiS.js";import"./useEvent-BEGbzF0p.js";import"./SelectionManager-aRuCxMGp.js";import"./useCollator-ueFTVoBb.js";import"./FocusScope-own16ieq.js";import"./VisuallyHidden-CST8zJDR.js";import"./Switch-BLQJgmjy.js";import"./useToggleState-BStMvCUs.js";import"./ControlledNotification-DPl-ua4c.js";const er={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
