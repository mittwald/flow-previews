import{j as r}from"./jsx-runtime-CLpGMVip.js";import{P as i,a as R}from"./Popover-B8fn0NjJ.js";import{R as x}from"./index-Cf9XvIV_.js";import{B as h}from"./Button-Cz5bd543.js";import{u as P}from"./MenuTrigger-BIrpZmMH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BEdvHTPM.js";import"./index-CFEY-m6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./index-CoqFY4cC.js";import"./PropsContextProvider-CWFvCxZj.js";import"./DialogTriggerView-DV6WcEqR.js";import"./IconApp-CrW8h-Rp.js";import"./Dialog-Cg9ydWeK.js";import"./Button-D76OI_vo.js";import"./utils-DjOXyFua.js";import"./ProgressBar-ZJQghT0g.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CNLx9CCl.js";import"./useFocusRing-CvMz7Q_e.js";import"./usePress-lNW0gZrs.js";import"./RSPContexts-BG_vMng8.js";import"./OverlayArrow-DCI-Qj_s.js";import"./useControlledState-19OAjgUP.js";import"./Collection-BmK4LEIa.js";import"./CollectionBuilder-DjKT8coY.js";import"./Separator-BgTw7aj1.js";import"./Text-BK3pbL47.js";import"./SelectionManager-BEf0hUjE.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-B1faT6Ju.js";import"./FocusScope-yrzOGIns.js";import"./VisuallyHidden-EoGVKpYJ.js";import"./IconWarning-C3Y0rqlg.js";import"./Wrap-DQq6jo70.js";import"./Text-DcH75BF-.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./LoadingSpinner-C6bUGSry.js";import"./context-_K-5nSq3.js";import"./useSelector-D3mDZ6p8.js";const fr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const vr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,vr as __namedExportsOrder,fr as default};
