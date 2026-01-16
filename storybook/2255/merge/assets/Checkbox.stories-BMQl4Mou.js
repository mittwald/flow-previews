import{j as r,r as x}from"./iframe-DEsugzBP.js";import{b as c,u as p,F as a,t as F}from"./Form-B8dgGO3Z.js";import{R as l,S as f}from"./ResetButton-Dh103bg6.js";import{B as d}from"./Button-Bh57nksp.js";import{S as j}from"./Section-Xyeq4Po7.js";import{A as b}from"./ActionGroup-BfLYMaYj.js";import{s as u}from"./Action-DUjscWwq.js";import{C as t}from"./Checkbox-COV0fRSB.js";import{F as E}from"./FieldError-D0RH6F7V.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-FU-wbqWq.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./clsx-B-dksMZM.js";import"./index-DvVsbrc7.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./context-BA9NBDMH.js";import"./browser-DSOUTdOR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-k3goWFVI.js";import"./useRef-VricRyXd.js";import"./IconWarning-qDYXGw-D.js";import"./remote-Bm53ArvY.js";import"./Text-CGG2whlc.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";import"./LoadingSpinner-DJgoXeas.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-exCq-2.js";import"./ProgressBar-C-Sj7koa.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn9RRRKS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CsaWzeZC.js";import"./useFocus-B3AZuBYY.js";import"./useFocusRing-DuZx28fv.js";import"./useFocusable-Bwqhhmq3.js";import"./ContextMenuSection-EcetDiW1.js";import"./Dialog-B0UO0Xtu.js";import"./RSPContexts-BS5BTC1y.js";import"./OverlayArrow-CBh5kmtO.js";import"./useControlledState-Dcr_irR6.js";import"./Collection-YQKIf0Qf.js";import"./CollectionBuilder-CkaEUbci.js";import"./SelectionIndicator-BsQYAog2.js";import"./Separator-DPTgStgW.js";import"./SelectionManager-CV2D7rSd.js";import"./useEvent-Dk4Rqcvb.js";import"./useCollator-DjsjFHtz.js";import"./FocusScope-BvFRWRMs.js";import"./VisuallyHidden-DVFgokJG.js";import"./getActionGroupSlot-d_28ev7h.js";import"./useStatic-BMQe5ifs.js";import"./context-20QbnAW8.js";import"./useFieldComponent-CoV9Rbdv.js";import"./FieldError-DL7mdN7X.js";import"./Form-BBNX_R9o.js";import"./useFormValidation-DCx77s5O.js";import"./useToggleState-BtYhbPhR.js";import"./useFormReset-D1Ly9aDH.js";import"./AlertText-B9jVXJTC.js";import"./AlertIcon-CMe_dxq6.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),wr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Dr as __namedExportsOrder,wr as default};
