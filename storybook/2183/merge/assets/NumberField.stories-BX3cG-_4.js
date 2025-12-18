import{j as r,r as x}from"./iframe-C9fRvTrj.js";import{u as a,F as l}from"./Form-BnT7ftAH.js";import{L as o}from"./Label-BRzY6dIy.js";import{B as u}from"./Button-BYUXEkA_.js";import{S as j}from"./Section-Os3PQZDv.js";import{A as g}from"./ActionGroup-D8loN3Ok.js";import{s as d}from"./Action-DsOzwT3Y.js";import{N as t}from"./NumberField-DuKeb2QP.js";import{F as b}from"./FieldDescription-D93KtgO4.js";import{F as E}from"./FieldError-Bd58Epno.js";import{F as p,t as S}from"./Field-C9gkn32I.js";import{R as c}from"./ResetButton-Dd_iBR74.js";import{S as f}from"./SubmitButton-BwKhKVf4.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CUSAF5aW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9iKHe4d.js";import"./index-BKw8uTi3.js";import"./index-CLvMUAwA.js";import"./useLocalizedStringFormatter-zNln5p4w.js";import"./context-Bv4btMDO.js";import"./Label-DetJ9FyC.js";import"./utils-CPkfOZj3.js";import"./Hidden-D46P9k-k.js";import"./IconChevronDown-D_WjmewV.js";import"./remote-BH-MD2MY.js";import"./IconX-BNOWC-zb.js";import"./IconCheck-DKwGf3uB.js";import"./Text-D323xmXD.js";import"./EmulatedBoldText-CPA2fMYQ.js";import"./Text-BRNikD3K.js";import"./LoadingSpinner-CwlmKrOH.js";import"./ariaLive-ZUjptcOn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CwWpYEN0.js";import"./ProgressBar-DI2IDnVu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-KJitgciI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_4yw8jQQ.js";import"./useFocus-bSaDUtch.js";import"./useFocusRing-cRMmIaF9.js";import"./useFocusable-BSBdu-8d.js";import"./ContextMenuSection-BxarHMTi.js";import"./lib-90ocxLs-.js";import"./Dialog-CyDp-GbU.js";import"./RSPContexts-CUBdls5w.js";import"./OverlayArrow-iEWyRd5r.js";import"./useControlledState-BGzazcEz.js";import"./Collection-b6pGDgVm.js";import"./CollectionBuilder-BloNGw2M.js";import"./SelectionIndicator-Qi7XUyY0.js";import"./Separator-OMU_Us2E.js";import"./SelectionManager-CtYNKPbJ.js";import"./useEvent-CG8oG6I6.js";import"./useCollator-RZF5ztqV.js";import"./FocusScope-CuzzTLeS.js";import"./VisuallyHidden-FzUX7Nba.js";import"./dynamic-C1VXiIMv.js";import"./getActionGroupSlot-Dhkl0Gym.js";import"./useStatic-0FUtvL5U.js";import"./context-CrKYMuPA.js";import"./useFieldComponent-jGlg5Icl.js";import"./IconChevronUp-CTRpFAKb.js";import"./IconMinus-6If3rLGA.js";import"./IconPlus-IOGsAeee.js";import"./useControlledHostValueProps-DvGioMkI.js";import"./FieldError-BSiYpFWr.js";import"./Form-FOSkHwoF.js";import"./Group-DtY3YVtI.js";import"./Input-Cvlim89t.js";import"./useFormValidation-BLFhZbJU.js";import"./useSpinButton-D9vYyTc5.js";import"./useFormReset-CS_NLM25.js";import"./useTextField-BpilKR79.js";import"./IconDanger-Cax3VcTl.js";import"./useRef-CxgC11e8.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Qr={title:"Integrations/React Hook Form/NumberField",component:p,render:()=>{const e=async F=>{await d(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=S();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Xr as __namedExportsOrder,Qr as default};
