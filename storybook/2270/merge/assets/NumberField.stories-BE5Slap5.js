import{j as r,r as x}from"./iframe-DcHapM8k.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-CulSlpBz.js";import{L as o}from"./Label-C_3MZF40.js";import{B as p}from"./Button-C1DQEdG6.js";import{S as g}from"./Section-BLxdCMFP.js";import{A as b}from"./ActionGroup-Bnr4k_2X.js";import{s as u}from"./Action-CLgptl7p.js";import{N as t}from"./NumberField-D1s0BacY.js";import{F as E}from"./FieldDescription-C8ShlXx2.js";import{F as S}from"./FieldError-BzyrakFb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-FNOw2F.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./clsx-B-dksMZM.js";import"./index-Ba4Wgmch.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./context-Camfekg3.js";import"./useRef-JV7f1HAx.js";import"./utils-BN-Wf9GB.js";import"./ButtonView-Bx--fAkF.js";import"./browser-BhJkGPhR.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./IconWarning-8t1q80cl.js";import"./remote-CrHpKc5j.js";import"./Text-BqUUaAMX.js";import"./EmulatedBoldText-BsmORSBd.js";import"./Text-KTnK0cez.js";import"./LoadingSpinner-DeuQI20n.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGX0xFqX.js";import"./ProgressBar-Dz7b_e2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVAEGcEm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DRRwHOXQ.js";import"./useFocus-ZXD30Rmm.js";import"./useFocusRing-Dt3gTaal.js";import"./useFocusable-CPQk5Kbw.js";import"./ContextMenuSection-Bxsn88Zf.js";import"./Dialog-gML-GktL.js";import"./RSPContexts-DXTQnhuO.js";import"./OverlayArrow-Ct2arrPt.js";import"./useControlledState-CD18I4-6.js";import"./Collection-y5T8eap-.js";import"./CollectionBuilder-edhcBSCU.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./Separator-DyT19d9_.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./getActionGroupSlot-BZTJVxAa.js";import"./useStatic-lCMR7rr_.js";import"./context-C5BkLhj5.js";import"./useFieldComponent-DLXIz4kk.js";import"./useControlledHostValueProps-BzOdOIBK.js";import"./FieldError-DeohvbOn.js";import"./Form-N_ssJC2Q.js";import"./Group-cOoV5f3K.js";import"./Input-_1JxoJ2g.js";import"./useFormValidation-C5Tej2mU.js";import"./useSpinButton-BP7YsR6p.js";import"./useFormReset-DByFRxt8.js";import"./useTextField-t09HgXOF.js";import"./AlertText-CmRq4USe.js";import"./AlertIcon-aSf31ti-.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
