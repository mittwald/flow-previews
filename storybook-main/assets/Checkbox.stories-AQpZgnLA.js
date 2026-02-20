import{r as x,j as r}from"./iframe-DGnxviCN.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-DcAZwnDv.js";import{B as d}from"./Button-BVsKVkL8.js";import{S as j}from"./Section-DY27wNHr.js";import{A as b}from"./ActionGroup-p4MSAjMl.js";import{s as u}from"./ActionBatch-CX-JwDue.js";import{C as t}from"./Checkbox-Dk7-sFuj.js";import{F as E}from"./FieldError-D8VjacOs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DjV52Fwj.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./clsx-B-dksMZM.js";import"./index-CLLV6gyd.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./context-UPqYfqWR.js";import"./ActionGroupView-CgnnpUaC.js";import"./Content-7cyJH864.js";import"./Heading-DTe6jOe1.js";import"./Heading-BzIJuxDf.js";import"./RSPContexts-DVx2WDHj.js";import"./utils-BkfS5ksp.js";import"./Text-VNnveGPv.js";import"./browser-Cb_u6_6F.js";import"./EmulatedBoldText-DzMWb8wu.js";import"./Text-DvHtl8Bn.js";import"./Modal-Dxf8kS_f.js";import"./useOverlayController-5kwf29Lw.js";import"./useStatic-BeisnKXD.js";import"./Overlay-Dz43Qvxj.js";import"./OverlayContextProvider-DWOAvC95.js";import"./LoadingSpinner-DowiBEwh.js";import"./IconWarning-B9r0STX6.js";import"./remote-B6BjMgpw.js";import"./Dialog-4LBd4V1R.js";import"./Button-BPmMTYs3.js";import"./ProgressBar-BzVgRhsE.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BPNr7xBu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyY11qHx.js";import"./useFocus--s-Wd8Ep.js";import"./useFocusRing-Bv9AUNti.js";import"./useFocusable-Qpttz7ZN.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./useControlledState-Tnf2yuXg.js";import"./Collection-SZbXc0LG.js";import"./CollectionBuilder-DEOfwI8d.js";import"./SelectionIndicator-BVYQMpc5.js";import"./Separator-BN8d0XAg.js";import"./SelectionManager-C4F6MNyw.js";import"./useEvent-BwKzZdM2.js";import"./useCollator-2w2DhYsq.js";import"./FocusScope-CggPEhUf.js";import"./VisuallyHidden-BQzdTzN8.js";import"./ButtonView-B9Wck9x_.js";import"./Flex-COS4YHsY.js";import"./useRef-CexGozGe.js";import"./ContextMenuSection-BcwKnSYu.js";import"./getActionGroupSlot-rP5M9435.js";import"./useFieldComponent-YlKWY1fY.js";import"./FieldError-er7nowFJ.js";import"./Form-DxH8Icum.js";import"./useFormValidation-Dta_Z6Hx.js";import"./useToggleState-BlQNM6IB.js";import"./useFormReset-DURLcehp.js";import"./AlertText-CALscOJV.js";import"./AlertIcon-DgP01cQO.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
