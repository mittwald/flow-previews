import{j as r,R}from"./iframe-DOdCrrz9.js";import{P as i,a as x}from"./Popover-D2I_wG2X.js";import{B as h}from"./Button-B4t52lNZ.js";import{u as P}from"./DialogTriggerView-aJwD6Ful.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFFPDLjZ.js";import"./mergeRefs-VmgBpgq4.js";import"./index-CLjbgznf.js";import"./ClearPropsContextView-Br_9Bgha.js";import"./useFocus-D8b650dP.js";import"./ProgressBar-CMaicEWm.js";import"./utils-BhoG2uU0.js";import"./Label-CUfl9ZIc.js";import"./Hidden-Csx_ZN67.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-nPFfwg7P.js";import"./context-B_SSW0HI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DT9C-0RB.js";import"./IconWarning-B_Db9Y2d.js";import"./Text-BFGg7rBT.js";import"./browser-ChoqAG5f.js";import"./EmulatedBoldText-CTisuoOf.js";import"./Text-Cec-yt4l.js";import"./LoadingSpinner-iDIwh9pR.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D2q5K-i7.js";import"./Button-BQ3dFx8x.js";import"./usePress-Cgctm68w.js";import"./useFocusRing-DgTZQDGQ.js";import"./useFocusable-C6B3BW3Y.js";import"./context-CptZziwP.js";import"./useStatic-6ENCHy3p.js";import"./RSPContexts-OikXJV7Y.js";import"./FocusScope-BZjUyJi9.js";import"./useCollator-DDFrVUE2.js";import"./VisuallyHidden-CbboIbzH.js";import"./Collection-D29CaRkM.js";import"./CollectionBuilder-DNDqtAqI.js";import"./Separator-D4a_mIW-.js";import"./Group-CGSoOA49.js";import"./SearchField-D44cV1AG.js";import"./FieldError-Dz-HK9bS.js";import"./Form-D1kKLxzM.js";import"./useTextField-E_po2vaq.js";import"./useFormReset-BZL1wYkF.js";import"./TextField-D3yV1HlH.js";import"./useEvent-DybSIsxD.js";import"./SelectionManager-DE4WCsU3.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
