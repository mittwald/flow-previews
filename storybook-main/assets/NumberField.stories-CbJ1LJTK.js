import{r as x,j as r}from"./iframe-BO07bPAa.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-CmT4K3eb.js";import{L as o}from"./Label-D0Lhb5Vq.js";import{B as p}from"./Button-CCtz8EXc.js";import{S as g}from"./Section-DvElnkSb.js";import{A as b}from"./ActionGroup-BkcQ2vZG.js";import{s as u}from"./Action-CP6j8Viu.js";import{N as t}from"./NumberField-Ck5YFPsW.js";import{F as E}from"./FieldDescription-DHxK4kFP.js";import{F as S}from"./FieldError-DlyPLChi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CShChD8Y.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./clsx-B-dksMZM.js";import"./index-C__iODou.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./context-DKHz4OX0.js";import"./useRef-DKBU6sSn.js";import"./utils-DpF9Snp1.js";import"./ButtonView-BuOsec3O.js";import"./browser-B0pBncgx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./IconWarning-ClLv5I07.js";import"./remote-C9jEPRv0.js";import"./Text-CwdryKSs.js";import"./EmulatedBoldText-Bl01c38V.js";import"./Text-sIV6FVOB.js";import"./LoadingSpinner-BTNHBT1C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CPst5v-a.js";import"./ProgressBar-BUHmhWxP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dans5Mom.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UbwEnmrk.js";import"./useFocus-ntzScLPi.js";import"./useFocusRing-DXebh_G-.js";import"./useFocusable-C66-pRTt.js";import"./ContextMenuSection-CU407IGI.js";import"./Dialog-BBC5U6gG.js";import"./RSPContexts-BnTR6z_r.js";import"./OverlayArrow-BbflWQr7.js";import"./useControlledState-DyIed2bM.js";import"./Collection-BC2XOQqq.js";import"./CollectionBuilder-CRw4EwC7.js";import"./SelectionIndicator-Dw6-XKp3.js";import"./Separator-DdhmoA8S.js";import"./SelectionManager-Chxg5cEr.js";import"./useEvent-D6dqrA9f.js";import"./useCollator-82KNa-4u.js";import"./FocusScope-BA1MxA3e.js";import"./VisuallyHidden-DCYSiy07.js";import"./getActionGroupSlot-CHQAyQmW.js";import"./useStatic-Dc6GYAIK.js";import"./context-D6FqIPNt.js";import"./useFieldComponent-B5uAaQ_H.js";import"./useControlledHostValueProps-Bu3gS6Hi.js";import"./FieldError-cxGJZPY3.js";import"./Form-BBekzR8e.js";import"./Group-DG91QlCP.js";import"./Input-Drs8jYRG.js";import"./useFormValidation-CRjEiOmE.js";import"./useSpinButton-BeYqg5l8.js";import"./useFormReset-D6_s6z9R.js";import"./useTextField-eFQNVRem.js";import"./AlertText-Ca5jxNB-.js";import"./AlertIcon-CagNIYo0.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
