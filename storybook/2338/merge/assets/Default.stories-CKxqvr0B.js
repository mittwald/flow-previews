import{r as d,j as r}from"./iframe-BXGfha1q.js";import{R as e}from"./Rating-P8Dv4MHn.js";import{L as m}from"./Label-DmvSuQEb.js";import{F as u}from"./FieldError-B0wR5GbE.js";import{u as c,F as g,t as f}from"./ResetButton-BJ_wNjWf.js";import{B as R}from"./Button-DfmOHFsC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-1Z1PxSqQ.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./remote-DEIhwdad.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./RadioGroup-CgbFsYj7.js";import"./utils-DDzB-hS3.js";import"./FieldError-B-_MD7Je.js";import"./Text-B1oZgTuN.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C11JLohN.js";import"./useLabel-DPznQWXv.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./SelectionIndicator-DRZNhSye.js";import"./useFormValidation-51U-qV9x.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useControlledState-Wh-cgAjH.js";import"./FocusScope-DorKcprJ.js";import"./useFormReset-9RWtv4Ar.js";import"./usePress-DFEm-gMh.js";import"./useFocusable-DT8F95KZ.js";import"./VisuallyHidden-eEVd_sfi.js";import"./useFieldComponent-BBRXs3en.js";import"./useMakeFocusable-CYA8YNba.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";import"./dynamic-Cx3iunOI.js";import"./ActionGroupView-B4EOVs6v.js";import"./Content-BvqimwwE.js";import"./Heading-BHfoL7cG.js";import"./Heading-uLzTRNHK.js";import"./RSPContexts-CG0vEblW.js";import"./Text-BbFupL_Y.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./ActionGroup-CxRxNddr.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./useStatic-BExQ1RD0.js";import"./Modal-BngkIUxs.js";import"./useOverlayController-yGpX5sn6.js";import"./Overlay-Bxv8vuKP.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./LoadingSpinner-CnywtlQ4.js";import"./Dialog-DLzuiFtz.js";import"./Button-DxgvyAFC.js";import"./ProgressBar-BSSI2Xkr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CHQlEDE0.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./Separator-BLnBy1SU.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./ActionBatch-z52bmq8Z.js";import"./ButtonView-BYJeP13X.js";import"./Flex-BoCsVhbv.js";import"./useRef-DsRyiFKF.js";const zr={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      rating: number;
    }>({
      defaultValues: {
        rating: 2
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={async v => console.log(v.rating)}>
        <Field name="rating">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithControlledValue","WithForm"];export{o as Default,a as WithControlledValue,i as WithFieldError,n as WithForm,Or as __namedExportsOrder,zr as default};
