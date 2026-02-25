import{r as x,j as r}from"./iframe-DewKgIpk.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-Dpl1xNUH.js";import{L as o}from"./Label-DtIMFOsj.js";import{B as u}from"./Button-DK1DwTQu.js";import{S as g}from"./Section-Cq4fcZ5v.js";import{A as b}from"./ActionGroup-CsnGu6B4.js";import{s as p}from"./ActionBatch-aysWcgWo.js";import{N as t}from"./NumberField-BfmSKlKr.js";import{F as E}from"./FieldDescription-skgZIegf.js";import{F as S}from"./FieldError-B3PY7-i2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7D0Ds_bm.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./clsx-B-dksMZM.js";import"./index-BPUeLBAn.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./context-DymIffM8.js";import"./ActionGroupView-CAM-V0fg.js";import"./Content-DTiR9lwx.js";import"./Heading-Bsg56Dmn.js";import"./Heading-Bhkk33xY.js";import"./RSPContexts-CJFisqoy.js";import"./utils-CUPQPHYu.js";import"./Text-CAhyjFWz.js";import"./browser-D8jMTJt0.js";import"./EmulatedBoldText-DxGIr34d.js";import"./Text-CIY7d5XG.js";import"./Modal-DYibmbrU.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./Overlay-DezOH_1M.js";import"./OverlayContextProvider-DCwrSRDv.js";import"./LoadingSpinner-CskkGazD.js";import"./IconWarning-CrJxptLM.js";import"./remote-B1GLKgHd.js";import"./Dialog-BgAnH5cc.js";import"./Button-DrtrHFmq.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D1gJfZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-S1YnS57K.js";import"./useFocus-ChnOBFmm.js";import"./useFocusRing-DiJDuYpp.js";import"./useFocusable-DVz_n5zl.js";import"./OverlayArrow-C0FkFBtp.js";import"./useControlledState-AVItU9lZ.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./SelectionIndicator-BpbXr_mp.js";import"./Separator-CzQZZCJK.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./useCollator-Ip-lvHDB.js";import"./FocusScope-BsYVWh0v.js";import"./VisuallyHidden-DNvpUE5M.js";import"./ButtonView-DU9V458m.js";import"./Flex-Y2OL3ID-.js";import"./useRef-DAA7TMQ_.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-v31gfoed.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./useFieldComponent-D7thqSXy.js";import"./useControlledHostValueProps-mMjKsrzf.js";import"./FieldError-BKx1r64I.js";import"./Form-CIigNYkb.js";import"./Group-BwRkGpTi.js";import"./Input-BM_jCh0C.js";import"./useFormValidation-CdyRJz3a.js";import"./useSpinButton-MfeoF0zQ.js";import"./useFormReset-w2Qnh74g.js";import"./useTextField-CayEBnIr.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
