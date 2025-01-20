import{j as r}from"./jsx-runtime-CLpGMVip.js";import{P as i,a as R}from"./Popover-DaZg_GSo.js";import{R as x}from"./index-Cf9XvIV_.js";import{B as h}from"./Button-DHWTNALP.js";import{u as P}from"./OverlayTrigger-CfWlolrA.js";import"./flowComponent-DRn_CkhL.js";import"./index-CFEY-m6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./index-CoqFY4cC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./Dialog-CmviSIn_.js";import"./Button-Depz1QWJ.js";import"./utils-CVMEqJeI.js";import"./ProgressBar-Jtxrz8Zb.js";import"./Label-0l9LIJhu.js";import"./Hidden-Cfl4ctnK.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-ZIe1iymP.js";import"./focusSafely-D0g9gk72.js";import"./useFocusRing-CKcPrrmF.js";import"./usePress-6HCAk5fU.js";import"./_class_private_field_set-CamGEj8o.js";import"./RSPContexts-BG_vMng8.js";import"./OverlayArrow-CGwtiaMv.js";import"./useControlledState-19OAjgUP.js";import"./Collection-BmK4LEIa.js";import"./CollectionBuilder-DjKT8coY.js";import"./Separator-BRzFti9v.js";import"./Text-F0Mi_G2S.js";import"./SelectionManager-K1NiFmXE.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-B1faT6Ju.js";import"./FocusScope-D1WmQT6j.js";import"./VisuallyHidden-D-O8AK4M.js";import"./IconApp-B1n3xJhN.js";import"./IconWarning-D8dw3UeH.js";import"./Wrap-DQq6jo70.js";import"./Text-CjWzxq3B.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./LoadingSpinner-UEb47rBz.js";import"./context-DWBCFo5s.js";import"./useSelector-Bela-RZB.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const hr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,hr as __namedExportsOrder,vr as default};
