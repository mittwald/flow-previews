import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-CWL7sDEz.js";import{R as x}from"./index-CtQTiInQ.js";import{B as h}from"./Button-BqcoygzQ.js";import{u as P}from"./MenuTrigger-CVxLWmLw.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBvh9Ys5.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./index-DN6_Rp6A.js";import"./Popover.module-BrgV6PVx.js";import"./DialogTriggerView-C4Em7sQp.js";import"./Dialog-CnYyMROF.js";import"./Button-CponIIJZ.js";import"./utils-pqn3Medm.js";import"./ProgressBar-SARi2bur.js";import"./Label-BuTtJRrE.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-D55R0JPp.js";import"./useLocalizedStringFormatter-ONfbUjw-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mPwC5UWg.js";import"./useFocus-Csiud3ul.js";import"./useFocusRing-Dj3VKvGJ.js";import"./useFocusable-D_uDDaTh.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-BoaxqqrH.js";import"./useControlledState-BKUqB07S.js";import"./Collection-Bp8QgIDg.js";import"./CollectionBuilder-CLaaElit.js";import"./Separator-DwNpDsab.js";import"./Text-DfUCrkqY.js";import"./SelectionManager-D1BeontN.js";import"./useEvent-BsCm9_LL.js";import"./useCollator-BGnAy9ct.js";import"./FocusScope-S3AisjuN.js";import"./VisuallyHidden-BArB4NIa.js";import"./IconApp-CyjwVzxS.js";import"./IconWarning-DF9UG10K.js";import"./Wrap-DQq6jo70.js";import"./Text-78TaYxdh.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./LoadingSpinner-DgFhq5z2.js";import"./context-8Z4cUhdO.js";import"./useStatic-BPcPrWze.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
