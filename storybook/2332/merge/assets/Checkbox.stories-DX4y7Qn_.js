import{r as x,j as r}from"./iframe-CDsKaBRg.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-BwL6hTeN.js";import{B as d}from"./Button-DrVGXfuQ.js";import{S as j}from"./Section-COUCeP8U.js";import{A as b}from"./ActionGroup-DpRNak7X.js";import{s as u}from"./ActionBatch-Jyp25YdZ.js";import{C as t}from"./Checkbox-BGqM8uBm.js";import{F as E}from"./FieldError-CR7kl2wA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtOpUuGK.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./clsx-B-dksMZM.js";import"./index-RjKRi-BV.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./context-BPMj9VV_.js";import"./ActionGroupView-CPb_RrYj.js";import"./Content-hDAUdQXl.js";import"./Heading-DaIr1sLA.js";import"./Heading-CTLIsxjY.js";import"./RSPContexts-B8A9jPpa.js";import"./utils-D_LVRUjq.js";import"./Text-BC05_GH2.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";import"./Modal-BKmcb3Jp.js";import"./useOverlayController-B7-u35xe.js";import"./useStatic-B_kqalTp.js";import"./Overlay-DJH25hP-.js";import"./OverlayContextProvider-C6_d12zo.js";import"./LoadingSpinner-COR3vr_l.js";import"./IconWarning-BO7Rp0Xm.js";import"./remote-CceIEVln.js";import"./Dialog-C4SGct0D.js";import"./Button-BshsCdLp.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dan0bPtD.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useFocusable-C6i2fSTk.js";import"./OverlayArrow-DUsbU_k4.js";import"./useControlledState-daUq4f0n.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./SelectionIndicator-Dg52EWqk.js";import"./Separator-DOC4rouP.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./FocusScope-BDZMZ6lz.js";import"./VisuallyHidden-BzY4kZPn.js";import"./ButtonView-DkT0_tka.js";import"./Flex-C5S7EQFf.js";import"./useRef-CetA4uZk.js";import"./ContextMenuSection-BtR3HXLs.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./useFieldComponent-CC8SHRwT.js";import"./FieldError-CoNTUoG6.js";import"./Form-CsNQY4H6.js";import"./useFormValidation-B4cT2hyf.js";import"./useToggleState-CldrOvnp.js";import"./useFormReset-CxPQXG_K.js";import"./AlertText-BdJT91v6.js";import"./AlertIcon-BRHbbzl7.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
