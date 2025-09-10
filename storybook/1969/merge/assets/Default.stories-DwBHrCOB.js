import{j as e,R as G}from"./iframe-DE1y3h6K.js";import{b as H,B as o}from"./Badge-D7N833M0.js";import{T as s}from"./Text-pSa9QdzY.js";import{L as n}from"./Label-DZ4SmxIN.js";import{C as J,M as h}from"./ContextMenuContent-Dl_BBYYU.js";import"./ContextMenuSection-D1uTl_fe.js";import{u as K}from"./DialogTriggerView-BP8fNzKl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BpZWWW7m.js";import"./mergeRefs-D0m4vR-q.js";import"./index-jyJWLiYa.js";import"./Button-BA8n91r_.js";import"./IconWarning-DpK9giyz.js";import"./LoadingSpinner-rp2WIybp.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CrSxeSmc.js";import"./context-Bl9QONje.js";import"./Button-B7wfEB9A.js";import"./utils-BuwGAin4.js";import"./ProgressBar-csi_2Tv3.js";import"./Label-TbKyKJmZ.js";import"./Hidden-C76LoNo0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CHbXUtSy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-W2Z88hDR.js";import"./useFocus-CKbJThq3.js";import"./useFocusRing-BkyGtUZS.js";import"./useFocusable-BnAo6gfc.js";import"./browser-Ts-qWG1Z.js";import"./EmulatedBoldText-1IxUiC0B.js";import"./Text-BKZgNBXV.js";import"./Action-COIyfA7V.js";import"./context-BCgJ5YhY.js";import"./useStatic-DRwOE5Oc.js";import"./getActionGroupSlot-CWsUflea.js";import"./dynamic-DKDa4OpU.js";import"./Popover-CrXxuisD.js";import"./Dialog-CprkWIxR.js";import"./RSPContexts-CDFoiued.js";import"./OverlayArrow-DXOomu3A.js";import"./useControlledState-BK9gxWse.js";import"./Collection-D0DOys5j.js";import"./CollectionBuilder-CoWtYmY0.js";import"./Separator-CBnMPT0A.js";import"./Group-BoarCDIk.js";import"./SearchField-Vb_1m6nE.js";import"./FieldError-DorlsVNp.js";import"./Form-BpLNV-sf.js";import"./useTextField-CCT8yJoF.js";import"./useFormReset-CxooHmiE.js";import"./TextField-0H-e0Syb.js";import"./useEvent-B3QERrau.js";import"./SelectionManager-s_1JWMgA.js";import"./useCollator-BUMRQKLH.js";import"./FocusScope-Ch4ZrNXF.js";import"./VisuallyHidden-BAMDsQjq.js";import"./Switch-D2CWduSy.js";import"./useToggleState-BH6y_yxy.js";const $e={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
