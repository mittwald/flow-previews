import{j as r,r as x}from"./iframe-BWhqP90_.js";import{b as a,u as l,F as d,t as j}from"./Form-BHDfIGsT.js";import{L as o}from"./Label-CkXiiFVS.js";import{R as c,S as f}from"./ResetButton-RzBAzJt2.js";import{B as p}from"./Button-BciJVpgP.js";import{S as b}from"./Section-CFf8UBa1.js";import{A as g}from"./ActionGroup-DDQLt8Fl.js";import{s as u}from"./Action-CBNAKVRZ.js";import{N as t}from"./NumberField-DkONdnoM.js";import{F as E}from"./FieldDescription-5m9L7yV9.js";import{F as S}from"./FieldError-C6zkn6e8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B9fZ3_-n.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./clsx-B-dksMZM.js";import"./index-BNCgjCzH.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./context-D1O-Xc3I.js";import"./browser-XxEUm-0T.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CvmhHdNV.js";import"./utils-DDxNv25V.js";import"./Hidden-40YeYLOA.js";import"./useRef-QCo4OIfF.js";import"./IconWarning-HbBBXO9Y.js";import"./remote-veunNUGL.js";import"./Text-ClKyFsNf.js";import"./EmulatedBoldText-BA_Kyk9l.js";import"./Text-CjPzL55g.js";import"./LoadingSpinner-CBZxi8OD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cDeaYk1j.js";import"./ProgressBar-CDLRkEMS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nvgQN0a7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CgTDaVBx.js";import"./useFocus-DGysuqof.js";import"./useFocusRing-BFEab5f2.js";import"./useFocusable-BfSSliyg.js";import"./ContextMenuSection-DVcDBRAK.js";import"./Dialog-CL817TCu.js";import"./RSPContexts-BQJ2nk5o.js";import"./OverlayArrow-O77-h4vA.js";import"./useControlledState-hpfIa3L8.js";import"./Collection-CczwQGta.js";import"./CollectionBuilder-Bu1khTRs.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./Separator-CHyDNsxt.js";import"./SelectionManager-DbhQkq7H.js";import"./useEvent-C-yeEGvr.js";import"./useCollator-BWqZHdF4.js";import"./FocusScope-D5dxNR-J.js";import"./VisuallyHidden-DRs-AG4l.js";import"./getActionGroupSlot-Bc3Q1XKp.js";import"./useStatic-Dg52ehJ-.js";import"./context-Bdh27yQP.js";import"./useFieldComponent-YclMbw8e.js";import"./useControlledHostValueProps-C21EOCgM.js";import"./FieldError-DkQ7rf97.js";import"./Form-i2Ec1WLh.js";import"./Group-BLDjWmxh.js";import"./Input-BjME0GkR.js";import"./useFormValidation-Dk5h1IP2.js";import"./useSpinButton-n_XNACTZ.js";import"./useFormReset-DqbCot7l.js";import"./useTextField-DMWCFIIv.js";import"./AlertText-Bb9-XBbW.js";import"./AlertIcon-DpUh0dNd.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
