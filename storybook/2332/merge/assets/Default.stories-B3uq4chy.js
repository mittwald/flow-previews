import{r as g,j as r}from"./iframe-DewKgIpk.js";import{R as t}from"./Rating-DSMBl_zA.js";import{L as l}from"./Label-DtIMFOsj.js";import{F as R}from"./FieldError-B3PY7-i2.js";import{u as h,F as b,t as F}from"./ResetButton-Dpl1xNUH.js";import{B as f}from"./Button-DK1DwTQu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CrJxptLM.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./index-BPUeLBAn.js";import"./remote-B1GLKgHd.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./context-DymIffM8.js";import"./RadioGroup-CRfrWrGq.js";import"./utils-CUPQPHYu.js";import"./FieldError-BKx1r64I.js";import"./Text-CIY7d5XG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CIigNYkb.js";import"./useLabel-D1gJfZCU.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./SelectionIndicator-BpbXr_mp.js";import"./useFormValidation-CdyRJz3a.js";import"./useFocus-ChnOBFmm.js";import"./useFocusRing-DiJDuYpp.js";import"./useControlledState-AVItU9lZ.js";import"./FocusScope-BsYVWh0v.js";import"./useFormReset-w2Qnh74g.js";import"./usePress-S1YnS57K.js";import"./useFocusable-DVz_n5zl.js";import"./VisuallyHidden-DNvpUE5M.js";import"./useFieldComponent-D7thqSXy.js";import"./useMakeFocusable-DBTYyoZy.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";import"./dynamic-7D0Ds_bm.js";import"./ActionGroupView-CAM-V0fg.js";import"./Content-DTiR9lwx.js";import"./Heading-Bsg56Dmn.js";import"./Heading-Bhkk33xY.js";import"./RSPContexts-CJFisqoy.js";import"./Text-CAhyjFWz.js";import"./browser-D8jMTJt0.js";import"./EmulatedBoldText-DxGIr34d.js";import"./ActionGroup-CsnGu6B4.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./useStatic-P7ECoT8y.js";import"./Modal-DYibmbrU.js";import"./useOverlayController-dkwXzy8k.js";import"./Overlay-DezOH_1M.js";import"./OverlayContextProvider-DCwrSRDv.js";import"./LoadingSpinner-CskkGazD.js";import"./Dialog-BgAnH5cc.js";import"./Button-DrtrHFmq.js";import"./ProgressBar-rh0wULd6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-C0FkFBtp.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./Separator-CzQZZCJK.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./useCollator-Ip-lvHDB.js";import"./ActionBatch-aysWcgWo.js";import"./ButtonView-DU9V458m.js";import"./Flex-Y2OL3ID-.js";import"./useRef-DAA7TMQ_.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const wr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,wr as __namedExportsOrder,kr as default};
