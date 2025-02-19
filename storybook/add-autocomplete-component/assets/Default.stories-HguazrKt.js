import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-BCw_JhSW.js";import{R as x}from"./index-BZISi7jw.js";import{B as h}from"./Button-6wFsZZeU.js";import{u as P}from"./MenuTrigger-BuIzu3H_.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-ghCXY_.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./DialogTriggerView-BknCs3BK.js";import"./IconApp-vAs-LrT2.js";import"./Dialog-Dv5UhFoB.js";import"./Button-CNfiUnPd.js";import"./utils-CoJ4Pv5P.js";import"./ProgressBar-DVTCW4l9.js";import"./Label-CogRznyR.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BAuzoEaO.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-BZLMvQVL.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-r6uz-b7H.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-BSANup6i.js";import"./Text-CZDyhmV-.js";import"./SearchField-ClNjenZO.js";import"./Form-CFR8hFHG.js";import"./Group-B--aSUI3.js";import"./Input-CQEr2Ble.js";import"./useTextField-Ky_TF6kW.js";import"./useFormReset-CilIRCFg.js";import"./TextField-C3MHW-0G.js";import"./SelectionManager-CPBFXyQE.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./IconWarning-DIwIHW1V.js";import"./Wrap-DQq6jo70.js";import"./Text-0kfk3I9S.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./LoadingSpinner-D9XbF_eS.js";import"./context-CYJytrr2.js";import"./useStatic-CJjI45yZ.js";const jr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Cr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Cr as __namedExportsOrder,jr as default};
