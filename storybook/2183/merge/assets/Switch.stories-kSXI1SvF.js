import{j as r,r as F}from"./iframe-nUnY8CpM.js";import{u as n,F as p}from"./Form-CFvv8rQ9.js";import{F as a,t as S}from"./Field-CI5_U4-n.js";import{B as d}from"./Button-Drav3_ks.js";import{S as x}from"./Section-D3jyF995.js";import{A as E}from"./ActionGroup-DFwXau3j.js";import{s as c}from"./Action-Akn1uW1v.js";import{S as s}from"./Switch-ChNXX26H.js";import{F as j}from"./FieldError-Dl4XoXDz.js";import{R as u}from"./ResetButton-hHtNxjTm.js";import{S as l}from"./SubmitButton-DcdLNLZc.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-vyiLhVPE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-BZsQ8DvG.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./clsx-B-dksMZM.js";import"./index-D5rarCk0.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconX-CEHyWrnq.js";import"./IconCheck-CMQi8hKM.js";import"./Text-CKSRxaE3.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./Text-4n54moM_.js";import"./utils-DtyHAF7C.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./ariaLive-BFPjGELJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQlojcF-.js";import"./ProgressBar-BfYlkvzs.js";import"./Label-B7kFjMQQ.js";import"./Hidden-DuLhuFUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./ContextMenuSection-DH9LKzKz.js";import"./lib-90ocxLs-.js";import"./Dialog-x6GsWu_T.js";import"./RSPContexts-CWBH7SuF.js";import"./OverlayArrow-CHkAkv_A.js";import"./useControlledState-CaC4m18c.js";import"./Collection-DKxVpLoc.js";import"./CollectionBuilder-UHR0HG3W.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./Separator-DDl87Ima.js";import"./SelectionManager-f8KTi6JZ.js";import"./useEvent-DGx-2GiN.js";import"./useCollator-BNnpPJUs.js";import"./FocusScope-CB6t9Dkj.js";import"./VisuallyHidden-DJajrHPg.js";import"./getActionGroupSlot-CsQGMPlH.js";import"./useStatic-D4OCIKv7.js";import"./context-CUJwrxJk.js";import"./IconCheck-D_sA6pWQ.js";import"./IconClose-SanleU7O.js";import"./useFieldComponent-CwsJxGlb.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B4dvl8_m.js";import"./useFormReset-B9MhH15U.js";import"./FieldError-CG7ulvH_.js";import"./IconDanger-BtbJ86A5.js";import"./useRef-DngU7hM5.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:a,render:()=>{const t=async h=>{await c(5e3),B(h)},o=n({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=n();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
