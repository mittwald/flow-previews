import{j as r,R}from"./iframe-DjexR8Tp.js";import{P as i,a as x}from"./Popover-CvxF9MLE.js";import{B as h}from"./Button-DYqAz9Ax.js";import{u as P}from"./DialogTriggerView-B9cJTcHh.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNncApHm.js";import"./mergeRefs-CBM20YoL.js";import"./index-D_XyFzRd.js";import"./Dialog-D-o_xP1i.js";import"./Button-B9QzJYPZ.js";import"./utils-T6f7ZmRV.js";import"./ProgressBar-DpKa1PlM.js";import"./Label-Guiqn7_R.js";import"./Hidden-DuO80z64.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ott8nG03.js";import"./context-CVxCaAZx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mG8JzCXO.js";import"./useFocus-Bu01zz1F.js";import"./useFocusRing-DmJAPvY7.js";import"./useFocusable-C3y7tw8Z.js";import"./RSPContexts-BkQTRtx0.js";import"./OverlayArrow-OIwcMk6i.js";import"./useControlledState-rTz5CSzi.js";import"./Collection-CuM96cDy.js";import"./CollectionBuilder-CkLqU0EG.js";import"./Separator-BbijxOJI.js";import"./Text-Xp1USGoa.js";import"./Group-CtcjVW7W.js";import"./SearchField-CEGXi6ip.js";import"./FieldError-By7Lq8z0.js";import"./Form-BEAgwaeD.js";import"./useLocalizedStringFormatter-DCr69HqY.js";import"./useTextField-DhOhnSWz.js";import"./useFormReset-DuzsM7E6.js";import"./TextField-DsmYuxt9.js";import"./useEvent-CO0sOg2Z.js";import"./SelectionManager-BV1kevWQ.js";import"./useCollator-DwaKC1E9.js";import"./FocusScope-CeR_G6vH.js";import"./VisuallyHidden-CwBbURTG.js";import"./IconWarning-iYDgM4y1.js";import"./Text-aOHzhDvr.js";import"./browser-B8Z7dOtx.js";import"./EmulatedBoldText-DPzl8Gjb.js";import"./LoadingSpinner-D4t9V_YE.js";import"./context-DVKjoroo.js";import"./useStatic-BfaH_n72.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,hr as default};
