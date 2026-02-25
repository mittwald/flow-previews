import{r as F,j as r}from"./iframe-DewKgIpk.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-Dpl1xNUH.js";import{B as d}from"./Button-DK1DwTQu.js";import{S as x}from"./Section-Cq4fcZ5v.js";import{A as E}from"./ActionGroup-CsnGu6B4.js";import{s as c}from"./ActionBatch-aysWcgWo.js";import{S as s}from"./Switch-DflGgK8j.js";import{F as j}from"./FieldError-B3PY7-i2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7D0Ds_bm.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./clsx-B-dksMZM.js";import"./index-BPUeLBAn.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./context-DymIffM8.js";import"./ActionGroupView-CAM-V0fg.js";import"./Content-DTiR9lwx.js";import"./Heading-Bsg56Dmn.js";import"./Heading-Bhkk33xY.js";import"./RSPContexts-CJFisqoy.js";import"./utils-CUPQPHYu.js";import"./Text-CAhyjFWz.js";import"./browser-D8jMTJt0.js";import"./EmulatedBoldText-DxGIr34d.js";import"./Text-CIY7d5XG.js";import"./Modal-DYibmbrU.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./Overlay-DezOH_1M.js";import"./OverlayContextProvider-DCwrSRDv.js";import"./LoadingSpinner-CskkGazD.js";import"./IconWarning-CrJxptLM.js";import"./remote-B1GLKgHd.js";import"./Dialog-BgAnH5cc.js";import"./Button-DrtrHFmq.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D1gJfZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-S1YnS57K.js";import"./useFocus-ChnOBFmm.js";import"./useFocusRing-DiJDuYpp.js";import"./useFocusable-DVz_n5zl.js";import"./OverlayArrow-C0FkFBtp.js";import"./useControlledState-AVItU9lZ.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./SelectionIndicator-BpbXr_mp.js";import"./Separator-CzQZZCJK.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./useCollator-Ip-lvHDB.js";import"./FocusScope-BsYVWh0v.js";import"./VisuallyHidden-DNvpUE5M.js";import"./ButtonView-DU9V458m.js";import"./Flex-Y2OL3ID-.js";import"./useRef-DAA7TMQ_.js";import"./ContextMenuSection-v31gfoed.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./useFieldComponent-D7thqSXy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ru_gTzXX.js";import"./useFormReset-w2Qnh74g.js";import"./FieldError-BKx1r64I.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
