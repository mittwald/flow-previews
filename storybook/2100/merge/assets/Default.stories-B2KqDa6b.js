import{j as r,R as a}from"./iframe-DGNlk_vV.js";import{P as s,u as c}from"./Popover-C8jQUmvs.js";import{B as n}from"./Button-DhezJY1m.js";import{P as l}from"./PopoverTrigger-DTI8QbE9.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CfZGyFhp.js";import"./flowComponent-DBkzNBu-.js";import"./index-C66SR6go.js";import"./index-Bbt_YQGl.js";import"./useStatic-D_bMrpdM.js";import"./OverlayTrigger-Uz8qZ1np.js";import"./Dialog-btvz5H9Q.js";import"./Button-DpZIFY9G.js";import"./utils-DL8q1so0.js";import"./ProgressBar-BoB3EqYI.js";import"./Hidden-HIIwl8Mf.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BQuOJgUT.js";import"./useFocusRing-DxF43p1t.js";import"./useFocusable-CXOlwDl1.js";import"./RSPContexts-ClaGjYhr.js";import"./OverlayArrow-DNNRAYvS.js";import"./useControlledState-UWLM0vlv.js";import"./Collection-ChtRuM1d.js";import"./CollectionBuilder-BJ_Sw59I.js";import"./SelectionIndicator-B0PsrhoI.js";import"./Separator-BOOd5uBZ.js";import"./browser-ec9CZx7q.js";import"./useLocalizedStringFormatter-B2N1wxuv.js";import"./ControlledNotification-CLuRI8eV.js";import"./ClearPropsContextView-NN4EGP09.js";import"./IconWarning-C6wJTaOd.js";import"./Text-DsxTDDTq.js";import"./EmulatedBoldText-Bby43l11.js";import"./LoadingSpinner-Vfx511Qq.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const V=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,V as __namedExportsOrder,U as default};
