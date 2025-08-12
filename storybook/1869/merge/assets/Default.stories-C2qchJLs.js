import{j as r,R}from"./iframe-qMbEE3nZ.js";import{P as i,a as x}from"./Popover-DMdY6O5S.js";import{B as h}from"./Button-B092bVJN.js";import{u as P}from"./DialogTriggerView-uudYIBUg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-GFGOiqrH.js";import"./mergeRefs-BuWec918.js";import"./index-HDYuzCzu.js";import"./Dialog-BnaF-Tc6.js";import"./Button-Bonbvv9K.js";import"./utils-BD_t44OF.js";import"./ProgressBar-CF9ToJta.js";import"./Label-D0MPEMQA.js";import"./Hidden-D7F7fo4_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cq2dGHOX.js";import"./context-DPxByHJI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-7HicN3cp.js";import"./useFocus-DS8qI1YX.js";import"./useFocusRing-lD94xzjb.js";import"./useFocusable-D_wGn8G3.js";import"./RSPContexts-CqdzRs7m.js";import"./OverlayArrow-UgIBIUFh.js";import"./useControlledState-CNYZu0wD.js";import"./Collection-BoGlwmNV.js";import"./CollectionBuilder--Vm7JqBi.js";import"./Separator-i61FpY_s.js";import"./Text-cBZJFSe0.js";import"./Group-CL0zaHSQ.js";import"./SearchField-BlvkDSgb.js";import"./FieldError-BHMg81Vw.js";import"./Form-3qXBak_6.js";import"./useLocalizedStringFormatter-D-75WDAr.js";import"./useTextField-CGiD1Ab0.js";import"./useFormReset-D9SBe6RC.js";import"./TextField-Dz9bsQp0.js";import"./useEvent-CCJQzPdu.js";import"./SelectionManager-CTJHExhr.js";import"./useCollator-DOCzDbFi.js";import"./FocusScope-phx_Kgk6.js";import"./VisuallyHidden-BVlRlsah.js";import"./IconWarning-CQwCi0eF.js";import"./Text-BBRqDbdK.js";import"./browser-CDpjXLqz.js";import"./EmulatedBoldText-DSEgcFLX.js";import"./LoadingSpinner-YXQaSanI.js";import"./context-DL-Maxx4.js";import"./useStatic-DJ16hY-2.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
