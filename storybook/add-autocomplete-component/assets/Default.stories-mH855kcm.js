import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as G,B as o}from"./Badge-CjYE1yqa.js";import{R as H}from"./index-BZISi7jw.js";import{T as s}from"./Text-0kfk3I9S.js";import{L as t}from"./Label-vcyG9Kja.js";import{C as J,M as h}from"./ContextMenuContent-BkFlb66r.js";import"./ContextMenuSection-DIi_ga2o.js";import{u as K}from"./MenuTrigger-BuIzu3H_.js";import{s as Q,a as U}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-ghCXY_.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./Button-6wFsZZeU.js";import"./IconApp-vAs-LrT2.js";import"./IconWarning-DIwIHW1V.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-D9XbF_eS.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Button-CNfiUnPd.js";import"./utils-CoJ4Pv5P.js";import"./ProgressBar-DVTCW4l9.js";import"./Label-CogRznyR.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BAuzoEaO.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-BZLMvQVL.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-CZDyhmV-.js";import"./Popover-BCw_JhSW.js";import"./DialogTriggerView-BknCs3BK.js";import"./Dialog-Dv5UhFoB.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-r6uz-b7H.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-BSANup6i.js";import"./SearchField-ClNjenZO.js";import"./Form-CFR8hFHG.js";import"./Group-B--aSUI3.js";import"./Input-CQEr2Ble.js";import"./useTextField-Ky_TF6kW.js";import"./useFormReset-CilIRCFg.js";import"./TextField-C3MHW-0G.js";import"./SelectionManager-CPBFXyQE.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./Action-CBGMaTwy.js";import"./context-CYJytrr2.js";import"./useStatic-CJjI45yZ.js";import"./getActionGroupSlot-Bf7lgP6T.js";import"./dynamic-DKDa4OpU.js";import"./Switch-CTR0X8it.js";import"./useToggleState-DZNedwC8.js";const ar={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:G}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},l={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=K("ContextMenu"),x=H.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(J,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:Q}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),parameters:{backgrounds:U}};var j,S,B;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var C,b,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var A,v,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var _,F,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(F=d.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var q,w,z;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const pr=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,c as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,l as WithScopeAndOnClose,pr as __namedExportsOrder,ar as default};
