import{r as F,j as r}from"./iframe-JHVlk64D.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./FormRootError-D0QsKVKu.js";import{B as d}from"./Button-BViHWx5D.js";import{S as x}from"./Section-Dlc8DpVc.js";import{A as E}from"./ActionGroup-DZgnsmND.js";import{s as c}from"./ActionBatch-1qW2-LTl.js";import{S as s}from"./Switch-qSM95aIv.js";import{F as j}from"./FieldError-DkKHEf-8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B8NPXIjt.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./clsx-B-dksMZM.js";import"./index-BF-KrcKY.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./context-ArJ603f0.js";import"./ActionGroupView-Bc17c7sh.js";import"./Content-BX3eZD3n.js";import"./Heading-B5Pon5qA.js";import"./Heading-DWwskDgI.js";import"./RSPContexts-BaSES6Qq.js";import"./utils-D9FbIhNL.js";import"./Text-D35H-2yr.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./Text-BPDMqDL5.js";import"./Modal-Dd9stJQr.js";import"./useOverlayController-B_kJVQUM.js";import"./useStatic-BkeDEY_1.js";import"./Overlay-KmyQfYDW.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./LoadingSpinner-Bl1fRewj.js";import"./IconWarning-D57fWT31.js";import"./remote-CdnDmctD.js";import"./Dialog-DIqACfnD.js";import"./Button-CV338ZHI.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dt-0MkOU.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocusable-vxzxlCI8.js";import"./OverlayArrow-DI9sbb4v.js";import"./useControlledState-BK0dEcU9.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./SelectionIndicator-D6El124b.js";import"./Separator-8crMrP-e.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./useCollator-YDjG1_LZ.js";import"./FocusScope-D4b0Moap.js";import"./VisuallyHidden-CJBb4HxH.js";import"./ButtonView-BHsHy_WH.js";import"./Flex-CNTnvpl9.js";import"./useRef-m6O5GTv_.js";import"./ContextMenuSection-0h5wVCnN.js";import"./getActionGroupSlot-DipsrrNF.js";import"./useFieldComponent-Dm_EHwx7.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BOoA6Az8.js";import"./useFormReset-CuVjUJoL.js";import"./FieldError-CB6gvg8S.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
