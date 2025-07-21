import{j as e,R as G}from"./iframe-tng_7MnI.js";import{b as H,B as o}from"./Badge-C3LEiYMs.js";import{T as s}from"./Text-D_jDO6uI.js";import{L as n}from"./Label-Dv5kr7I4.js";import{C as J,M as h}from"./ContextMenuContent-CewkrvJ1.js";import"./ContextMenuSection-Dqcd1OLC.js";import{u as K}from"./DialogTriggerView-CRs3bhJy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DYtDUrj3.js";import"./mergeRefs--BPoweoc.js";import"./index-Drzl8fEc.js";import"./Button-DU_QW8Rd.js";import"./IconWarning-BPmu7WCe.js";import"./LoadingSpinner-DVPPG5kf.js";import"./useLocalizedStringFormatter-CgARc_YB.js";import"./context-DF7MMgfI.js";import"./Button-BAFArKRX.js";import"./utils-5hQd1GPy.js";import"./ProgressBar-BKGN512w.js";import"./Label-CUv_itT5.js";import"./Hidden-DtL8MOne.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Xo2bW3MF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-GMQejvE6.js";import"./useFocus-DB2yX2jm.js";import"./useFocusRing-DhOBCV_L.js";import"./useFocusable-DouN-Cym.js";import"./browser-zPD-OImI.js";import"./EmulatedBoldText-d-Lx_bwT.js";import"./Text-CW9rRGi5.js";import"./Action-DpGM30Ow.js";import"./context-t97AZKNB.js";import"./useStatic-Vj9I4teO.js";import"./getActionGroupSlot-jEh-tcyT.js";import"./dynamic-DKDa4OpU.js";import"./Popover-BJU7ttZm.js";import"./Dialog-IOGvswXh.js";import"./RSPContexts-B53Ismbm.js";import"./OverlayArrow-D1J4V4Xu.js";import"./useControlledState-BUDKzFUA.js";import"./Collection-U6iOHpYg.js";import"./CollectionBuilder-Bvhqn8Ns.js";import"./Separator-mXU6o4ZK.js";import"./Input-X3v1cPFB.js";import"./SearchField-BOUVMF0K.js";import"./FieldError-DYaGdwvi.js";import"./Form-DwsjCjtf.js";import"./Group-7jupwvb6.js";import"./useTextField--Fxttb5L.js";import"./useFormReset-xJzqPhqW.js";import"./TextField-iYZH2OXM.js";import"./SelectionManager-Ci6gTmLN.js";import"./useEvent-CP-X5b9K.js";import"./useCollator-B2nuGa8V.js";import"./FocusScope-DGiBHAPP.js";import"./VisuallyHidden-_vEXP6Y8.js";import"./Switch-CKXwEwjT.js";import"./useToggleState-Biz1LJLQ.js";const er={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:H}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=K("ContextMenu"),x=G.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
