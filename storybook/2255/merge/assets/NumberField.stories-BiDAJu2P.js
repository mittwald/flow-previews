import{j as r,r as x}from"./iframe-DEsugzBP.js";import{b as a,u as l,F as d,t as j}from"./Form-B8dgGO3Z.js";import{L as o}from"./Label-DyIqFkt_.js";import{R as c,S as f}from"./ResetButton-Dh103bg6.js";import{B as p}from"./Button-Bh57nksp.js";import{S as b}from"./Section-Xyeq4Po7.js";import{A as g}from"./ActionGroup-BfLYMaYj.js";import{s as u}from"./Action-DUjscWwq.js";import{N as t}from"./NumberField-CpLyX5gD.js";import{F as E}from"./FieldDescription-DsSfVktg.js";import{F as S}from"./FieldError-D0RH6F7V.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-FU-wbqWq.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./clsx-B-dksMZM.js";import"./index-DvVsbrc7.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./context-BA9NBDMH.js";import"./browser-DSOUTdOR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CT9VczkM.js";import"./utils-k3goWFVI.js";import"./Hidden-B9rA9ATP.js";import"./useRef-VricRyXd.js";import"./IconWarning-qDYXGw-D.js";import"./remote-Bm53ArvY.js";import"./Text-CGG2whlc.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";import"./LoadingSpinner-DJgoXeas.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-exCq-2.js";import"./ProgressBar-C-Sj7koa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn9RRRKS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CsaWzeZC.js";import"./useFocus-B3AZuBYY.js";import"./useFocusRing-DuZx28fv.js";import"./useFocusable-Bwqhhmq3.js";import"./ContextMenuSection-EcetDiW1.js";import"./Dialog-B0UO0Xtu.js";import"./RSPContexts-BS5BTC1y.js";import"./OverlayArrow-CBh5kmtO.js";import"./useControlledState-Dcr_irR6.js";import"./Collection-YQKIf0Qf.js";import"./CollectionBuilder-CkaEUbci.js";import"./SelectionIndicator-BsQYAog2.js";import"./Separator-DPTgStgW.js";import"./SelectionManager-CV2D7rSd.js";import"./useEvent-Dk4Rqcvb.js";import"./useCollator-DjsjFHtz.js";import"./FocusScope-BvFRWRMs.js";import"./VisuallyHidden-DVFgokJG.js";import"./getActionGroupSlot-d_28ev7h.js";import"./useStatic-BMQe5ifs.js";import"./context-20QbnAW8.js";import"./useFieldComponent-CoV9Rbdv.js";import"./useControlledHostValueProps-CB-rODEV.js";import"./FieldError-DL7mdN7X.js";import"./Form-BBNX_R9o.js";import"./Group-LEKqTwAp.js";import"./Input-B5rLIpjG.js";import"./useFormValidation-DCx77s5O.js";import"./useSpinButton-CKk5ujQM.js";import"./useFormReset-D1Ly9aDH.js";import"./useTextField-D6Qak1On.js";import"./AlertText-B9jVXJTC.js";import"./AlertIcon-CMe_dxq6.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
