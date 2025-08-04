import{j as r,R}from"./iframe-DycaE4yP.js";import{P as i,a as x}from"./Popover-_m3qz08e.js";import{B as h}from"./Button-BWHwfPz8.js";import{u as P}from"./DialogTriggerView-OJkhRApQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-K6I7evOF.js";import"./mergeRefs-DRF5sLLW.js";import"./index-DZjp0r4-.js";import"./Dialog-C2wfDSZ9.js";import"./Button-YH6NiS1R.js";import"./utils-BKIW_WGl.js";import"./ProgressBar-B6sVEMf9.js";import"./Label-BzQKezRD.js";import"./Hidden-BOdEkm3m.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dwjvyt4X.js";import"./context-CtP3BLUn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bp56TFyM.js";import"./useFocus-V6VDc_9L.js";import"./useFocusRing-DwXXK7Ot.js";import"./useFocusable-kod0IUYw.js";import"./RSPContexts-CBFW3KNe.js";import"./OverlayArrow-PE1jPlIu.js";import"./useControlledState-Do7JB9n2.js";import"./Collection-CWz6U0aO.js";import"./CollectionBuilder-CrmAPeoT.js";import"./Separator-Co3J7Hys.js";import"./Text-Co__d8QG.js";import"./Group-KDDOI2Xy.js";import"./SearchField-B79VrsM9.js";import"./FieldError-BPjBaqMq.js";import"./Form-BeDIwDDj.js";import"./useLocalizedStringFormatter-D4Reb_cV.js";import"./useTextField-B1Jeh3_Y.js";import"./useFormReset-CJg24Tdt.js";import"./TextField-CUQT97wD.js";import"./useEvent-BR-ARNpt.js";import"./SelectionManager-D8Ui2ebE.js";import"./useCollator-CouMmKeo.js";import"./FocusScope-DfGH1q4v.js";import"./VisuallyHidden-BS8Lf4nY.js";import"./IconWarning-CT1lcMza.js";import"./Text-D7PtYJH6.js";import"./browser-BH60Xdrt.js";import"./EmulatedBoldText-BQ7yahrw.js";import"./LoadingSpinner-DrmlO1GU.js";import"./context-D9a_udGZ.js";import"./useStatic-CVcbCwvf.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
