import{j as r,r as S}from"./iframe-Eg8-wFCR.js";import{u as n,F as p}from"./Form-rEWg9Zdr.js";import{L as m}from"./Label-1lc8IvKU.js";import{B as d}from"./Button-bx6caw1c.js";import{S as x}from"./Section-CDeeOWJg.js";import{A as j}from"./ActionGroup-Bgv1jUgx.js";import{s as a}from"./Action-DV4LdD_S.js";import{S as s}from"./SearchField-Bmq-Pk0r.js";import{F as b}from"./FieldError-D_RdlzA4.js";import{F as c,t as E}from"./Field-uyOiJLAv.js";import{R as u}from"./ResetButton-Ct6ToO92.js";import{S as l}from"./SubmitButton-26fIdb4C.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CGaD3WbY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./index-7P9p2RDg.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./context-D30M243T.js";import"./Label-ayphvmky.js";import"./utils-DpUmHG9o.js";import"./Hidden-CPM5AGUb.js";import"./IconChevronDown-CB7etEhV.js";import"./remote-DyWsWGYm.js";import"./IconX-chnQqdsu.js";import"./IconCheck-CfWObqtZ.js";import"./Text-cFe2oWr9.js";import"./EmulatedBoldText-BvL31EIC.js";import"./Text-CVQZ1Ff_.js";import"./LoadingSpinner-l0sJlHn4.js";import"./ariaLive-JHqpu2fU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DrB4xT8J.js";import"./ProgressBar-BDU9deru.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiQu3Cp5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eXiMCUEC.js";import"./useFocus-BombNWQr.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocusable-CMi9d24v.js";import"./ContextMenuSection-DlfXeTZ7.js";import"./lib-90ocxLs-.js";import"./Dialog-BIruH5Sw.js";import"./RSPContexts-ajqDrbBU.js";import"./OverlayArrow-CDko6Bkl.js";import"./useControlledState-B4vwiKN6.js";import"./Collection-DZl0ZzX8.js";import"./CollectionBuilder-B_QcNnrf.js";import"./SelectionIndicator-LygQ_MIk.js";import"./Separator-DQMCvS0x.js";import"./SelectionManager-CFu8e8go.js";import"./useEvent-Cv81pFWJ.js";import"./useCollator-C-69fnSd.js";import"./FocusScope-BFrkZdE_.js";import"./VisuallyHidden-B_EYeIgM.js";import"./dynamic-DS6EBQ3r.js";import"./getActionGroupSlot-Dz1zi_Ez.js";import"./useStatic-BFryEnnL.js";import"./context-W5o617c2.js";import"./useFieldComponent-CePCnb_B.js";import"./IconClose-REzIHW0P.js";import"./IconSearch-CDdtYCc1.js";import"./useControlledHostValueProps-CMYSf_Mb.js";import"./FieldError-BwCFTN-W.js";import"./Form-DkJGoq-X.js";import"./Group-BHVgCnMY.js";import"./Input-q1ZC5BdI.js";import"./useTextField-BX8mCjCv.js";import"./useFormReset-BOxw_xUS.js";import"./useFormValidation-D_eOv9kq.js";import"./IconDanger-Djal8A6_.js";import"./useRef-BMP_ah12.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:c,render:()=>{const o=async F=>{await a(5e3),g(F)},h=n({defaultValues:{user:""}}),f=E();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(j,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
